const http = require("http");
const fs = require("fs");
const path = require("path");

loadEnv();

const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const srcDir = path.join(rootDir, "src");
const port = Number(process.env.PORT || 5173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
};

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === "POST" && url.pathname === "/api/generate-image") {
      await handleGenerateImage(req, res);
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/rewrite-tone") {
      await handleRewriteTone(req, res);
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/chat") {
      await handleChat(req, res);
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/story") {
      await handleStory(req, res);
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/consumer") {
      await handleConsumer(req, res);
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/persuade") {
      await handlePersuade(req, res);
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/persuade-report") {
      await handlePersuadeReport(req, res);
      return;
    }

    if (req.method !== "GET" && req.method !== "HEAD") {
      sendJson(res, 405, { error: "Method not allowed" });
      return;
    }

    serveStatic(url.pathname, res);
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Internal server error" });
  }
});

server.listen(port, () => {
  console.log(`Character Studio running at http://localhost:${port}`);
});

function serveStatic(urlPath, res) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const filePath = resolveStaticPath(cleanPath);

  if (!filePath) {
    sendJson(res, 404, { error: "Not found" });
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
}

function resolveStaticPath(urlPath) {
  if (urlPath === "/") return path.join(publicDir, "index.html");

  const baseDir = urlPath.startsWith("/src/") ? rootDir : publicDir;
  const candidate = path.normalize(path.join(baseDir, urlPath));
  const allowedRoot = urlPath.startsWith("/src/") ? srcDir : publicDir;

  if (!candidate.startsWith(allowedRoot) || !fs.existsSync(candidate) || fs.statSync(candidate).isDirectory()) {
    return null;
  }

  return candidate;
}

async function handleGenerateImage(req, res) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    sendJson(res, 500, { error: "OPENROUTER_API_KEY is not configured" });
    return;
  }

  const body = await readJson(req);
  const prompt = String(body.prompt || "").trim();

  if (!prompt) {
    sendJson(res, 400, { error: "prompt is required" });
    return;
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost",
      "X-Title": "Character Studio"
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_IMAGE_MODEL || "google/gemini-2.5-flash-image",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      modalities: ["image", "text"]
    })
  });

  const data = await response.json();

  if (!response.ok) {
    sendJson(res, response.status, { error: "OpenRouter request failed", detail: data });
    return;
  }

  const { imageUrl, text } = extractImage(data);
  sendJson(res, 200, { imageUrl, text });
}

function extractImage(data) {
  const message = data && data.choices && data.choices[0] && data.choices[0].message;
  const images = message && message.images;
  const content = message && message.content;

  if (Array.isArray(images)) {
    for (const item of images) {
      const url = (item && item.image_url && item.image_url.url)
        || (item && item.imageUrl && item.imageUrl.url)
        || (item && item.url);
      if (url) return { imageUrl: url, text: stringContent(content) };
    }
  }

  if (Array.isArray(content)) {
    for (const item of content) {
      const url = (item && item.image_url && item.image_url.url)
        || (item && item.imageUrl && item.imageUrl.url)
        || (item && item.image_url)
        || (item && item.imageUrl)
        || (item && item.url);
      if (url) return { imageUrl: url, text: stringContent(content) };
      if (item && item.type === "text" && typeof item.text === "string" && item.text.startsWith("data:image/")) {
        return { imageUrl: item.text, text: item.text };
      }
    }
  }

  if (typeof content === "string") {
    const dataUrl = content.match(/data:image\/[a-zA-Z0-9.+-]+;base64,[A-Za-z0-9+/=]+/);
    if (dataUrl) return { imageUrl: dataUrl[0], text: content };

    const markdownUrl = content.match(/!\[[^\]]*]\((https?:\/\/[^)]+)\)/);
    if (markdownUrl) return { imageUrl: markdownUrl[1], text: content };

    const plainUrl = content.match(/https?:\/\/\S+\.(png|jpg|jpeg|webp)(\?\S*)?/i);
    if (plainUrl) return { imageUrl: plainUrl[0], text: content };
  }

  return { imageUrl: "", text: stringContent(content) };
}

