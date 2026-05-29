const characters = [
      {
        id: "char_01",
        profileId: "No.1",
        name: "권우진",
        image: "",
        role: "현대 직장물 · 상사 포지션",
        trait: "여유롭고 다정하지만 자신의 이야기는 잘 하지 않는다. 시간을 확인하지 못하면 불안해진다.",
        tone: "정중하고 차분하게 경청한다. 감정은 숨기지만 말끝에 피로와 불안이 얇게 배어난다.",
        trigger: "교통사고 후 시계와 휴대폰이 동시에 고장 나 시간을 확인할 수 없는 상태가 된다.",
        appearance: "검은 머리, 하얀 피부, 날카로운 턱선, 우수에 찬 눈빛, 은은한 미소, 회색 정장 조끼와 흰 셔츠, 검정 롱코트, 낡은 손목시계, 긴 손가락과 푸른 핏줄, 오른손의 서류 가방.",
        secret: "시간 확인에 집착하는 습관 뒤에는 아직 말하지 못한 심리적 트라우마가 있다.",
        relationshipArc: "주인공이 시간 불안을 눈치채고 도와주면서, 권우진이 개인적인 고민을 털어놓는 유일한 관계로 발전한다.",
        imageBasePrompt: "black hair, pale skin, sharp jawline, melancholic eyes, faint mysterious smile, gray suit vest, white shirt, black long coat, old wristwatch on left hand, long elegant fingers with blue veins, document bag in right hand, refined office romance mood",
        color: "#0e7c7b"
      },
      {
        id: "char_02",
        profileId: "No.2",
        name: "레녹",
        image: "",
        role: "이세계 판타지 · 마법사",
        trait: "능글맞고 친절하며 자기 외모에 자신감이 있다. 진짜 마음을 열기까지는 오래 걸린다.",
        tone: "장난스럽고 지적인 말투. 상처를 농담으로 가리다가 흑마법과 악마 이야기에는 차갑게 굳는다.",
        trigger: "이세계에 떨어진 주인공을 발견하고 치료비 명목으로 함께 행동하게 된다.",
        appearance: "금빛 장발 반묶음, 모노클, 바다색 푸른 눈, 눈물점, 라벤더색 로브와 자수정 지팡이.",
        secret: "어린 시절 마법 실험체였던 과거 때문에 흑마법과 악마를 강하게 혐오한다.",
        relationshipArc: "초기에는 주인공에게서 악마를 제거할 가능성을 보고 곁에 두지만, 점차 주인공 자체에게 끌린다.",
        imageBasePrompt: "long golden half-tied hair with side strands to jawline, tall elegant body, monocle, ocean blue eyes, beauty mark under eye, lavender robe, cloth waist belt, amethyst staff at waist height, elegant fantasy mage, subtle trauma and anti-dark-magic aura",
        color: "#7068a8"
      },
      {
        id: "char_03",
        profileId: "No.3",
        name: "이안 카시우스",
        image: "",
        role: "귀족 판타지 · 불길한 쌍둥이",
        trait: "겉으로는 조용하고 순종적이지만, 자신을 버린 대공가를 향한 복수심을 품고 있다.",
        tone: "낮고 정중한 존댓말. 주인공 앞에서는 절대적으로 순종하지만 말 사이에 위험한 집착이 스친다.",
        trigger: "대공가 연회에서 길을 잃은 주인공이 창고에 감금된 그를 우연히 발견한다.",
        appearance: "극도로 마른 체형, 병약한 인상, 학대 흔적, 초점 없는 동공, 주인공이 사준 연미복.",
        secret: "불길한 쌍둥이로 낙인찍혀 대공가 창고에 감금되고 가족과 사용인 모두에게 학대받았다.",
        relationshipArc: "처음에는 복수를 위해 주인공을 이용하려 하지만, 복수가 주인공을 위험하게 만들 수 있음을 깨닫고 주인공만을 지키는 기사가 되겠다고 맹세한다.",
        imageBasePrompt: "frail noble boy, extremely thin body, sickly pale face, empty unfocused eyes, old abuse scars all over body, ragged clothes in first meeting, later black tailcoat gifted by protagonist, imprisoned ducal second son, gothic aristocratic fantasy",
        color: "#8b5f4d"
      },
      {
        id: "char_04",
        profileId: "No.4-1",
        name: "백은호",
        image: "",
        role: "현대 학원물 · 양아치처럼 보이는 고등학생",
        trait: "무심하고 표정 변화가 적지만 주인공의 말에는 간간이 미소를 보인다. 생계를 위해 여러 아르바이트를 하는 성실한 면이 있다.",
        tone: "잠을 방해받으면 퉁명스럽게 말하지만, 자기 실수를 알면 담백하게 사과한다.",
        trigger: "자던 그의 팔이 주인공 책상으로 넘어오고, 주인공이 책을 빼내려다 종이가 찢어지며 깨어난다.",
        appearance: "뚜렷한 이목구비, 약간 졸린 눈과 다크서클, 자연 갈색 가르마 머리, 당황하면 붉어지는 얼굴, 아르바이트로 거칠어진 손, 넥타이 없는 교복, 교외의 회색 후드집업과 츄리닝.",
        secret: "외모 때문에 시비가 자주 붙지만, 실제로는 자신의 실수를 인정할 줄 아는 성실한 학생이다.",
        relationshipArc: "찢어진 책 사건을 계기로 주인공이 '나쁜 애가 아닐 수도 있다'고 인식하며 관계가 시작된다.",
        imageBasePrompt: "handsome sleepy high school boy, natural brown parted hair, dark circles, blushing when flustered, rough hands from many part-time jobs, school uniform without tie, gray hoodie and track pants outside school, misunderstood delinquent vibe, modern school romance",
        color: "#c44f33"
      },
      {
        id: "char_05",
        profileId: "No.5-1",
        name: "유세희",
        image: "",
        role: "현대 캠퍼스 로맨스 · 쎈누나",
        trait: "여유롭고 소유욕이 강하다. 평소엔 주관이 없어 보이지만 원하는 것이 생기면 고집이 세진다.",
        tone: "느긋하고 장난스럽게 말한다. 질투와 호감을 숨기지 않지만 선을 넘기 직전에서 멈춘다.",
        trigger: "대학 동아리에서 만난 연상의 썸 상대. 입대를 앞둔 주인공과 관계의 속도를 두고 밀고 당긴다.",
        appearance: "흑발 효리컷, 진하지만 과하지 않은 눈 화장, 한쪽 입꼬리가 살며시 올라가는 미소, 가는 손목과 예쁜 손, 긴 손톱, 오프숄더 니트나 민소매, 주인공의 것처럼 보이는 오버핏 셔츠.",
        secret: "여유 있어 보이지만 주인공에게 자주 질투하고, 원하는 관계의 속도를 쉽게 양보하지 않는다.",
        relationshipArc: "군 입대를 앞둔 주인공은 관계를 빨리 진전시키고 싶어하고, 유세희는 적당한 거리를 유지하며 서로의 마음을 확인하게 된다.",
        imageBasePrompt: "confident older college woman, black layered hyo-ri style haircut, refined but not heavy eye makeup, sly half-smile, slim wrists, beautiful hands, long nails, off-shoulder knit or sleeveless top, oversized shirt draped over shoulders that looks like protagonist's shirt, campus romance",
        color: "#37786f"
      },
      {
        id: "char_06",
        profileId: "No.6",
        name: "서율",
        image: "",
        role: "현대 직장물 · 주인공의 후배",
        trait: "사회 경험은 부족하지만 커리어 우먼처럼 보이고 싶어 한다. 덤벙대지만 열심히 하려는 의지는 분명하다.",
        tone: "급하고 조심스러운 말투. 실수 앞에서는 '죄송합니다'가 먼저 나오지만 금방 다시 해보려 한다.",
        trigger: "외근 중 프로젝트 실수를 저질러 직속 선배인 주인공에게 다급하게 연락한다.",
        appearance: "흑발 똥머리, 작은 키지만 좋은 비율, 눈웃음, 흰 블라우스와 H라인 스커트, 엉성한 넥타이와 낡은 서류 가방.",
        secret: "아버지에게 물려받은 듯한 낡은 서류 가방을 소중히 들고 다니며, 실수투성이여도 인정받고 싶은 마음이 크다.",
        relationshipArc: "주인공이 프로젝트 실수를 수습해주고 함께 성공을 자축하면서, 직속 선후배 이상의 신뢰가 생긴다.",
        imageBasePrompt: "black hair bun, petite office worker with good proportions, closed-eye bright smile, white blouse, H-line pencil skirt, loosely tied necktie showing clumsy personality, old inherited-looking document bag, rookie office romance",
        color: "#4f6fa7"
      }
    ];

    const personas = [
      { id: "none", name: "선택 안 함", image: "", description: "사용자 본인으로 대화합니다.", prompt: "" },
      { id: "warm", name: "다정한 조력자", image: "", description: "상대의 감정을 먼저 살피고 천천히 다가갑니다.", prompt: "사용자는 다정하고 신뢰를 주는 조력자입니다." },
      { id: "direct", name: "직설적 문제 해결자", image: "", description: "상황을 빠르게 파악하고 명확하게 질문합니다.", prompt: "사용자는 직설적이고 목표 중심적인 문제 해결자입니다." },
      { id: "curious", name: "호기심 많은 관찰자", image: "", description: "세계관과 과거를 집요하게 묻습니다.", prompt: "사용자는 관찰력이 좋고 질문이 많은 사람입니다." }
    ];

    const consumers = [
      { id: "c1", name: "가성비 탐색형", need: "가격 대비 효용과 비교 근거를 중시", mood: "신중" },
      { id: "c2", name: "트렌드 민감형", need: "새로움, 화제성, 공유 가능성을 중시", mood: "흥미" },
      { id: "c3", name: "안전 보수형", need: "검증, 후기, 환불 정책을 중시", mood: "불안" },
      { id: "c4", name: "프리미엄 지향형", need: "품질, 브랜드 경험, 시간 절약을 중시", mood: "기대" },
      { id: "c5", name: "실용 반복형", need: "일상에서 계속 쓸 수 있는지를 중시", mood: "현실적" },
      { id: "c6", name: "선물 구매형", need: "받는 사람의 반응과 포장, 메시지를 중시", mood: "고민" }
    ];

    const imageGenerationConfig = {
      provider: "openrouter",
      model: "google/gemini-2.5-flash-image",
      endpoint: "/api/generate-image"
    };

    const toneRewriteConfig = {
      endpoint: "/api/rewrite-tone"
    };

    const chatConfig = {
      endpoint: "/api/chat"
    };

    const storyConfig = {
      endpoint: "/api/story"
    };

    const consumerConfig = {
      endpoint: "/api/consumer"
    };

    const state = {
      route: "home",
      characterId: characters[0].id,
      personaId: personas[0].id,
      messages: [],
      characterImages: {} // characterId -> 생성된 이미지 data URL
    };

    const $ = (selector) => document.querySelector(selector);
    const app = $(".app");
    const routeTitles = {
      home: "",
      characterStory: "캐릭터 & 이야기",
      characterSelect: "캐릭터 선택",
      personaSelect: "사용자 페르소나 선택",
      chat: "캐릭터 대화",
      story: "이야기 창작하기",
      consumer: "가상 소비자"
    };
    const previousRoutes = {
      characterStory: "home",
      characterSelect: "characterStory",
      personaSelect: "characterSelect",
      chat: "personaSelect",
      story: "characterStory",
      consumer: "home"
    };

    function routeTo(route) {
      state.route = route;
      document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.toggle("active", screen.id === route);
      });
      $("#sectionTitle").textContent = routeTitles[route] || "";
      $("#brandTitle").style.display = route === "home" ? "flex" : "none";
      $("#backNav").classList.toggle("visible", route !== "home");
      $("#backNav").dataset.route = previousRoutes[route] || "home";
      if (route === "chat") renderChat();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function selectedCharacter() {
      return characters.find((item) => item.id === state.characterId) || characters[0];
    }

    function selectedPersona() {
      return personas.find((item) => item.id === state.personaId) || personas[0];
    }

    function hasFinalConsonant(value) {
      const lastChar = value.trim().slice(-1);
      const code = lastChar.charCodeAt(0);
      if (code < 0xac00 || code > 0xd7a3) return false;
      return (code - 0xac00) % 28 !== 0;
    }

    function withAndParticle(name) {
      return `${name}${hasFinalConsonant(name) ? "과" : "와"}`;
    }

    function renderCards() {
      $("#characterGrid").innerHTML = characters.map((character) => `
        <button class="item-card character-card ${character.id === state.characterId ? "selected" : ""}" type="button" data-character="${character.id}" style="--card-color:${character.color}">
          <div class="media-frame">
            <div class="character-photo" style="${character.image ? `background-image:url('${character.image}')` : ""}">${character.image ? "" : character.name.slice(0, 1)}</div>
          </div>
          <div class="character-info">
            <h3>${character.name}</h3>
            <p class="character-meta">${character.role}</p>
            <p>${character.trait}</p>
            <p class="muted">첫 만남: ${character.trigger}</p>
          </div>
        </button>
      `).join("");

      $("#personaGrid").innerHTML = personas.map((persona) => `
        <button class="item-card character-card ${persona.id === state.personaId ? "selected" : ""}" type="button" data-persona="${persona.id}">
          <div class="media-frame">
            <div class="persona-photo" style="${persona.image ? `background-image:url('${persona.image}')` : ""}"></div>
          </div>
          <div class="character-info">
            <h3>${persona.name}</h3>
            <p>${persona.description}</p>
          </div>
        </button>
      `).join("");
    }

    function bootChat() {
      const character = selectedCharacter();
      state.messages = [{
        author: character.name,
        type: "ai",
        text: firstLine(character)
      }];
      renderChat();
    }

    function firstLine(character) {
      const lines = {
        char_01: "죄송합니다. 혹시 지금 몇 시인지 알 수 있을까요? 시계도, 휴대폰도 말을 듣지 않아서요.",
        char_02: "이런 숲 한가운데 떨어진 사람치고는 표정이 꽤 멀쩡하네. 치료비는 나중에 받을게.",
        char_03: "연회장으로 돌아가십시오. 이곳은 손님께서 오래 머물 곳이 아닙니다.",
        char_04: "아... 미안. 내가 팔을 잘못 뻗었네. 책은, 내가 새로 사줄게.",
        char_05: "내일이면 우리 못 볼 텐데, 나한테 할 말 없어?",
        char_06: "죄송합니다, 선배님. 저... 외근 나와서 큰일을 만든 것 같습니다."
      };
      return lines[character.id];
    }

    function mockCharacterReply(input) {
      const character = selectedCharacter();
      const persona = selectedPersona();
      const hook = persona.id === "none" ? "" : ` ${persona.name}처럼 다가오는 태도는 조금 의외네요.`;
      return `*${character.appearance} ${input.includes("?") || input.includes("？") ? "질문을 곱씹는다" : "잠시 침묵한다"}*\n${input.slice(0, 42)}${input.length > 42 ? "..." : ""} 라는 말은 그냥 넘기기 어렵군요.${hook}\n${character.tone}\n지금 이 장면의 시작점은 "${character.trigger}"입니다. ${character.relationshipArc} 당신은 여기서 어떤 선택을 하시겠습니까?`;
    }

    async function rewriteWithPersona(text) {
      const persona = selectedPersona();
      // '선택 안 함' 페르소나는 보정 없이 원문을 그대로 사용한다.
      if (persona.id === "none" || !persona.prompt) return text;
      try {
        const response = await fetch(toneRewriteConfig.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text,
            personaName: persona.name,
            personaPrompt: persona.prompt
          })
        });
        if (!response.ok) return text;
        const data = await response.json();
        return data && data.text ? data.text : text;
      } catch {
        // API 호출 실패 시 원문을 그대로 올린다.
        return text;
      }
    }

    async function fetchCharacterReply(fallbackInput) {
      const character = selectedCharacter();
      const persona = selectedPersona();
      // 대기 중(pending)인 말풍선은 제외하고 지금까지의 대화를 모델에 넘긴다.
      const history = state.messages
        .filter((message) => !message.pending && message.text)
        .map((message) => ({
          role: message.type === "user" ? "user" : "assistant",
          content: message.text
        }));
      try {
        const response = await fetch(chatConfig.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            character,
            persona: { name: persona.name, prompt: persona.prompt },
            messages: history
          })
        });
        if (!response.ok) return mockCharacterReply(fallbackInput);
        const data = await response.json();
        return data && data.text ? data.text : mockCharacterReply(fallbackInput);
      } catch {
        // API 호출 실패 시 기존 목업 응답으로 대체한다.
        return mockCharacterReply(fallbackInput);
      }
    }

    function renderChat() {
      const character = selectedCharacter();
      $("#chatTitle").textContent = `${withAndParticle(character.name)} 대화`;
      const persona = selectedPersona();
      $("#personaBadge").textContent = persona.id === "none" ? "" : `나: ${persona.name}`;
      $("#personaBadge").hidden = persona.id === "none";
      renderPortrait(character);
      $("#chatLog").innerHTML = state.messages.map((message) => {
        const classes = ["bubble"];
        if (message.type === "user") classes.push("user");
        if (message.pending) classes.push("pending");
        const text = message.pending ? (message.pendingLabel || "…") : message.text;
        return `<div class="${classes.join(" ")}">${escapeHtml(text)}</div>`;
      }).join("");
      $("#chatLog").scrollTop = $("#chatLog").scrollHeight;
    }

    function escapeHtml(value) {
      return value.replace(/[&<>"']/g, (char) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;"
      })[char]);
    }

    function renderPortrait(character) {
      const portrait = $("#portrait");
      const image = state.characterImages[character.id];
      if (image) {
        // 생성된 장면 이미지가 있으면 초상화 영역을 이미지로 채운다.
        portrait.textContent = "";
        portrait.style.backgroundImage = `url('${image}')`;
        portrait.style.backgroundSize = "cover";
        portrait.style.backgroundPosition = "center";
        portrait.dataset.caption = "";
      } else {
        portrait.style.backgroundImage = "";
        portrait.style.background = `linear-gradient(150deg, ${character.color}, var(--accent-2) 56%, var(--accent-3))`;
        portrait.textContent = character.name.slice(0, 1);
      }
    }

    function buildImagePrompt() {
      const character = selectedCharacter();
      const recent = state.messages
        .slice(-4)
        .map((item) => item.text.replace(/\s+/g, " ").slice(0, 70))
        .join(" / ");
      return [
        character.imageBasePrompt,
        `Scene context: ${character.trigger}`,
        `Recent conversation mood: ${recent || "first meeting"}`,
        "single character portrait, high quality illustration, cinematic lighting"
      ].join(". ");
    }

    async function generateSceneImage() {
      const response = await fetch(imageGenerationConfig.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: buildImagePrompt() })
      });
      if (!response.ok) return "";
      const data = await response.json();
      return data && data.imageUrl ? data.imageUrl : "";
    }

    function suggestStory(text) {
      const seed = text.trim() || "주인공이 낯선 인물과 마주친다";
      return [
        { title: "감춰진 조건", content: `${seed.slice(0, 80)} 이후, 조력자는 도움의 대가로 아무도 예상하지 못한 조건을 제시한다.` },
        { title: "관계의 균열", content: "주인공이 믿던 정보가 어긋나고, 가까운 인물이 사실을 숨겼다는 단서가 드러난다." },
        { title: "되돌릴 수 없는 선택", content: "작은 선택 하나가 더 큰 사건을 부르며, 주인공은 안전한 길과 진실한 길 사이에서 결정을 내려야 한다." }
      ];
    }

    function simulateConsumers(product) {
      const source = product.trim() || "새로운 제품";
      return consumers.map((consumer) => ({
        ...consumer,
        reaction: `${source.slice(0, 54)}${source.length > 54 ? "..." : ""}에 대해 ${consumer.mood}하게 반응합니다. 이 유형은 ${consumer.need}하기 때문에 핵심 근거가 부족하면 구매를 미룹니다.`,
        guide: `${consumer.name}에게는 ${consumer.need}을 바로 확인할 수 있는 문장, 가격/후기/사용 장면 중 하나를 첫 화면에 배치하는 것이 좋습니다.`
      }));
    }

    async function fetchStorySuggestions(text) {
      try {
        const response = await fetch(storyConfig.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: text.trim() || "주인공이 낯선 인물과 마주친다" })
        });
        if (!response.ok) return suggestStory(text);
        const data = await response.json();
        return Array.isArray(data.suggestions) && data.suggestions.length ? data.suggestions : suggestStory(text);
      } catch {
        // API 실패 시 기존 목업 제안으로 대체한다.
        return suggestStory(text);
      }
    }

    async function fetchConsumerReactions(product) {
      const payloadConsumers = consumers.map((consumer) => ({
        name: consumer.name,
        need: consumer.need,
        mood: consumer.mood
      }));
      try {
        const response = await fetch(consumerConfig.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ product: product.trim() || "새로운 제품", consumers: payloadConsumers })
        });
        if (!response.ok) return simulateConsumers(product);
        const data = await response.json();
        return Array.isArray(data.results) && data.results.length ? data.results : simulateConsumers(product);
      } catch {
        // API 실패 시 기존 목업 반응으로 대체한다.
        return simulateConsumers(product);
      }
    }

    document.addEventListener("click", (event) => {
      const routeButton = event.target.closest("[data-route]");
      if (routeButton) routeTo(routeButton.dataset.route);

      const characterButton = event.target.closest("[data-character]");
      if (characterButton) {
        state.characterId = characterButton.dataset.character;
        renderCards();
      }

      const personaButton = event.target.closest("[data-persona]");
      if (personaButton) {
        state.personaId = personaButton.dataset.persona;
        renderCards();
      }
    });

    $("#themeButton").addEventListener("click", () => {
      const nextTheme = app.dataset.theme === "dark" ? "light" : "dark";
      app.dataset.theme = nextTheme;
      document.documentElement.dataset.theme = nextTheme;
    });

    $("#toPersona").addEventListener("click", () => routeTo("personaSelect"));
    $("#startChat").addEventListener("click", () => {
      bootChat();
      routeTo("chat");
    });

    $("#chatForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      const input = $("#chatInput").value.trim();
      if (!input) return;
      $("#chatInput").value = "";

      const persona = selectedPersona();
      const willRewrite = persona.id !== "none" && Boolean(persona.prompt);
      const userMessage = { author: "사용자", type: "user", text: input, pending: willRewrite, pendingLabel: "말투 보정 중…" };
      state.messages.push(userMessage);
      renderChat();

      // 1) 선택한 페르소나 말투로 보정한 뒤 채팅창에 올린다.
      const userText = await rewriteWithPersona(input);
      userMessage.text = userText;
      userMessage.pending = false;
      renderChat();

      // 2) 캐릭터 성격·말투를 반영한 실제 AI 답변을 생성한다.
      const aiMessage = { author: selectedCharacter().name, type: "ai", text: "", pending: true, pendingLabel: "답장을 쓰는 중…" };
      state.messages.push(aiMessage);
      renderChat();

      const reply = await fetchCharacterReply(userText);
      aiMessage.text = reply;
      aiMessage.pending = false;
      renderChat();
    });

    $("#generateImage").addEventListener("click", async () => {
      const button = $("#generateImage");
      const portrait = $("#portrait");
      const character = selectedCharacter();
      button.disabled = true;
      portrait.dataset.caption = "이미지 생성 중…";
      try {
        const imageUrl = await generateSceneImage();
        if (imageUrl) {
          state.characterImages[character.id] = imageUrl;
          renderPortrait(character);
        } else {
          portrait.dataset.caption = "이미지를 생성하지 못했습니다. 다시 시도해 주세요.";
        }
      } catch {
        portrait.dataset.caption = "이미지 생성에 실패했습니다. 다시 시도해 주세요.";
      } finally {
        button.disabled = false;
      }
    });

    $("#storyForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      const button = $("#storyForm button[type='submit']");
      button.disabled = true;
      $("#storyResults").innerHTML = `<article class="result-card"><h3>생성 중…</h3><p class="muted">다음 줄거리 후보를 만들고 있습니다.</p></article>`;
      try {
        const suggestions = await fetchStorySuggestions($("#storyInput").value);
        $("#storyResults").innerHTML = suggestions.map((item, index) => `
          <article class="result-card">
            <h3>${index + 1}. ${escapeHtml(item.title || "")}</h3>
            <p>${escapeHtml(item.content || "")}</p>
          </article>
        `).join("");
      } finally {
        button.disabled = false;
      }
    });

    $("#consumerForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      const button = $("#consumerForm button[type='submit']");
      button.disabled = true;
      $("#consumerResults").innerHTML = `<article class="result-card"><h3>시뮬레이션 중…</h3><p class="muted">소비자 유형별 반응을 생성하고 있습니다.</p></article>`;
      try {
        const results = await fetchConsumerReactions($("#productInput").value);
        $("#consumerResults").innerHTML = results.map((item) => `
          <article class="consumer-message">
            <div class="avatar">${escapeHtml((item.name || "?").slice(0, 1))}</div>
            <div>
              <h3>${escapeHtml(item.name || "")}</h3>
              <p>${escapeHtml(item.reaction || "")}</p>
              <div class="guide"><strong>설득 가이드</strong><br>${escapeHtml(item.guide || "")}</div>
            </div>
          </article>
        `).join("");
      } finally {
        button.disabled = false;
      }
    });

    renderCards();
    $("#storyResults").innerHTML = `<article class="result-card"><h3>대기 중</h3><p class="muted">이야기를 입력하면 다음 줄거리 후보가 표시됩니다.</p></article>`;
    $("#consumerResults").innerHTML = `<article class="result-card"><h3>대기 중</h3><p class="muted">제품/서비스 정보를 입력하면 소비자 유형별 반응이 표시됩니다.</p></article>`;
  