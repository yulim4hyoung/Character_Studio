const characters = [
      {
        id: "char_01",
        profileId: "No.1",
        name: "권우진",
        image: "/char_01_main.png",
        chatBackground: "/background_char01.png",
        role: "현대 직장물 · 상사 포지션",
        trait: "여유롭고 다정하지만 자신의 이야기는 잘 하지 않는다. 시간을 확인하지 못하면 불안해진다.",
        tone: "정중하고 차분하게 경청한다. 감정은 숨기지만 말끝에 피로와 불안이 얇게 배어난다.",
        trigger: "교통사고 후 시계와 휴대폰이 동시에 고장 나 시간을 확인할 수 없는 상태가 된다.",
        appearance: "검은 머리, 하얀 피부, 날카로운 턱선, 우수에 찬 눈빛, 은은한 미소, 회색 정장 조끼와 흰 셔츠, 검정 롱코트, 낡은 손목시계, 긴 손가락과 푸른 핏줄, 오른손의 서류 가방.",
        secret: "시간 확인에 집착하는 습관 뒤에는 아직 말하지 못한 심리적 트라우마가 있다.",
        relationshipArc: "주인공이 시간 불안을 눈치채고 도와주면서, 권우진이 개인적인 고민을 털어놓는 유일한 관계로 발전한다.",
        imageBasePrompt: "black hair, pale skin, sharp jawline, melancholic eyes, faint mysterious smile, gray suit vest, white shirt, black long coat, old wristwatch on left hand, long elegant fingers with blue veins, document bag in right hand, refined office romance mood",
        customImageAppearancePrompt: `Use the provided reference image to closely match the character's visual style, outfit details, mood, and overall art direction.

Korean romance webtoon cover, semi-realistic anime style, high-density rendering, rich textures, dramatic moody volumetric lighting. Handsome young male corporate boss. Neat black hair, extremely pale smooth skin. Deep melancholic wistful eyes looking directly at viewer, head slightly tilted. Worn-out classic leather-strap wristwatch on left wrist, long slender fingers with faint blue veins. Grey suit vest over crisp white shirt. Modern corporate office at twilight, soft bokeh. High quality, masterpiece, beautiful contrast between light and shadow. Portrait composition, vertical 3:4 aspect ratio.

Do not include speech bubbles, text, fonts, words, typography, callouts, flat shading, or boring plain lighting.`,
        customImageReference: "/char_01_main.png",
        color: "#0e7c7b"
      },
      {
        id: "char_02",
        profileId: "No.2",
        name: "레녹",
        image: "/char_02_main.png",
        chatBackground: "/background_char02.png",
        role: "이세계 판타지 · 마법사",
        trait: "능글맞고 친절하며 자기 외모에 자신감이 있다. 진짜 마음을 열기까지는 오래 걸린다.",
        tone: "장난스럽고 지적인 말투. 상처를 농담으로 가리다가 흑마법과 악마 이야기에는 차갑게 굳는다.",
        trigger: "이세계에 떨어진 주인공을 발견하고 치료비 명목으로 함께 행동하게 된다.",
        appearance: "금빛 장발 반묶음, 모노클, 바다색 푸른 눈, 눈물점, 라벤더색 로브와 자수정 지팡이.",
        secret: "어린 시절 마법 실험체였던 과거 때문에 흑마법과 악마를 강하게 혐오한다.",
        relationshipArc: "초기에는 주인공에게서 악마를 제거할 가능성을 보고 곁에 두지만, 점차 주인공 자체에게 끌린다.",
        imageBasePrompt: "long golden half-tied hair with side strands to jawline, tall elegant body, monocle, ocean blue eyes, beauty mark under eye, lavender robe, cloth waist belt, amethyst staff at waist height, elegant fantasy mage, subtle trauma and anti-dark-magic aura",
        customImageAppearancePrompt: `Use the provided reference image to closely match the character's visual style, outfit details, mood, and overall art direction.

Korean romantic fantasy webtoon cover, semi-realistic anime style, high-density rendering, rich textures, dramatic volumetric lighting. Handsome young male wizard. Long luminous golden-blonde hair in an elegant half-up style, glossy strands framing his face. Striking deep blue eyes, mesmerizing slightly playful yet melancholic gaze, small beauty mark under one eye. Clear monocle with a fine gold chain. Enigmatic playful smirk. Elegant wizard robe with subtle golden embroidery and jewel-like details, matching the reference image. Floating glowing magical mana particles, soft bokeh fantasy background. High quality, masterpiece, iridescent colors, depth of field. Portrait composition, vertical 3:4 aspect ratio.

Do not include speech bubbles, text, fonts, words, typography, callouts, flat shading, or low-resolution details.`,
        customImageReference: "/char_02_main.png",
        color: "#7068a8"
      },
      {
        id: "char_03",
        profileId: "No.3",
        name: "이안 카시우스",
        image: "/char_03_main.png",
        chatBackground: "/background_char03.png",
        role: "귀족 판타지 · 불길한 쌍둥이",
        trait: "겉으로는 조용하고 순종적이지만, 자신을 버린 대공가를 향한 복수심을 품고 있다.",
        tone: "낮고 정중한 존댓말. 주인공 앞에서는 절대적으로 순종하지만 말 사이에 위험한 집착이 스친다.",
        trigger: "대공가 연회에서 길을 잃은 주인공이 창고에 감금된 그를 우연히 발견한다.",
        appearance: "극도로 마른 체형, 병약한 인상, 학대 흔적, 초점 없는 동공, 주인공이 사준 연미복.",
        secret: "불길한 쌍둥이로 낙인찍혀 대공가 창고에 감금되고 가족과 사용인 모두에게 학대받았다.",
        relationshipArc: "처음에는 복수를 위해 주인공을 이용하려 하지만, 복수가 주인공을 위험하게 만들 수 있음을 깨닫고 주인공만을 지키는 기사가 되겠다고 맹세한다.",
        imageBasePrompt: "frail noble boy, extremely thin body, sickly pale face, empty unfocused eyes, old abuse scars all over body, ragged clothes in first meeting, later black tailcoat gifted by protagonist, imprisoned ducal second son, gothic aristocratic fantasy",
        customImageAppearancePrompt: `Use the provided reference image to closely match the character's visual style, outfit details, mood, and overall art direction.

Korean romantic fantasy webtoon cover, semi-realistic anime style, high-density rendering, rich textures, dramatic chiaroscuro effect. Fragile yet hauntingly beautiful young male knight from a gothic noble fantasy. Slender sickly pale physique, messy textured dark hair, delicate face with a wounded aristocratic aura. Empty unfocused eyes mixed with absolute obedience, desperate longing, and deep devotion. Faint fading old scars on his neck and body, subtle and non-graphic. Slightly tattered elegant black noble tailcoat with fine silver linings, as if gifted by someone precious. Clean organic line art, rich moody colors, realistic cloth texture and deep folds. Dimly lit cold gothic castle, soft moonlight through dusty stained glass. High quality, masterpiece, depth of field, emotionally evocative lighting. Portrait composition, vertical 3:4 aspect ratio.

Do not include speech bubbles, text, fonts, words, typography, callouts, flat shading, or boring plain lighting.`,
        customImageReference: "/char_03_main.png",
        color: "#8b5f4d"
      },
      {
        id: "char_04",
        profileId: "No.4-1",
        name: "백은호",
        image: "/char_04_main.png",
        chatBackground: "/background_char04.png",
        role: "현대 학원물 · 양아치처럼 보이는 고등학생",
        trait: "무심하고 표정 변화가 적지만 주인공의 말에는 간간이 미소를 보인다. 생계를 위해 여러 아르바이트를 하는 성실한 면이 있다.",
        tone: "잠을 방해받으면 퉁명스럽게 말하지만, 자기 실수를 알면 담백하게 사과한다.",
        trigger: "자던 그의 팔이 주인공 책상으로 넘어오고, 주인공이 책을 빼내려다 종이가 찢어지며 깨어난다.",
        appearance: "뚜렷한 이목구비, 약간 졸린 눈과 다크서클, 자연 갈색 가르마 머리, 당황하면 붉어지는 얼굴, 아르바이트로 거칠어진 손, 넥타이 없는 교복, 교외의 회색 후드집업과 츄리닝.",
        secret: "외모 때문에 시비가 자주 붙지만, 실제로는 자신의 실수를 인정할 줄 아는 성실한 학생이다.",
        relationshipArc: "찢어진 책 사건을 계기로 주인공이 '나쁜 애가 아닐 수도 있다'고 인식하며 관계가 시작된다.",
        imageBasePrompt: "handsome sleepy high school boy, natural brown parted hair, dark circles, blushing when flustered, rough hands from many part-time jobs, school uniform without tie, gray hoodie and track pants outside school, misunderstood delinquent vibe, modern school romance",
        customImageAppearancePrompt: `Use the provided reference image to closely match the character's visual style, outfit details, mood, and overall art direction. Use the reference image for character identity, hairstyle, outfit, and art style; the pose may change naturally to fit the current scene.

Korean romance webtoon cover, semi-realistic anime style, rich soft textures, smooth lean elegant aesthetic. Handsome young male high school student. Naturally slightly messy soft dark-brown hair with neat bangs. Cool clear face, sleepy sharp eyes, cold grumpy tsundere expression, misunderstood delinquent mood. He may be sitting at a desk or turning his head over his shoulder to look back at the viewer with an intensely annoyed sidelong glare, but the pose can vary naturally based on the scene. One hand may rest on a desk, with the other arm lowered. Dark-grey athletic track jacket with white side stripes over a disheveled unbuttoned white high school uniform shirt, completely untied loose necktie. Clean line art, rich moody colors, realistic fabric textures. Warm cinematic afternoon sunlight through a classroom window, deep soft shadows. High quality, masterpiece, depth of field. Portrait composition, vertical 3:4 aspect ratio.

Do not include speech bubbles, text, fonts, words, typography, callouts, flat shading, boring plain lighting, overly muscular body, prominent veins, blush, pink skin, rosy cheeks, hand on neck, or touching neck.`,
        customImageReference: "/char_04_main.png",
        color: "#c44f33"
      },
      {
        id: "char_05",
        profileId: "No.5-1",
        name: "유세희",
        image: "/char_05_main.png",
        chatBackground: "/background_char05.png",
        role: "현대 캠퍼스 로맨스 · 쎈누나",
        trait: "여유롭고 소유욕이 강하다. 평소엔 주관이 없어 보이지만 원하는 것이 생기면 고집이 세진다.",
        tone: "느긋하고 장난스럽게 말한다. 질투와 호감을 숨기지 않지만 선을 넘기 직전에서 멈춘다.",
        trigger: "대학 동아리에서 만난 연상의 썸 상대. 입대를 앞둔 주인공과 관계의 속도를 두고 밀고 당긴다.",
        appearance: "흑발 효리컷, 진하지만 과하지 않은 눈 화장, 한쪽 입꼬리가 살며시 올라가는 미소, 가는 손목과 예쁜 손, 긴 손톱, 오프숄더 니트나 민소매, 주인공의 것처럼 보이는 오버핏 셔츠.",
        secret: "여유 있어 보이지만 주인공에게 자주 질투하고, 원하는 관계의 속도를 쉽게 양보하지 않는다.",
        relationshipArc: "군 입대를 앞둔 주인공은 관계를 빨리 진전시키고 싶어하고, 유세희는 적당한 거리를 유지하며 서로의 마음을 확인하게 된다.",
        imageBasePrompt: "confident older college woman, black layered hyo-ri style haircut, refined but not heavy eye makeup, sly half-smile, slim wrists, beautiful hands, long nails, off-shoulder knit or sleeveless top, oversized shirt draped over shoulders that looks like protagonist's shirt, campus romance",
        customImageAppearancePrompt: `Use the provided reference image to closely match the character's visual style, outfit details, mood, and overall art direction. Use the reference image for character identity, hairstyle, outfit, and art style; the pose may change naturally to fit the current scene.

Korean modern romance webtoon cover, semi-realistic anime style, high-density rendering, rich textures. Stunningly beautiful confident young college woman with a cool older-sister aura. Chic layered black hyo-ri style haircut or soft wolf-cut hairstyle, sharp strands framing her face. Sharp feline-like eyes with elegant dark eye makeup, a calm cynical gaze, pretending to be uninterested yet subtly possessive and captivating. A faint sly half-smile with one corner of her lips slightly raised. Stylish casual off-shoulder knit or sleeveless dark top, possibly with an oversized shirt draped over her shoulders, highlighting a refined fit physique. Fine organic line art, rich sophisticated colors, realistic clothing folds, high-end digital painting textures. Dimly lit cozy college club room with posters and instruments, soft ambient light. High quality, masterpiece, depth of field. Portrait composition, vertical 3:4 aspect ratio.

Do not include speech bubbles, text, fonts, words, typography, callouts, flat shading, or boring plain lighting.`,
        customImageReference: "/char_05_main.png",
        color: "#37786f"
      },
      {
        id: "char_06",
        profileId: "No.6",
        name: "서율",
        image: "/char_06_main.png",
        chatBackground: "/background_char06.png",
        role: "현대 직장물 · 주인공의 후배",
        trait: "사회 경험은 부족하지만 커리어 우먼처럼 보이고 싶어 한다. 덤벙대지만 열심히 하려는 의지는 분명하다.",
        tone: "급하고 조심스러운 말투. 실수 앞에서는 '죄송합니다'가 먼저 나오지만 금방 다시 해보려 한다.",
        trigger: "외근 중 프로젝트 실수를 저질러 직속 선배인 주인공에게 다급하게 연락한다.",
        appearance: "흑발 똥머리, 작은 키지만 좋은 비율, 눈웃음, 흰 블라우스와 H라인 스커트, 엉성한 넥타이와 낡은 서류 가방.",
        secret: "아버지에게 물려받은 듯한 낡은 서류 가방을 소중히 들고 다니며, 실수투성이여도 인정받고 싶은 마음이 크다.",
        relationshipArc: "주인공이 프로젝트 실수를 수습해주고 함께 성공을 자축하면서, 직속 선후배 이상의 신뢰가 생긴다.",
        imageBasePrompt: "black hair bun, petite office worker with good proportions, closed-eye bright smile, white blouse, H-line pencil skirt, loosely tied necktie showing clumsy personality, old inherited-looking document bag, rookie office romance",
        customImageAppearancePrompt: `Use the provided reference image to closely match the character's visual style, outfit details, mood, and overall art direction. Use the reference image for character identity, hairstyle, outfit, and art style; the pose may change naturally to fit the current scene.

Korean romance webtoon cover, semi-realistic anime style, high-density rendering, rich textures, expressive cinematic lighting. Adorable petite young female rookie office employee with a clumsy but sincere aura. Glossy black hair in a slightly messy cute high bun, soft stray strands framing her youthful face. Gentle puppy-like dark brown eyes, slightly teary and sparkling with apology, nervousness, and admiration. Petite body with good proportions. White blouse, fitted office H-line pencil skirt as the fixed bottom clothing, and a loosely, clumsily tied dark navy necktie. She must wear a formal office skirt, not pants. An old inherited-looking document bag may be held close or placed nearby, matching the scene. Fine organic line art, rich vibrant colors, realistic cloth texture and folds. Softly blurred corporate office background, warm indoor lighting. High quality, masterpiece, depth of field. Portrait composition, vertical 3:4 aspect ratio.

Do not include speech bubbles, text, fonts, words, typography, callouts, flat shading, boring plain lighting, childish proportions, overly mature seductive styling, trousers, slacks, pants, or suit pants.`,
        customImageReference: "/char_06_main.png",
        color: "#4f6fa7"
      }
    ];

    const personas = [
      { id: "none", name: "선택 안 함", image: "/persona_none.png", description: "사용자 본인으로 대화합니다.", prompt: "" },
      { id: "warm", name: "다정한 조력자", image: "/persona_warm.png", description: "상대의 감정을 먼저 살피고 천천히 다가갑니다.", prompt: "사용자는 다정하고 신뢰를 주는 조력자입니다." },
      { id: "direct", name: "직설적 문제 해결자", image: "/persona_direct.png", description: "상황을 빠르게 파악하고 명확하게 질문합니다.", prompt: "사용자는 직설적이고 목표 중심적인 문제 해결자입니다." },
      { id: "curious", name: "호기심 많은 관찰자", image: "/persona_curious.png", description: "세계관과 과거를 집요하게 묻습니다.", prompt: "사용자는 관찰력이 좋고 질문이 많은 사람입니다." }
    ];

    const consumers = [
      {
        id: "c1",
        name: "최은지",
        avatar: "/consumers/consumer_choeeunji.png",
        type: "트렌드 공유형",
        age: 22,
        gender: "여성",
        background: "서울 자취 대학생, 미디어/경영 전공, SNS 중심 생활, 하루 스마트폰 7~9시간",
        need: "SNS 화제성, 트렌디함, 친구와 공유 가능성",
        mood: "충동적, 흥미, 비교 심리 강함",
        tone: "헐, 대박, 진짜? 등 감탄사 자주 사용. 물음표 연달아 씀. 짧게 끊어 말함",
        positiveReaction: "헐 이거 어디서 봤는데! 친구들한테 바로 공유해야지~",
        negativeReaction: "별로 안 끌려요. 이거 SNS에 올리기엔 좀 애매하지 않아요?",
        purchaseFlow: "SNS 발견 → 리뷰 확인 → 친구 의견 → 구매",
        persuasionKeywords: "요즘 다들 쓰는 거, SNS에 올리기 딱 좋음, 친구한테 공유 가능"
      },
      {
        id: "c2",
        name: "박지훈",
        avatar: "/consumers/consumer_parkjihun.png",
        type: "가성비 분석형",
        age: 26,
        gender: "남성",
        background: "취업 준비생, 경제적 압박 큰 상황, 자격증 공부 중",
        need: "가격 대비 효용, 실용성, 검증된 후기",
        mood: "신중, 분석적, 현실적",
        tone: "건조하고 짧음. ~네요, ~겠죠 어미 자주 사용. 감정 표현 거의 없음",
        positiveReaction: "이 가격이면 괜찮은 것 같네요. 실제 후기 좀 더 찾아봐야겠지만요.",
        negativeReaction: "지금 당장 필요하진 않을 것 같습니다. 가격도 부담스럽고요.",
        purchaseFlow: "가격 확인 → 실용성 검토 → 리뷰 확인 → 구매",
        persuasionKeywords: "무료라서 손해 볼 게 없음, 실제 사용자 후기, 취준에 실질적 도움"
      },
      {
        id: "c3",
        name: "이수진",
        avatar: "/consumers/consumer_leesoojin.png",
        type: "효율 추구형",
        age: 34,
        gender: "여성",
        background: "IT 회사 기획자, 평일 회사 중심, 주말 운동/자기계발",
        need: "시간 절약, 생산성, 브랜드 신뢰",
        mood: "차분, 완벽주의, 결과 지향",
        tone: "간결하고 핵심만 말함. ~요, ~죠 어미. 불필요한 수식어 없음",
        positiveReaction: "실제 사용 사례를 보니 납득이 되네요.",
        negativeReaction: "저한테 필요한 기능인지 모르겠네요.",
        purchaseFlow: "시간 절약 효과 확인 → 생산성 검토 → 브랜드 신뢰 확인 → 구매",
        persuasionKeywords: "시간 절약, 업무 효율 향상, 검증된 브랜드"
      },
      {
        id: "c4",
        name: "최민정",
        avatar: "/consumers/consumer_choiminjung.png",
        type: "안전 검증형",
        age: 37,
        gender: "여성",
        background: "워킹맘, 육아+직장 병행, 맘카페·커뮤니티 의존도 높음",
        need: "안전성, 검증된 후기, 편리성",
        mood: "걱정 많음, 꼼꼼함, 커뮤니티 신뢰",
        tone: "걱정 많고 질문이 많음. ~는 아니죠?, 혹시 ~한 경우도 있나요? 패턴 자주 사용",
        positiveReaction: "주변 엄마들도 쓰고 있어서 믿음이 가요.",
        negativeReaction: "혹시 부작용 사례는 없나요? 좀 더 알아봐야 할 것 같아요.",
        purchaseFlow: "안전성 확인 → 커뮤니티 후기 검색 → 지인 의견 → 구매",
        persuasionKeywords: "맘카페에서도 검증됨, 주변 엄마들도 씀, 아이에게 안전"
      },
      {
        id: "c5",
        name: "정성호",
        avatar: "/consumers/consumer_jungseongho.png",
        type: "가치 판단형",
        age: 45,
        gender: "남성",
        background: "중견기업 부장, 회사 중심 생활, 투자·경제 관심 많음",
        need: "가치 대비 효용, 브랜드 신뢰, 시간 아깝지 않은 결과",
        mood: "직설적, 권위 의식, 보수적",
        tone: "짧고 직설적. 그래서 뭐가 좋은 건데? 처럼 결론 먼저 요구. 군더더기 없음",
        positiveReaction: "비슷한 거 써봤는데, 이게 좀 더 낫네.",
        negativeReaction: "이게 필요한지 모르겠어. 그냥 애들 유행 아닌가?",
        purchaseFlow: "결론/핵심 효용 확인 → 가격 대비 가치 판단 → 브랜드 검토 → 구매",
        persuasionKeywords: "시간 낭비 없음, 확실한 효용, 검증된 결과"
      },
      {
        id: "c6",
        name: "이영숙",
        avatar: "/consumers/consumer_leeyoungsuk.png",
        type: "신뢰 의존형",
        age: 56,
        gender: "여성",
        background: "자영업, 주요 앱 카카오톡·네이버, 디지털 사용 제한적",
        need: "신뢰, 지인 추천, 안정성",
        mood: "조심스러움, 변화 거부감, 관계 의존적",
        tone: "정중하고 느린 말투. ~네요, ~가요? 어미. 반복 질문 및 확인 많음",
        positiveReaction: "지인이 써봤는데 좋다고 해서요, 저도 한번 해볼까 해요.",
        negativeReaction: "저는 이런 거 잘 몰라서요. 좀 어렵네요.",
        purchaseFlow: "지인 추천 확인 → 신뢰 여부 판단 → 반복 질문으로 확인 → 구매",
        persuasionKeywords: "지인 추천, 쉽고 간단함, 많은 사람이 쓰는 검증된 서비스"
      }
    ];

    const imageGenerationConfig = {
      provider: "openrouter",
      model: "google/gemini-2.5-flash-image",
      endpoint: "/api/generate-image"
    };

    const imageSceneSummaryConfig = {
      endpoint: "/api/summarize-image-scene"
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

    const persuadeConfig = {
      endpoint: "/api/persuade"
    };

    const reportConfig = {
      endpoint: "/api/persuade-report"
    };

    const state = {
      route: "home",
      characterId: characters[0].id,
      personaId: personas[0].id,
      language: localStorage.getItem("characterStudioLanguage") === "en" ? "en" : "ko",
      messages: [],
      characterImages: {}, // characterId -> 생성된 이미지 data URL
      product: "", // 마지막으로 시뮬레이션한 제품 정보
      consumerResults: [], // 마지막 소비자 시뮬레이션 결과
      persuade: null // 진행 중인 1:1 설득 세션
    };

    const $ = (selector) => document.querySelector(selector);
    const app = $(".app");
    let confirmAction = null;
    const i18n = {
      ko: {
        code: "ko",
        nextLanguage: "EN",
        back: "← 이전 화면으로 돌아가기",
        themeLabel: "테마 전환",
        languageLabel: "언어 전환",
        lead: "사전 설정된 캐릭터와 소비자 페르소나를 선택해 대화, 이미지 장면 구성, 이야기 이어쓰기, 가상 소비자 반응을 한 곳에서 실험하는 프로토타입입니다.",
        modeCharacterTitle: "캐릭터 & 이야기",
        modeCharacterDesc: "캐릭터와 대화하거나, 현재까지 쓴 이야기를 바탕으로 다음 줄거리를 제안받습니다.",
        modeConsumerTitle: "가상 소비자",
        modeConsumerDesc: "제품이나 서비스를 입력하면 6개 소비자 유형의 반응과 설득 가이드를 봅니다.",
        chatChoiceTitle: "캐릭터와 대화하기",
        chatChoiceMuted: "캐릭터를 선택하고 사용자 페르소나를 정한 뒤 대화를 시작합니다.",
        chatChoiceDesc: "대화 내용을 기반으로 이미지 장면 프롬프트도 구성할 수 있습니다.",
        storyChoiceTitle: "이야기 창작하기",
        storyChoiceMuted: "현재까지 쓴 이야기를 입력하면 다음 줄거리 후보 3가지를 카드로 제안합니다.",
        storyChoiceDesc: "장면 전환, 갈등 강화, 관계 변화 중심으로 이어갈 방향을 탐색합니다.",
        characterSelect: "캐릭터 선택",
        personaSelect: "사용자 페르소나 선택",
        next: "다음",
        startChat: "대화 시작",
        chat: "대화",
        settings: "설정",
        home: "홈",
        imageScene: "이미지 장면",
        chatPlaceholder: "캐릭터에게 말을 걸어보세요.",
        send: "보내기",
        generate: "생성",
        portraitCaption: "생성 버튼을 누르면 캐릭터와 대화 장면을 이미지로 만듭니다.",
        storyTitle: "이야기 창작하기",
        currentStory: "현재까지의 이야기",
        storyPlaceholder: "주인공, 갈등, 분위기가 드러나도록 입력하세요.",
        suggestPlot: "줄거리 제안",
        consumerTitle: "가상 소비자 반응",
        productName: "제품명",
        productNamePlaceholder: "예: 7일 가는 무선 이어폰",
        productPrice: "가격",
        productPricePlaceholder: "예: 12만원",
        productFeatures: "핵심 기능",
        productFeaturesPlaceholder: "예: 노이즈캔슬링, 1회 충전 7일 사용, 2년 무상 AS",
        productTarget: "타깃",
        productTargetPlaceholder: "예: 출퇴근·운동을 즐기는 20~30대 직장인",
        productSituation: "구매 상황",
        productSituationPlaceholder: "예: 기존 이어폰 배터리가 빨리 닳아 교체를 고민 중",
        simulate: "반응 시뮬레이션",
        persuade: "소비자 설득",
        persuadeOneOnOne: "1:1 설득",
        persuadePlaceholder: "이 소비자를 설득해 보세요.",
        probabilityHelp: "대화를 나눌수록 구매 확률이 실시간으로 바뀝니다.",
        finishPersuade: "완료 · 보고서 분석",
        downloadReport: "보고서 다운로드",
        confirmTitle: "선택을 확정할까요?",
        cancelConfirm: "다시 선택",
        acceptConfirm: "선택 확정",
        characterConfirmTitle: "이 캐릭터로 진행할까요?",
        personaConfirmTitle: "이 페르소나로 대화를 시작할까요?",
        characterConfirmMessage: (name) => `${name} 캐릭터를 선택했습니다.`,
        personaConfirmMessage: (name) => `${name} 페르소나를 선택했습니다.`,
        firstMeeting: "첫 만남",
        nonePersona: "",
        mePersona: (name) => `나: ${name}`,
        storyWaitingTitle: "대기 중",
        storyWaitingDesc: "이야기를 입력하면 다음 줄거리 후보가 표시됩니다.",
        storyLoadingTitle: "생성 중…",
        storyLoadingDesc: "다음 줄거리 후보를 만들고 있습니다.",
        consumerWaitingTitle: "대기 중",
        consumerWaitingDesc: "제품/서비스 정보를 입력하면 소비자 유형별 반응이 표시됩니다.",
        consumerLoadingTitle: "시뮬레이션 중…",
        consumerLoadingDesc: "소비자 유형별 반응을 생성하고 있습니다.",
        guide: "설득 가이드",
        persuadeCta: "이 소비자 1:1로 설득하기 →",
        age: (age) => `${age}세`,
        needLabel: "니즈",
        moodLabel: "태도",
        noReply: "(반응이 없습니다.)",
        noResponse: "(응답을 받지 못했습니다.)",
        errorResponse: "(오류가 발생했습니다.)",
        thinkingConsumer: "소비자가 고민 중…",
        preparingConsumer: "소비자가 첫 반응을 준비 중…",
        rewritePending: "말투 보정 중…",
        replyPending: "답장을 쓰는 중…",
        imageLoading: "이미지 생성 중…",
        imageFail: "이미지를 생성하지 못했습니다. 다시 시도해 주세요.",
        imageError: "이미지 생성에 실패했습니다. 다시 시도해 주세요.",
        reportNeedConversation: "먼저 소비자와 대화를 나눈 뒤 완료해 주세요.",
        reportLoading: "대화를 분석해 보고서를 작성 중…",
        reportFail: "보고서를 생성하지 못했습니다.",
        reportError: "보고서 생성에 실패했습니다. 다시 시도해 주세요.",
        noChange: "변화 없음",
        userAuthor: "사용자",
        productFieldName: "제품명",
        productFieldPrice: "가격",
        productFieldFeatures: "핵심 기능",
        productFieldTarget: "타깃",
        productFieldSituation: "구매 상황",
        defaultStorySeed: "주인공이 낯선 인물과 마주친다",
        defaultProduct: "새로운 제품",
        chatTitle: (name) => `${withAndParticle(name)} 대화`,
        persuadeTitle: (name) => `${name} 설득`,
        reportFilePrefix: "설득보고서",
        routeTitles: {
          home: "",
          characterStory: "캐릭터 & 이야기",
          characterSelect: "캐릭터 선택",
          personaSelect: "사용자 페르소나 선택",
          chat: "캐릭터 대화",
          story: "이야기 창작하기",
          consumer: "가상 소비자",
          persuade: "소비자 설득"
        }
      },
      en: {
        code: "en",
        nextLanguage: "KO",
        back: "← Back to Previous Screen",
        themeLabel: "Toggle theme",
        languageLabel: "Switch language",
        lead: "A prototype for testing character chats, image scene generation, story continuation, and virtual consumer reactions in one place.",
        modeCharacterTitle: "Characters & Story",
        modeCharacterDesc: "Chat with preset characters or generate next-plot candidates from your current story.",
        modeConsumerTitle: "Virtual Consumers",
        modeConsumerDesc: "Enter a product or service to see reactions and persuasion guides from six consumer personas.",
        chatChoiceTitle: "Chat With a Character",
        chatChoiceMuted: "Choose a character and user persona, then start the conversation.",
        chatChoiceDesc: "You can also build image-scene prompts from the conversation.",
        storyChoiceTitle: "Create a Story",
        storyChoiceMuted: "Enter your current story to receive three possible next-plot cards.",
        storyChoiceDesc: "Explore directions focused on scene changes, stronger conflict, and relationship shifts.",
        characterSelect: "Choose a Character",
        personaSelect: "Choose a User Persona",
        next: "Next",
        startChat: "Start Chat",
        chat: "Chat",
        settings: "Settings",
        home: "Home",
        imageScene: "Image Scene",
        chatPlaceholder: "Say something to the character.",
        send: "Send",
        generate: "Generate",
        portraitCaption: "Press Generate to turn the character conversation into an image scene.",
        storyTitle: "Create a Story",
        currentStory: "Current Story",
        storyPlaceholder: "Describe the protagonist, conflict, and mood.",
        suggestPlot: "Suggest Plot",
        consumerTitle: "Virtual Consumer Reactions",
        productName: "Product Name",
        productNamePlaceholder: "e.g. Wireless earbuds that last 7 days",
        productPrice: "Price",
        productPricePlaceholder: "e.g. $89",
        productFeatures: "Key Features",
        productFeaturesPlaceholder: "e.g. noise cancellation, 7-day battery, 2-year warranty",
        productTarget: "Target",
        productTargetPlaceholder: "e.g. commuters and active professionals in their 20s and 30s",
        productSituation: "Purchase Situation",
        productSituationPlaceholder: "e.g. replacing old earbuds because the battery drains too fast",
        simulate: "Simulate Reactions",
        persuade: "Consumer Persuasion",
        persuadeOneOnOne: "1:1 Persuasion",
        persuadePlaceholder: "Try persuading this consumer.",
        probabilityHelp: "The purchase probability changes in real time as the conversation continues.",
        finishPersuade: "Finish · Analyze Report",
        downloadReport: "Download Report",
        confirmTitle: "Confirm this choice?",
        cancelConfirm: "Choose Again",
        acceptConfirm: "Confirm",
        characterConfirmTitle: "Continue with this character?",
        personaConfirmTitle: "Start the chat with this persona?",
        characterConfirmMessage: (name) => `You selected ${name}.`,
        personaConfirmMessage: (name) => `You selected the ${name} persona.`,
        firstMeeting: "First meeting",
        nonePersona: "",
        mePersona: (name) => `Me: ${name}`,
        storyWaitingTitle: "Waiting",
        storyWaitingDesc: "Enter a story to see next-plot candidates.",
        storyLoadingTitle: "Generating…",
        storyLoadingDesc: "Creating next-plot candidates.",
        consumerWaitingTitle: "Waiting",
        consumerWaitingDesc: "Enter product/service information to see consumer reactions.",
        consumerLoadingTitle: "Simulating…",
        consumerLoadingDesc: "Generating reactions for the consumer personas.",
        guide: "Persuasion Guide",
        persuadeCta: "Persuade this consumer 1:1 →",
        age: (age) => `${age}`,
        needLabel: "Need",
        moodLabel: "Mood",
        noReply: "(No response.)",
        noResponse: "(No response received.)",
        errorResponse: "(An error occurred.)",
        thinkingConsumer: "The consumer is thinking…",
        preparingConsumer: "The consumer is preparing a first reaction…",
        rewritePending: "Adjusting tone…",
        replyPending: "Writing a reply…",
        imageLoading: "Generating image…",
        imageFail: "Could not generate an image. Please try again.",
        imageError: "Image generation failed. Please try again.",
        reportNeedConversation: "Please talk with the consumer before finishing.",
        reportLoading: "Analyzing the conversation and writing a report…",
        reportFail: "Could not generate a report.",
        reportError: "Report generation failed. Please try again.",
        noChange: "No change",
        userAuthor: "User",
        productFieldName: "Product Name",
        productFieldPrice: "Price",
        productFieldFeatures: "Key Features",
        productFieldTarget: "Target",
        productFieldSituation: "Purchase Situation",
        defaultStorySeed: "The protagonist meets a mysterious stranger.",
        defaultProduct: "New product",
        chatTitle: (name) => `${name} Chat`,
        persuadeTitle: (name) => `${name} Persuasion`,
        reportFilePrefix: "persuasion_report",
        routeTitles: {
          home: "",
          characterStory: "Characters & Story",
          characterSelect: "Choose a Character",
          personaSelect: "Choose a User Persona",
          chat: "Character Chat",
          story: "Create a Story",
          consumer: "Virtual Consumers",
          persuade: "Consumer Persuasion"
        }
      }
    };

    const personaLocales = {
      en: {
        none: {
          name: "No Persona",
          description: "Chat as yourself.",
          prompt: "The user chats as themself without a special persona."
        },
        warm: {
          name: "Warm Supporter",
          description: "Checks the other person's feelings first and approaches slowly.",
          prompt: "The user is a warm, trustworthy supporter."
        },
        direct: {
          name: "Direct Problem Solver",
          description: "Quickly reads the situation and asks clear questions.",
          prompt: "The user is direct and goal-oriented."
        },
        curious: {
          name: "Curious Observer",
          description: "Persistently asks about the world, backstory, and hidden context.",
          prompt: "The user is observant and asks many questions."
        }
      }
    };

    const characterLocales = {
      en: {
        char_01: {
          name: "Kwon Woo-jin",
          role: "Modern office romance · Boss",
          trait: "Relaxed and kind, but rarely talks about himself. He becomes anxious when he cannot check the time.",
          trigger: "After a traffic accident, both his watch and phone stop working, leaving him unable to check the time."
        },
        char_02: {
          name: "Lenok",
          role: "Isekai fantasy · Wizard",
          trait: "Playful, friendly, and confident in his looks. It takes him a long time to truly open up.",
          trigger: "He finds the protagonist after they fall into another world and starts traveling with them under the pretext of medical fees."
        },
        char_03: {
          name: "Ian Cassius",
          role: "Noble fantasy · Ominous twin",
          trait: "Quiet and obedient on the surface, but carries revenge against the ducal family that abandoned him.",
          trigger: "At a ducal banquet, the protagonist gets lost and accidentally finds him locked inside a storage room."
        },
        char_04: {
          name: "Baek Eun-ho",
          role: "Modern school romance · Student mistaken for a delinquent",
          trait: "Indifferent and hard to read, but occasionally smiles at the protagonist's words. He works several part-time jobs to support himself.",
          trigger: "His sleeping arm falls onto the protagonist's desk, and he wakes when the protagonist tears a page while trying to pull out a book."
        },
        char_05: {
          name: "Yu Se-hee",
          role: "Modern campus romance · Confident older woman",
          trait: "Relaxed and possessive. She usually seems easygoing, but becomes stubborn once she wants something.",
          trigger: "An older flirtation partner from a college club. She pushes and pulls over the pace of the relationship before the protagonist's enlistment."
        },
        char_06: {
          name: "Seo Yul",
          role: "Modern office romance · Junior colleague",
          trait: "Inexperienced, but wants to look like a capable career woman. Clumsy, yet clearly eager to do well.",
          trigger: "During an external work assignment, she urgently contacts the protagonist after making a project mistake."
        }
      }
    };
    const previousRoutes = {
      characterStory: "home",
      characterSelect: "characterStory",
      personaSelect: "characterSelect",
      chat: "personaSelect",
      story: "characterStory",
      consumer: "home",
      persuade: "consumer"
    };

    function t(key, ...args) {
      const value = i18n[state.language][key];
      return typeof value === "function" ? value(...args) : value;
    }

    function routeTitle(route) {
      return i18n[state.language].routeTitles[route] || "";
    }

    function languageName() {
      return state.language === "en" ? "English" : "Korean";
    }

    function localizedPersona(persona) {
      const locale = personaLocales[state.language] && personaLocales[state.language][persona.id];
      return {
        ...persona,
        name: locale && locale.name ? locale.name : persona.name,
        description: locale && locale.description ? locale.description : persona.description,
        prompt: locale && locale.prompt ? locale.prompt : persona.prompt
      };
    }

    function localizedCharacter(character) {
      const locale = characterLocales[state.language] && characterLocales[state.language][character.id];
      return {
        ...character,
        name: locale && locale.name ? locale.name : character.name,
        role: locale && locale.role ? locale.role : character.role,
        trait: locale && locale.trait ? locale.trait : character.trait,
        trigger: locale && locale.trigger ? locale.trigger : character.trigger
      };
    }

    function renderInitialPlaceholders() {
      $("#storyResults").innerHTML = `<article class="result-card"><h3>${t("storyWaitingTitle")}</h3><p class="muted">${t("storyWaitingDesc")}</p></article>`;
      $("#consumerResults").innerHTML = `<article class="result-card"><h3>${t("consumerWaitingTitle")}</h3><p class="muted">${t("consumerWaitingDesc")}</p></article>`;
    }

    function renderCurrentLanguage() {
      applyTranslations();
      renderCards();
      if (state.route === "chat") renderChat();
      if (state.route === "persuade") renderPersuade();
      if (!state.consumerResults.length) {
        $("#consumerResults").innerHTML = `<article class="result-card"><h3>${t("consumerWaitingTitle")}</h3><p class="muted">${t("consumerWaitingDesc")}</p></article>`;
      }
      if (!$("#storyResults .result-card h3") || $("#storyResults .result-card h3").textContent === i18n.ko.storyWaitingTitle || $("#storyResults .result-card h3").textContent === i18n.en.storyWaitingTitle) {
        $("#storyResults").innerHTML = `<article class="result-card"><h3>${t("storyWaitingTitle")}</h3><p class="muted">${t("storyWaitingDesc")}</p></article>`;
      }
    }

    function applyTranslations() {
      document.documentElement.lang = i18n[state.language].code;
      $("#backNav").textContent = t("back");
      $("#themeButton").setAttribute("aria-label", t("themeLabel"));
      $("#languageButton").textContent = t("nextLanguage");
      $("#languageButton").setAttribute("aria-label", t("languageLabel"));
      $("#sectionTitle").textContent = routeTitle(state.route);

      $("#home .lead").textContent = t("lead");
      const modeCards = document.querySelectorAll("#home .mode-card");
      modeCards[0].querySelector("strong").textContent = t("modeCharacterTitle");
      modeCards[0].querySelector("span").textContent = t("modeCharacterDesc");
      modeCards[1].querySelector("strong").textContent = t("modeConsumerTitle");
      modeCards[1].querySelector("span").textContent = t("modeConsumerDesc");

      const choices = document.querySelectorAll("#characterStory .choice-card");
      choices[0].querySelector("h3").textContent = t("chatChoiceTitle");
      choices[0].querySelector(".muted").textContent = t("chatChoiceMuted");
      choices[0].querySelector(".choice-info p:last-child").textContent = t("chatChoiceDesc");
      choices[1].querySelector("h3").textContent = t("storyChoiceTitle");
      choices[1].querySelector(".muted").textContent = t("storyChoiceMuted");
      choices[1].querySelector(".choice-info p:last-child").textContent = t("storyChoiceDesc");

      $("#characterSelect h2").textContent = t("characterSelect");
      $("#toPersona").textContent = t("next");
      $("#personaSelect h2").textContent = t("personaSelect");
      $("#startChat").textContent = t("startChat");
      $("#chat .panel:first-child .panel-head h3").textContent = t("chat");
      document.querySelector('#chat [data-route="personaSelect"]').textContent = t("settings");
      document.querySelector('#chat [data-route="home"]').textContent = t("home");
      $("#chatInput").placeholder = t("chatPlaceholder");
      $("#chatForm button[type='submit']").textContent = t("send");
      $("#chat .panel:last-child .panel-head h3").textContent = t("imageScene");
      $("#portrait").dataset.caption = $("#portrait").style.backgroundImage ? "" : t("portraitCaption");
      $("#generateImage").textContent = t("generate");

      $("#story h2").textContent = t("storyTitle");
      document.querySelector('label[for="storyInput"] strong').textContent = t("currentStory");
      $("#storyInput").placeholder = t("storyPlaceholder");
      $("#storyForm button[type='submit']").textContent = t("suggestPlot");

      $("#consumer h2").textContent = t("consumerTitle");
      document.querySelector('label[for="productName"] strong').textContent = t("productName");
      $("#productName").placeholder = t("productNamePlaceholder");
      document.querySelector('label[for="productPrice"] strong').textContent = t("productPrice");
      $("#productPrice").placeholder = t("productPricePlaceholder");
      document.querySelector('label[for="productFeatures"] strong').textContent = t("productFeatures");
      $("#productFeatures").placeholder = t("productFeaturesPlaceholder");
      document.querySelector('label[for="productTarget"] strong').textContent = t("productTarget");
      $("#productTarget").placeholder = t("productTargetPlaceholder");
      document.querySelector('label[for="productSituation"] strong').textContent = t("productSituation");
      $("#productSituation").placeholder = t("productSituationPlaceholder");
      $("#consumerForm button[type='submit']").textContent = t("simulate");

      $("#persuade .panel:first-child .panel-head h3").textContent = t("persuadeOneOnOne");
      $("#persuadeInput").placeholder = t("persuadePlaceholder");
      $("#persuadeForm button[type='submit']").textContent = t("send");
      $("#probStage .muted").textContent = t("probabilityHelp");
      $("#finishPersuade").textContent = t("finishPersuade");
      $("#downloadReport").textContent = t("downloadReport");

      $("#confirmTitle").textContent = t("confirmTitle");
      $("#cancelConfirm").textContent = t("cancelConfirm");
      $("#acceptConfirm").textContent = t("acceptConfirm");
    }

    function routeTo(route) {
      state.route = route;
      document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.toggle("active", screen.id === route);
      });
      $("#sectionTitle").textContent = routeTitle(route);
      $("#brandTitle").style.display = route === "home" ? "flex" : "none";
      $("#backNav").classList.toggle("visible", route !== "home");
      $("#backNav").dataset.route = previousRoutes[route] || "home";
      if (route === "chat") renderChat();
      if (route === "persuade") renderPersuade();
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
      $("#characterGrid").innerHTML = characters.map((character) => {
        const display = localizedCharacter(character);
        return `
        <button class="item-card character-card ${character.id === state.characterId ? "selected" : ""}" type="button" data-character="${character.id}" style="--card-color:${character.color}">
          <div class="media-frame">
            <div class="character-photo" style="${character.image ? `background-image:url('${character.image}')` : ""}">${character.image ? "" : character.name.slice(0, 1)}</div>
          </div>
          <div class="character-info">
            <h3>${display.name}</h3>
            <p class="character-meta">${display.role}</p>
            <p>${display.trait}</p>
            <p class="muted">${t("firstMeeting")}: ${display.trigger}</p>
          </div>
        </button>
      `;
      }).join("");

      $("#personaGrid").innerHTML = personas.map((persona) => {
        const display = localizedPersona(persona);
        return `
        <button class="item-card character-card ${persona.id === state.personaId ? "selected" : ""}" type="button" data-persona="${persona.id}">
          <div class="media-frame">
            <div class="persona-photo" style="${persona.image ? `background-image:url('${persona.image}')` : ""}"></div>
          </div>
          <div class="character-info">
            <h3>${display.name}</h3>
            <p>${display.description}</p>
          </div>
        </button>
      `;
      }).join("");
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
        ko: {
          char_01: "죄송합니다. 혹시 지금 몇 시인지 알 수 있을까요? 시계도, 휴대폰도 말을 듣지 않아서요.",
          char_02: "이런 숲 한가운데 떨어진 사람치고는 표정이 꽤 멀쩡하네. 치료비는 나중에 받을게.",
          char_03: "연회장으로 돌아가십시오. 이곳은 손님께서 오래 머물 곳이 아닙니다.",
          char_04: "아... 미안. 내가 팔을 잘못 뻗었네. 책은, 내가 새로 사줄게.",
          char_05: "내일이면 우리 못 볼 텐데, 나한테 할 말 없어?",
          char_06: "죄송합니다, 선배님. 저... 외근 나와서 큰일을 만든 것 같습니다."
        },
        en: {
          char_01: "Excuse me. Could you tell me what time it is? My watch and phone both stopped working.",
          char_02: "For someone dropped in the middle of a forest, you look surprisingly calm. I will collect the treatment fee later.",
          char_03: "Please return to the banquet hall. This is not a place where a guest should linger.",
          char_04: "Ah... sorry. My arm went the wrong way. The book... I will buy you a new one.",
          char_05: "We might not see each other after tomorrow. Is there anything you want to say to me?",
          char_06: "I am so sorry, senior. I... I think I made a serious mistake during the external assignment."
        }
      };
      return (lines[state.language] && lines[state.language][character.id]) || lines.ko[character.id];
    }

    function mockCharacterReply(input) {
      const character = selectedCharacter();
      const persona = selectedPersona();
      const displayCharacter = localizedCharacter(character);
      const displayPersona = localizedPersona(persona);
      if (state.language === "en") {
        const hook = persona.id === "none" ? "" : ` Your ${displayPersona.name} approach is a little unexpected.`;
        return `*${character.appearance} ${input.includes("?") || input.includes("？") ? "thinks over the question" : "falls silent for a moment"}*\nIt is difficult to ignore what you said: "${input.slice(0, 42)}${input.length > 42 ? "..." : ""}"${hook}\n${character.tone}\nThis scene begins from "${displayCharacter.trigger}". ${character.relationshipArc} What will you choose here?`;
      }
      const hook = persona.id === "none" ? "" : ` ${persona.name}처럼 다가오는 태도는 조금 의외네요.`;
      return `*${character.appearance} ${input.includes("?") || input.includes("？") ? "질문을 곱씹는다" : "잠시 침묵한다"}*\n${input.slice(0, 42)}${input.length > 42 ? "..." : ""} 라는 말은 그냥 넘기기 어렵군요.${hook}\n${character.tone}\n지금 이 장면의 시작점은 "${character.trigger}"입니다. ${character.relationshipArc} 당신은 여기서 어떤 선택을 하시겠습니까?`;
    }

    async function rewriteWithPersona(text) {
      const persona = selectedPersona();
      const displayPersona = localizedPersona(persona);
      // '선택 안 함' 페르소나는 보정 없이 원문을 그대로 사용한다.
      if (persona.id === "none" || !persona.prompt) return text;
      try {
        const response = await fetch(toneRewriteConfig.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text,
            personaName: displayPersona.name,
            personaPrompt: displayPersona.prompt,
            language: languageName()
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
      const displayPersona = localizedPersona(persona);
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
            persona: { name: displayPersona.name, prompt: displayPersona.prompt },
            messages: history,
            language: languageName()
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
      const chatScreen = $("#chat");
      const chatBackground = character.chatBackground || "";
      chatScreen.classList.toggle("has-chat-bg", Boolean(chatBackground));
      chatScreen.style.setProperty("--chat-bg", chatBackground ? `url('${chatBackground}')` : "none");
      $("#chatTitle").textContent = t("chatTitle", character.name);
      const persona = selectedPersona();
      const displayPersona = localizedPersona(persona);
      $("#personaBadge").textContent = persona.id === "none" ? "" : t("mePersona", displayPersona.name);
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

    function buildImagePrompt(sceneSummary = "") {
      const character = selectedCharacter();
      const appearancePrompt = character.customImageAppearancePrompt || character.imageBasePrompt;
      const recent = state.messages
        .slice(-4)
        .map((item) => item.text.replace(/\s+/g, " ").slice(0, 70))
        .join(" / ");
      return [
        appearancePrompt,
        `Scene context: ${character.trigger}`,
        `Conversation-based scene summary: ${sceneSummary || recent || "first meeting"}`,
        "single character portrait, high quality illustration, cinematic lighting"
      ].join(". ");
    }

    async function summarizeImageScene() {
      const character = selectedCharacter();
      const history = state.messages
        .filter((message) => !message.pending && message.text)
        .map((message) => ({
          role: message.type === "user" ? "user" : "assistant",
          content: message.text
        }));

      if (!history.length) return localizedCharacter(character).trigger || "";

      const response = await fetch(imageSceneSummaryConfig.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ character, messages: history, language: languageName() })
      });
      if (!response.ok) return "";
      const data = await response.json();
      return data && data.summary ? data.summary : "";
    }

    async function generateSceneImage() {
      const character = selectedCharacter();
      const sceneSummary = await summarizeImageScene();
      const response = await fetch(imageGenerationConfig.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: buildImagePrompt(sceneSummary),
          referenceImage: character.customImageReference || ""
        })
      });
      if (!response.ok) return "";
      const data = await response.json();
      return data && data.imageUrl ? data.imageUrl : "";
    }

    function suggestStory(text) {
      const seed = text.trim() || t("defaultStorySeed");
      if (state.language === "en") {
        return [
          { title: "Hidden Terms", content: `After ${seed.slice(0, 80)}, the helper asks for an unexpected condition in exchange for help.` },
          { title: "A Fracture", content: "Information the protagonist trusted begins to contradict itself, and a close figure is revealed to have hidden part of the truth." },
          { title: "No Way Back", content: "One small choice pulls the protagonist into a larger incident, forcing a decision between the safe path and the honest one." }
        ];
      }
      return [
        { title: "감춰진 조건", content: `${seed.slice(0, 80)} 이후, 조력자는 도움의 대가로 아무도 예상하지 못한 조건을 제시한다.` },
        { title: "관계의 균열", content: "주인공이 믿던 정보가 어긋나고, 가까운 인물이 사실을 숨겼다는 단서가 드러난다." },
        { title: "되돌릴 수 없는 선택", content: "작은 선택 하나가 더 큰 사건을 부르며, 주인공은 안전한 길과 진실한 길 사이에서 결정을 내려야 한다." }
      ];
    }

    function simulateConsumers(product) {
      const source = product.trim() || t("defaultProduct");
      if (state.language === "en") {
        return consumers.map((consumer) => ({
          ...consumer,
          reaction: `I would react to ${source.slice(0, 54)}${source.length > 54 ? "..." : ""} based on my core needs. If the main proof is not clear enough, I would hesitate before buying.`,
          guide: `For ${consumer.name}, place a message that directly confirms the key need, price, reviews, or a concrete usage scene.`
        }));
      }
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
          body: JSON.stringify({ text: text.trim() || t("defaultStorySeed"), language: languageName() })
        });
        if (!response.ok) return suggestStory(text);
        const data = await response.json();
        return Array.isArray(data.suggestions) && data.suggestions.length ? data.suggestions : suggestStory(text);
      } catch {
        // API 실패 시 기존 목업 제안으로 대체한다.
        return suggestStory(text);
      }
    }

    // 5개 입력란을 모아 "항목: 값" 형태의 제품 정보 문자열로 만든다. (빈 칸은 제외)
    function collectProductInfo() {
      const fields = [
        [t("productFieldName"), $("#productName").value],
        [t("productFieldPrice"), $("#productPrice").value],
        [t("productFieldFeatures"), $("#productFeatures").value],
        [t("productFieldTarget"), $("#productTarget").value],
        [t("productFieldSituation"), $("#productSituation").value]
      ];
      return fields
        .map(([label, value]) => [label, value.trim()])
        .filter(([, value]) => value)
        .map(([label, value]) => `${label}: ${value}`)
        .join("\n");
    }

    async function fetchConsumerReactions(product) {
      const payloadConsumers = consumers.map((consumer) => ({
        name: consumer.name,
        type: consumer.type,
        age: consumer.age,
        background: consumer.background,
        need: consumer.need,
        mood: consumer.mood,
        tone: consumer.tone,
        purchaseFlow: consumer.purchaseFlow,
        positiveReaction: consumer.positiveReaction,
        negativeReaction: consumer.negativeReaction,
        persuasionKeywords: consumer.persuasionKeywords
      }));
      try {
        const response = await fetch(consumerConfig.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ product: product.trim() || t("defaultProduct"), consumers: payloadConsumers, language: languageName() })
        });
        if (!response.ok) return simulateConsumers(product);
        const data = await response.json();
        return Array.isArray(data.results) && data.results.length ? data.results : simulateConsumers(product);
      } catch {
        // API 실패 시 기존 목업 반응으로 대체한다.
        return simulateConsumers(product);
      }
    }

    // 소비자 카드 클릭 → 1:1 설득 세션 시작
    async function startPersuade(index) {
      const result = state.consumerResults[index];
      if (!result) return;
      const base = consumers.find((item) => item.name === result.name) || {};
      state.persuade = {
        consumer: {
          name: result.name,
          type: base.type || "",
          age: base.age || "",
          background: base.background || "",
          need: base.need || "",
          mood: base.mood || "",
          tone: base.tone || "",
          purchaseFlow: base.purchaseFlow || "",
          persuasionKeywords: base.persuasionKeywords || "",
          reaction: result.reaction || "",
          guide: result.guide || ""
        },
        messages: [],
        probability: null,
        lastDelta: null,
        report: ""
      };

      // 보고서 영역 초기화
      $("#reportPanel").hidden = true;
      $("#reportPanel").textContent = "";
      $("#downloadReport").hidden = true;

      routeTo("persuade");

      // 첫 진입: 빈 대화로 호출해 소비자의 첫인상 + 시작 확률을 받는다.
      const opener = { type: "ai", text: "", pending: true, pendingLabel: t("preparingConsumer") };
      state.persuade.messages.push(opener);
      renderPersuade();

      const { reply, probability } = await fetchPersuade();
      opener.text = reply || t("noReply");
      opener.pending = false;
      updateProbability(probability);
      renderPersuade();
    }

    async function fetchPersuade() {
      const session = state.persuade;
      const history = session.messages
        .filter((message) => !message.pending && message.text)
        .map((message) => ({ role: message.type === "user" ? "user" : "assistant", content: message.text }));
      try {
        const response = await fetch(persuadeConfig.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ product: state.product, consumer: session.consumer, messages: history, language: languageName() })
        });
        if (!response.ok) return { reply: t("noResponse"), probability: session.probability };
        const data = await response.json();
        return {
          reply: data.reply || "",
          probability: typeof data.probability === "number" ? data.probability : session.probability
        };
      } catch {
        return { reply: t("errorResponse"), probability: session.probability };
      }
    }

    function updateProbability(value) {
      const session = state.persuade;
      const next = Math.max(0, Math.min(100, Math.round(Number(value))));
      if (Number.isNaN(next)) return;
      session.lastDelta = session.probability == null ? null : next - session.probability;
      session.probability = next;
    }

    function renderPersuade() {
      const session = state.persuade;
      if (!session) return;
      $("#persuadeTitle").textContent = t("persuadeTitle", session.consumer.name);
      $("#persuadeMeta").textContent = [session.consumer.need && `${t("needLabel")}: ${session.consumer.need}`, session.consumer.mood && `${t("moodLabel")}: ${session.consumer.mood}`]
        .filter(Boolean).join(" · ");

      // 소비자 이미지/정보: consumers 배열에서 이름으로 찾아 avatar를 가져온다.
      const profile = consumers.find((c) => c.name === session.consumer.name) || {};
      const avatar = profile.avatar || session.consumer.avatar || "";
      const infoLine = [profile.type, profile.age ? t("age", profile.age) : "", profile.gender]
        .filter(Boolean).join(" · ");
      $("#persuadeConsumer").innerHTML = `
        ${avatar ? `<img class="persuade-consumer-img" src="${escapeHtml(avatar)}" alt="${escapeHtml(session.consumer.name)}">` : ""}
        <div class="persuade-consumer-name">${escapeHtml(session.consumer.name)}</div>
        ${infoLine ? `<div class="persuade-consumer-info muted">${escapeHtml(infoLine)}</div>` : ""}
      `;
      $("#persuadeLog").innerHTML = session.messages.map((message) => {
        const classes = ["bubble"];
        if (message.type === "user") classes.push("user");
        if (message.pending) classes.push("pending");
        const text = message.pending ? (message.pendingLabel || "…") : message.text;
        return `<div class="${classes.join(" ")}">${escapeHtml(text)}</div>`;
      }).join("");
      $("#persuadeLog").scrollTop = $("#persuadeLog").scrollHeight;
      renderProbability();
    }

    function renderProbability() {
      const session = state.persuade;
      const prob = session.probability;
      const value = $("#probValue");
      const fill = $("#probFill");
      const delta = $("#probDelta");
      if (prob == null) {
        value.textContent = "--%";
        fill.style.width = "0%";
        delta.textContent = "";
        return;
      }
      const color = prob >= 70 ? "var(--accent)" : prob >= 40 ? "#c9962f" : "var(--accent-2)";
      value.textContent = `${prob}%`;
      value.style.color = color;
      fill.style.width = `${prob}%`;
      fill.style.background = color;
      if (session.lastDelta == null) {
        delta.textContent = "";
      } else if (session.lastDelta > 0) {
        delta.textContent = `▲ +${session.lastDelta}`;
        delta.style.color = "var(--accent)";
      } else if (session.lastDelta < 0) {
        delta.textContent = `▼ ${session.lastDelta}`;
        delta.style.color = "var(--accent-2)";
      } else {
        delta.textContent = t("noChange");
        delta.style.color = "var(--muted)";
      }
    }

    async function fetchPersuadeReport() {
      const session = state.persuade;
      const history = session.messages
        .filter((message) => !message.pending && message.text)
        .map((message) => ({ role: message.type === "user" ? "user" : "assistant", content: message.text }));
      const response = await fetch(reportConfig.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: state.product,
          consumer: session.consumer,
          messages: history,
          probability: session.probability,
          language: languageName()
        })
      });
      if (!response.ok) throw new Error("report request failed");
      const data = await response.json();
      return data.report || "";
    }

    function openConfirmModal({ title, message, onAccept }) {
      $("#confirmTitle").textContent = title;
      $("#confirmMessage").textContent = message;
      confirmAction = onAccept;
      $("#confirmModal").hidden = false;
      $("#acceptConfirm").focus();
    }

    function closeConfirmModal() {
      $("#confirmModal").hidden = true;
      confirmAction = null;
    }

    document.addEventListener("click", (event) => {
      const routeButton = event.target.closest("[data-route]");
      if (routeButton) routeTo(routeButton.dataset.route);

      const characterButton = event.target.closest("[data-character]");
      if (characterButton) {
        state.characterId = characterButton.dataset.character;
        renderCards();
        const character = selectedCharacter();
        openConfirmModal({
          title: t("characterConfirmTitle"),
          message: t("characterConfirmMessage", character.name),
          onAccept: () => routeTo("personaSelect")
        });
      }

      const personaButton = event.target.closest("[data-persona]");
      if (personaButton) {
        state.personaId = personaButton.dataset.persona;
        renderCards();
        const persona = selectedPersona();
        const displayPersona = localizedPersona(persona);
        openConfirmModal({
          title: t("personaConfirmTitle"),
          message: t("personaConfirmMessage", displayPersona.name),
          onAccept: () => {
            bootChat();
            routeTo("chat");
          }
        });
      }

      const persuadeCard = event.target.closest("[data-persuade-index]");
      if (persuadeCard) {
        startPersuade(Number(persuadeCard.dataset.persuadeIndex));
      }
    });

    $("#cancelConfirm").addEventListener("click", closeConfirmModal);
    $("#acceptConfirm").addEventListener("click", () => {
      const action = confirmAction;
      closeConfirmModal();
      if (action) action();
    });
    $("#confirmModal").addEventListener("click", (event) => {
      if (event.target.id === "confirmModal") closeConfirmModal();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !$("#confirmModal").hidden) closeConfirmModal();
    });

    $("#themeButton").addEventListener("click", () => {
      const nextTheme = app.dataset.theme === "dark" ? "light" : "dark";
      app.dataset.theme = nextTheme;
      document.documentElement.dataset.theme = nextTheme;
    });

    $("#languageButton").addEventListener("click", () => {
      state.language = state.language === "ko" ? "en" : "ko";
      localStorage.setItem("characterStudioLanguage", state.language);
      renderCurrentLanguage();
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
      const userMessage = { author: t("userAuthor"), type: "user", text: input, pending: willRewrite, pendingLabel: t("rewritePending") };
      state.messages.push(userMessage);
      renderChat();

      // 1) 선택한 페르소나 말투로 보정한 뒤 채팅창에 올린다.
      const userText = await rewriteWithPersona(input);
      userMessage.text = userText;
      userMessage.pending = false;
      renderChat();

      // 2) 캐릭터 성격·말투를 반영한 실제 AI 답변을 생성한다.
      const aiMessage = { author: selectedCharacter().name, type: "ai", text: "", pending: true, pendingLabel: t("replyPending") };
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
      portrait.dataset.caption = t("imageLoading");
      try {
        const imageUrl = await generateSceneImage();
        if (imageUrl) {
          state.characterImages[character.id] = imageUrl;
          renderPortrait(character);
        } else {
          portrait.dataset.caption = t("imageFail");
        }
      } catch {
        portrait.dataset.caption = t("imageError");
      } finally {
        button.disabled = false;
      }
    });

    $("#storyForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      const button = $("#storyForm button[type='submit']");
      button.disabled = true;
      $("#storyResults").innerHTML = `<article class="result-card"><h3>${t("storyLoadingTitle")}</h3><p class="muted">${t("storyLoadingDesc")}</p></article>`;
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
      const product = collectProductInfo();
      if (!product) {
        $("#productName").focus();
        return;
      }
      const button = $("#consumerForm button[type='submit']");
      button.disabled = true;
      $("#consumerResults").innerHTML = `<article class="result-card"><h3>${t("consumerLoadingTitle")}</h3><p class="muted">${t("consumerLoadingDesc")}</p></article>`;
      try {
        const results = await fetchConsumerReactions(product);
        state.product = product;
        state.consumerResults = results;
        $("#consumerResults").innerHTML = results.map((item, index) => {
          const base = consumers.find((c) => c.name === item.name) || {};
          const meta = [base.type, base.age ? t("age", base.age) : "", base.gender]
            .filter(Boolean)
            .join(" · ");
          return `
          <article class="consumer-message clickable" data-persuade-index="${index}">
            <div class="avatar" style="${base.avatar ? "background-image:none" : ""}">
              ${base.avatar
                ? `<img src="${escapeHtml(base.avatar)}" alt="${escapeHtml(item.name || "")}">`
                : escapeHtml((item.name || "?").slice(0, 1))}
            </div>
            <div>
              <div style="display:flex; align-items:baseline; gap:12px;">
                <h3>${escapeHtml(item.name || "")}</h3>
                ${meta ? `<span class="muted" style="font-size:0.85em;">${escapeHtml(meta)}</span>` : ""}
              </div>
              <p>${escapeHtml(item.reaction || "")}</p>
              <div class="guide"><strong>${t("guide")}</strong><br>${escapeHtml(item.guide || "")}</div>
              <p class="persuade-cta">${t("persuadeCta")}</p>
            </div>
          </article>
        `;
        }).join("");
      } finally {
        button.disabled = false;
      }
    });

    $("#persuadeForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      const input = $("#persuadeInput").value.trim();
      if (!input || !state.persuade) return;
      $("#persuadeInput").value = "";

      state.persuade.messages.push({ type: "user", text: input });
      const pending = { type: "ai", text: "", pending: true, pendingLabel: t("thinkingConsumer") };
      state.persuade.messages.push(pending);
      renderPersuade();

      const { reply, probability } = await fetchPersuade();
      pending.text = reply || t("noReply");
      pending.pending = false;
      updateProbability(probability);
      renderPersuade();
    });

    $("#finishPersuade").addEventListener("click", async () => {
      const session = state.persuade;
      if (!session) return;
      const hasConversation = session.messages.some((message) => message.type === "user" && !message.pending);
      $("#reportPanel").hidden = false;
      if (!hasConversation) {
        $("#reportPanel").textContent = t("reportNeedConversation");
        return;
      }
      const button = $("#finishPersuade");
      button.disabled = true;
      $("#downloadReport").hidden = true;
      $("#reportPanel").textContent = t("reportLoading");
      try {
        const report = await fetchPersuadeReport();
        session.report = report;
        $("#reportPanel").textContent = report || t("reportFail");
        if (report) $("#downloadReport").hidden = false;
      } catch {
        $("#reportPanel").textContent = t("reportError");
      } finally {
        button.disabled = false;
      }
    });

    $("#downloadReport").addEventListener("click", () => {
      const session = state.persuade;
      if (!session || !session.report) return;
      const safeName = session.consumer.name.replace(/[\\/:*?"<>|]/g, "_");
      const blob = new Blob([session.report], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${t("reportFilePrefix")}_${safeName}.md`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    });

    applyTranslations();
    renderCards();
    renderInitialPlaceholders();
  