function stringContent(content) {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .map((item) => (item && (item.text || item.content)) || "")
    .filter(Boolean)
    .join("\n");
}

async function handleRewriteTone(req, res) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    sendJson(res, 500, { error: "OPENROUTER_API_KEY is not configured" });
    return;
  }

  const body = await readJson(req);
  const text = String(body.text || "").trim();
  const personaName = String(body.personaName || "").trim();
  const personaPrompt = String(body.personaPrompt || "").trim();

  if (!text) {
    sendJson(res, 400, { error: "text is required" });
    return;
  }

  // 적용할 페르소나가 없으면 원문을 그대로 돌려준다.
  if (!personaName || !personaPrompt) {
    sendJson(res, 200, { text });
    return;
  }

  const systemPrompt = [
    "당신은 채팅 메시지의 말투를 특정 페르소나에 맞게 다시 써 주는 도구입니다.",
    "규칙:",
    "1. 원문의 의미와 의도는 절대 바꾸지 마세요. 새로운 정보, 질문, 답변을 추가하지 마세요.",
    "2. 원문이 한국어이면 한국어로 유지하세요.",
    "3. 아래 페르소나의 말투·어조·태도가 드러나도록 문장을 자연스럽게 고쳐 쓰세요.",
    "4. 설명, 따옴표, 머리말 없이 고쳐 쓴 문장만 출력하세요.",
    `페르소나: ${personaName}`,
    `페르소나 설명: ${personaPrompt}`
  ].join("\n");

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost",
      "X-Title": "Character Studio"
    },
    body: JSON.stringify({
      model: textModel(),
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: text }
      ],
      temperature: 0.7,
      max_tokens: 400
    })
  });

  const data = await response.json();

  if (!response.ok) {
    sendJson(res, response.status, { error: "OpenRouter request failed", detail: data });
    return;
  }

  const rewritten = data
    && data.choices
    && data.choices[0]
    && data.choices[0].message
    && typeof data.choices[0].message.content === "string"
    ? data.choices[0].message.content.trim()
    : "";

  sendJson(res, 200, { text: rewritten || text });
}

async function handleChat(req, res) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    sendJson(res, 500, { error: "OPENROUTER_API_KEY is not configured" });
    return;
  }

  const body = await readJson(req);
  const character = body.character || {};
  const persona = body.persona || {};
  const history = Array.isArray(body.messages) ? body.messages : [];

  if (!character.name) {
    sendJson(res, 400, { error: "character is required" });
    return;
  }
  if (history.length === 0) {
    sendJson(res, 400, { error: "messages are required" });
    return;
  }

  const personaLine = persona.prompt
    ? `대화 상대(사용자)의 성향: ${persona.prompt}`
    : "대화 상대(사용자)는 특별한 페르소나 없이 본인으로 대화합니다.";

  const systemPrompt = [
    `당신은 아래 캐릭터를 1인칭으로 연기하는 롤플레이 AI입니다. 캐릭터의 성격과 말투를 일관되게 유지하며 한국어로 자연스럽게 대화하세요.`,
    "",
    "[캐릭터 설정]",
    `이름: ${character.name}`,
    character.role ? `장르/역할: ${character.role}` : "",
    character.trait ? `성격: ${character.trait}` : "",
    character.tone ? `말투: ${character.tone}` : "",
    character.appearance ? `외모: ${character.appearance}` : "",
    character.trigger ? `현재 장면(시작 상황): ${character.trigger}` : "",
    character.relationshipArc ? `관계 전개 방향: ${character.relationshipArc}` : "",
    character.secret ? `숨겨진 비밀(직접 말하지 말고 행동·뉘앙스로만 암시할 것): ${character.secret}` : "",
    "",
    "[규칙]",
    "1. 항상 위 캐릭터의 말투와 성격을 유지하세요. 말투에 존댓말이 드러나면 존댓말을, 반말이면 반말을 일관되게 쓰세요.",
    "2. 바로 직전에 상대(사용자)가 한 말에 직접 반응하세요. 이미 설정된 장면과 맥락을 이어가고, 무관한 새 상황이나 인물을 지어내지 마세요.",
    "3. 비밀은 절대 직접 설명하지 말고, 분위기나 망설임으로만 흘리세요.",
    `4. ${personaLine}`,
    "5. 메타 발언, 설명, AI라는 언급 없이 오직 캐릭터로서만 말하세요.",
    "6. 1~3문장 정도로 간결하고 장면감 있게 답하세요. 필요하면 *행동 묘사*를 별표로 덧붙여도 됩니다."
  ].filter(Boolean).join("\n");

  const messages = [{ role: "system", content: systemPrompt }];
  for (const item of history) {
    const role = item.role === "user" ? "user" : "assistant";
    const content = String(item.content || "").trim();
    if (content) messages.push({ role, content });
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost",
      "X-Title": "Character Studio"
    },
    body: JSON.stringify({
      model: textModel(),
      messages,
      temperature: 0.7,
      max_tokens: 500
    })
  });

  const data = await response.json();

  if (!response.ok) {
    sendJson(res, response.status, { error: "OpenRouter request failed", detail: data });
    return;
  }

  const reply = data
    && data.choices
    && data.choices[0]
    && data.choices[0].message
    && typeof data.choices[0].message.content === "string"
    ? data.choices[0].message.content.trim()
    : "";

  sendJson(res, 200, { text: reply });
}

async function handleStory(req, res) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    sendJson(res, 500, { error: "OPENROUTER_API_KEY is not configured" });
    return;
  }

  const body = await readJson(req);
  const text = String(body.text || "").trim();
  if (!text) {
    sendJson(res, 400, { error: "text is required" });
    return;
  }

  const systemPrompt = [
    "당신은 웹소설·시나리오 작가를 돕는 줄거리 제안 도구입니다.",
    "사용자가 지금까지의 이야기를 주면, 그 이야기의 마지막 상황에서 곧바로 이어지는 줄거리 후보 3개를 제안하세요.",
    "반드시 입력에 등장한 인물·장소·상황만 사용하세요. 입력에 나오지 않은 새 인물(예: 친구, 가족), 새 소재(예: 일기장, 계약서, 초능력)나 새 사건을 지어내지 마세요.",
    "입력의 핵심 요소(예: 특정 인물이 가진 단서나 비밀)를 반드시 전개의 중심에 두세요.",
    "각 후보는 서로 다른 방향(예: 갈등 심화, 반전, 관계 변화)이어야 합니다.",
    "반드시 아래 JSON 배열 형식으로만 출력하세요. 코드펜스나 설명 문장은 절대 넣지 마세요.",
    '[{"title":"짧은 제목","content":"2~3문장의 구체적인 전개"}]',
    "title은 12자 내외, content는 한국어 2~3문장으로 작성하세요."
  ].join("\n");

  try {
    const reply = await requestChatCompletion(apiKey, textModel(), [
      { role: "system", content: systemPrompt },
      { role: "user", content: text }
    ], 0.6, 800);
    const suggestions = parseJsonArray(reply);
    if (!suggestions) {
      sendJson(res, 502, { error: "모델 응답을 파싱하지 못했습니다." });
      return;
    }
    sendJson(res, 200, { suggestions });
  } catch (error) {
    sendJson(res, 502, { error: error.message || "story generation failed" });
  }
}

async function handleConsumer(req, res) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    sendJson(res, 500, { error: "OPENROUTER_API_KEY is not configured" });
    return;
  }

  const body = await readJson(req);
  const product = String(body.product || "").trim();
  const consumers = Array.isArray(body.consumers) ? body.consumers : [];
  if (!product) {
    sendJson(res, 400, { error: "product is required" });
    return;
  }
  if (consumers.length === 0) {
    sendJson(res, 400, { error: "consumers are required" });
    return;
  }

  const systemPrompt = [
    "당신은 소비자 반응 시뮬레이터입니다. 당신의 역할은 분석가가 아니라, 각 소비자 본인이 되어 그 사람의 입으로 직접 말하는 것입니다.",
    "각 페르소나에는 name(이름), type(유형), age(나이), background(배경), need(핵심 니즈), mood(기본 무드), tone(말투), purchaseFlow(구매 결정 흐름), positiveReaction(이 소비자가 마음에 들 때 하는 말투 예시), negativeReaction(이 소비자가 시큰둥할 때 하는 말투 예시), persuasionKeywords(설득 핵심 키워드) 정보가 주어집니다.",
    "positiveReaction과 negativeReaction은 그 소비자의 실제 말투를 보여주는 참고 예시입니다. reaction을 쓸 때 이 예시들의 어조·어미·구어체 느낌을 그대로 흉내 내세요. 단, 예시 문장을 그대로 복사하지는 말고 이번 제품에 맞는 새로운 반응을 만드세요.",
    "reaction은 반드시 해당 소비자가 그 자리에서 직접 내뱉는 1인칭 구어체 2~3문장이어야 합니다. (예: \"오 이거 좀 끌리는데?\", \"음... 저한테 필요할까요?\" 같은 실제 말투)",
    "reaction에는 그 소비자가 자신의 purchaseFlow(구매 결정 흐름)에 따라 무엇을 먼저 따지고 무엇을 확인하려 하는지가 자연스럽게 드러나야 합니다. (가격을 먼저 따지는 사람이면 가격 얘기부터, 후기를 먼저 보는 사람이면 후기 얘기부터 꺼내는 식)",
    "절대 금지: '제품명: ... 가격: ... 핵심 기능: ...' 처럼 제품 정보를 문장 앞에 그대로 붙이거나 요약하지 마세요.",
    "절대 금지: '이 유형은 ~합니다', '이 소비자는 ~할 것입니다' 같은 제3자 시점의 분석문. reaction은 분석이 아니라 그 사람이 직접 하는 말입니다.",
    "guide에는 해당 소비자의 need와 persuasionKeywords를 공략하기 위한 실행 가능한 조언을 담으세요. (guide는 마케터에게 주는 조언이므로 3인칭이어도 됩니다.)",
    "제품 정보에 실제로 명시된 내용만 근거로 삼으세요. 명시되지 않은 사실(가격, 보증, 기능 등)을 지어내거나 다른 값으로 바꾸지 마세요.",
    "반드시 아래 JSON 배열 형식으로만 출력하세요. 코드펜스나 설명 문장은 절대 넣지 마세요.",
    '[{"name":"이름","reaction":"그 소비자가 직접 말하는 1인칭 구어체 반응 2~3문장","guide":"이 소비자를 설득하기 위한 실행 가능한 조언 1~2문장"}]',
    "name 필드에는 아래 목록에 적힌 이름을 글자 그대로 복사하세요(다른 표현으로 바꾸지 마세요). 모든 소비자에 대해 빠짐없이 출력하세요. 한국어로 작성하세요."
  ].join("\n");

  const userContent = [
    `제품/서비스 정보:\n${product}`,
    "",
    `소비자 유형 목록(JSON):\n${JSON.stringify(consumers)}`
  ].join("\n");

  try {
    const reply = await requestChatCompletion(apiKey, textModel(), [
      { role: "system", content: systemPrompt },
      { role: "user", content: userContent }
    ], 0.3, 1200);
    const results = parseJsonArray(reply);
    if (!results) {
      sendJson(res, 502, { error: "모델 응답을 파싱하지 못했습니다." });
      return;
    }
    // 모델이 유형 이름을 바꿔도, 순서가 같으면 원래 이름을 결정적으로 복원한다.
    if (results.length === consumers.length) {
      results.forEach((item, index) => { item.name = consumers[index].name; });
    }
    sendJson(res, 200, { results });
  } catch (error) {
    sendJson(res, 502, { error: error.message || "consumer simulation failed" });
  }
}

async function handlePersuade(req, res) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    sendJson(res, 500, { error: "OPENROUTER_API_KEY is not configured" });
    return;
  }

  const body = await readJson(req);
  const product = String(body.product || "").trim();
  const consumer = body.consumer || {};
  const history = Array.isArray(body.messages) ? body.messages : [];

  if (!product || !consumer.name) {
    sendJson(res, 400, { error: "product and consumer are required" });
    return;
  }

  const systemPrompt = [
    `당신은 "${consumer.name}"라는 소비자를 1인칭으로 연기합니다. 판매자(사용자)가 아래 제품을 두고 당신을 설득합니다.`,
    consumer.type ? `당신의 소비 성향 유형: ${consumer.type}` : "",
    consumer.age ? `당신의 나이: ${consumer.age}세` : "",
    consumer.background ? `당신의 배경: ${consumer.background}` : "",
    consumer.need ? `당신의 핵심 니즈: ${consumer.need}` : "",
    consumer.mood ? `당신의 기본 태도: ${consumer.mood}` : "",
    consumer.tone ? `당신의 말투(반드시 이 말투를 그대로 유지): ${consumer.tone}` : "",
    consumer.purchaseFlow ? `당신의 구매 결정 흐름: ${consumer.purchaseFlow}` : "",
    consumer.persuasionKeywords ? `당신의 마음을 움직이는 설득 핵심 키워드: ${consumer.persuasionKeywords}` : "",
    consumer.reaction ? `이 제품에 대한 당신의 첫 반응: ${consumer.reaction}` : "",
    "",
    "[제품/서비스 정보]",
    product,
    "",
    "[규칙]",
    "1. 반드시 위 '말투'를 그대로 살려 해당 소비자답게 현실적으로 반응하세요. 쉽게 넘어가지 말고, 니즈가 충족되면 마음을 여세요.",
    "2. 구매 판단은 위 '구매 결정 흐름'의 단계를 따라 진행하세요. 아직 확인하지 못한 단계가 남아 있으면 그 부분을 짚으며 신중하게 반응하세요.",
    "3. 판매자의 말에 위 '설득 핵심 키워드'에 해당하는 내용이 등장하면 마음이 뚜렷하게 움직여 구매 의향(probability)을 의미 있게 올리세요. 반대로 핵심 키워드가 전혀 언급되지 않거나 니즈·태도와 어긋나면 구매 의향을 낮게 유지하거나 내리세요.",
    "4. 매 턴, 지금 시점의 구매 의향을 0~100 정수로 평가하세요.",
    "5. 아직 대화가 없으면(첫 진입) 제품에 대한 솔직한 첫인상을 위 말투로 1~2문장 말하고 시작 구매 의향을 추정하세요.",
    "6. reply는 소비자로서의 발화 1~3문장입니다. 메타 발언이나 설명은 넣지 마세요.",
    "7. 반드시 아래 JSON 객체로만 출력하세요. 코드펜스나 다른 텍스트는 절대 넣지 마세요.",
    '{"reply":"소비자 발화","probability":정수}'
  ].filter(Boolean).join("\n");

  const messages = [{ role: "system", content: systemPrompt }];
  for (const item of history) {
    const role = item.role === "user" ? "user" : "assistant";
    const content = String(item.content || "").trim();
    if (content) messages.push({ role, content });
  }
  if (history.length === 0) {
    messages.push({ role: "user", content: "(대화 시작) 제품에 대한 첫인상과 시작 구매 의향을 알려주세요." });
  }

  try {
    const out = await requestChatCompletion(apiKey, textModel(), messages, 0.7, 500);
    const obj = parseJsonObject(out);
    if (!obj) {
      sendJson(res, 502, { error: "모델 응답을 파싱하지 못했습니다." });
      return;
    }
    sendJson(res, 200, {
      reply: String(obj.reply || "").trim(),
      probability: clampProbability(obj.probability)
    });
  } catch (error) {
    sendJson(res, 502, { error: error.message || "persuade failed" });
  }
}

async function handlePersuadeReport(req, res) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    sendJson(res, 500, { error: "OPENROUTER_API_KEY is not configured" });
    return;
  }

  const body = await readJson(req);
  const product = String(body.product || "").trim();
  const consumer = body.consumer || {};
  const history = Array.isArray(body.messages) ? body.messages : [];
  const probability = clampProbability(body.probability);

  if (!product || !consumer.name || history.length === 0) {
    sendJson(res, 400, { error: "product, consumer, messages are required" });
    return;
  }

  const systemPrompt = [
    "당신은 세일즈 코치입니다. 아래는 판매자가 특정 유형의 가상 소비자를 1:1로 설득한 대화입니다.",
    "이 대화를 분석해, 해당 소비자의 구매를 이끌어내기 위한 실전 보고서를 한국어 마크다운으로 작성하세요.",
    "아래 구조를 반드시 따르세요:",
    `# 설득 보고서 — ${consumer.name}`,
    "## 요약",
    "## 잘한 점",
    "## 아쉬운 점 / 놓친 포인트",
    "## 이 소비자의 핵심 구매 트리거",
    "## 다음에 시도할 설득 전략 (3~5개, 구체적이고 실행 가능하게)",
    "마크다운 외의 군더더기 텍스트(코드펜스, 머리말)는 출력하지 마세요."
  ].join("\n");

  const transcript = history
    .map((m) => `${m.role === "user" ? "판매자" : "소비자"}: ${String(m.content || "").trim()}`)
    .join("\n");

  const userContent = [
    `소비자 유형: ${consumer.name}`,
    consumer.need ? `니즈: ${consumer.need}` : "",
    consumer.mood ? `태도: ${consumer.mood}` : "",
    `최종 구매 의향: ${probability}%`,
    "",
    "[제품/서비스 정보]",
    product,
    "",
    "[대화 기록]",
    transcript
  ].filter(Boolean).join("\n");

  try {
    const report = await requestChatCompletion(apiKey, textModel(), [
      { role: "system", content: systemPrompt },
      { role: "user", content: userContent }
    ], 0.5, 1500);
    sendJson(res, 200, { report: stripCodeFence(report) });
  } catch (error) {
    sendJson(res, 502, { error: error.message || "report failed" });
  }
}

// 0~100 정수로 보정. 파싱 불가하면 50.
function clampProbability(value) {
  const n = Math.round(Number(value));
  if (Number.isNaN(n)) return 50;
  return Math.max(0, Math.min(100, n));
}

// 모델 응답에서 JSON 객체를 추출해 파싱한다.
function parseJsonObject(text) {
  if (!text) return null;
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    const parsed = JSON.parse(text.slice(start, end + 1));
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

// 마크다운을 코드펜스(```)로 감싸 보낸 경우 펜스를 제거한다.
function stripCodeFence(text) {
  if (!text) return "";
  return text.replace(/^```[a-zA-Z]*\n?/, "").replace(/\n?```\s*$/, "").trim();
}

// 모든 텍스트 작업(대화·말투 보정·이야기·소비자)에 쓰는 모델.
function textModel() {
  return process.env.OPENROUTER_TEXT_MODEL || "google/gemini-2.5-flash";
}

// OpenRouter 채팅 모델을 호출해 응답 텍스트를 반환한다.
async function requestChatCompletion(apiKey, model, messages, temperature, maxTokens) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost",
      "X-Title": "Character Studio"
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      max_tokens: maxTokens
    })
  });

  const data = await response.json();
  if (!response.ok) {
    const detail = data && data.error && data.error.message ? data.error.message : "OpenRouter request failed";
    throw new Error(detail);
  }

  return data
    && data.choices
    && data.choices[0]
    && data.choices[0].message
    && typeof data.choices[0].message.content === "string"
    ? data.choices[0].message.content.trim()
    : "";
}

// 모델 응답에서 JSON 배열을 추출해 파싱한다. 코드펜스/잡텍스트가 섞여도 처리한다.
function parseJsonArray(text) {
  if (!text) return null;
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    const parsed = JSON.parse(text.slice(start, end + 1));
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    // Buffer 청크를 모아 한 번에 UTF-8로 디코딩한다.
    // (chunk를 문자열로 바로 이어붙이면 멀티바이트 문자가 청크 경계에서 깨진다.)
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      chunks.push(chunk);
      size += chunk.length;
      if (size > 1_000_000) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      try {
        const raw = Buffer.concat(chunks).toString("utf8");
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function loadEnv() {
  const envPath = path.resolve(__dirname, "..", ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}
