# Character Studio

캐릭터 대화, 이미지 장면 생성, 이야기 창작, 가상 소비자 반응을 실험하는 웹 프로토타입입니다.

## 실행

사전 준비: **Node.js 18 이상**이 설치되어 있어야 합니다. (서버가 내장 `fetch`를 사용합니다. 별도 패키지 설치는 필요 없습니다.)

**1) `.env` 파일 만들기**

Windows (PowerShell):

```powershell
Copy-Item .env.example .env
```

macOS / Linux:

```bash
cp .env.example .env
```

**2) `.env`를 열어 `OPENROUTER_API_KEY`에 실제 OpenRouter API 키를 입력합니다.**
(`.env.example`의 키는 예시 값이라 그대로 두면 API 호출이 실패합니다.)

**3) 서버 실행**

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 엽니다.

Windows에서는 위 1~2단계로 `.env`를 준비한 뒤 `run.bat`을 더블클릭하면 서버 실행과 브라우저 열기를 한 번에 할 수 있습니다.

## 환경 변수 (.env)

| 변수 | 설명 | 예시 |
|------|------|------|
| `OPENROUTER_API_KEY` | OpenRouter API 키 (필수) | `sk-or-v1-...` |
| `OPENROUTER_TEXT_MODEL` | 텍스트 작업(대화·말투 보정·이야기·소비자)에 쓰는 모델 | `google/gemini-2.5-flash` |
| `OPENROUTER_IMAGE_MODEL` | 이미지 생성에 쓰는 모델 | `google/gemini-3.1-flash-image-preview` |
| `PORT` | 서버 포트 (기본 5173) | `5173` |

API 키는 `.env`에만 두고 프론트엔드 파일에는 절대 넣지 않습니다. `.env`는 `.gitignore`에 포함되어 커밋되지 않으며, `.env.example`에는 실제 키 대신 예시 값만 둡니다.

## 기능별 동작 상태

| 기능 | 상태 | 비고 |
|------|------|------|
| 캐릭터 선택 | 로컬 UI | 캐릭터 카드를 누르면 확인 팝업이 열리고, `다시 선택` 또는 `선택 확정`을 고를 수 있음 |
| 사용자 페르소나 선택 | 로컬 UI + 실제 API | 페르소나 카드를 누르면 확인 팝업이 열리고, 확정 시 대화 시작. 대화 입력은 `/api/rewrite-tone`으로 말투 보정 |
| 캐릭터 대화 | 실제 API | `/api/chat` — 캐릭터의 성격·말투를 반영해 응답. 캐릭터별 채팅 배경 이미지가 적용됨 |
| 사용자 페르소나 말투 보정 | 실제 API | `/api/rewrite-tone` — 입력 메시지를 선택한 페르소나 말투로 변환 |
| 이미지 생성 | 실제 API | `/api/summarize-image-scene`으로 대화 내용을 이미지용 장면 요약으로 만든 뒤, `/api/generate-image`에서 캐릭터 외모 프롬프트·참고 이미지·장면 요약을 함께 사용 |
| 이야기 창작 | 실제 API | `/api/story` — 지금까지의 이야기를 자연스럽게 이어갈 줄거리 후보 3개를 생성. JSON 파싱 실패 시 AI가 한 번 더 JSON 형식으로 복구 |
| 가상 소비자 반응 | 실제 API | `/api/consumer` — 제품명·가격·핵심 기능·타깃·구매 상황을 항목별로 입력하면 소비자 유형별 반응·설득 가이드를 생성 |
| 1:1 소비자 설득 | 실제 API | 소비자 카드를 누르면 설득 채팅으로 이동, 매 턴 구매 확률이 갱신되고 완료 시 분석 보고서를 생성·다운로드 |

## 캐릭터 이미지와 배경

캐릭터 카드, 페르소나 카드, 채팅 배경, 이미지 생성 참고 이미지는 `public` 폴더의 정적 파일을 사용합니다.

- 캐릭터 카드 이미지: `/char_01_main.png` ~ `/char_06_main.png`
- 캐릭터별 채팅 배경: `/background_char01.png` ~ `/background_char06.png`
- 페르소나 이미지: `/persona_none.png`, `/persona_warm.png`, `/persona_direct.png`, `/persona_curious.png`
- 메인 선택 카드 이미지: `/characterChat_main.png`, `/characterStory_main.png`

각 캐릭터의 이미지 생성 프롬프트는 `src/app.js`의 `characters` 배열에서 관리합니다.

- `imageBasePrompt` — 기본 외모 프롬프트
- `customImageAppearancePrompt` — 사용자가 직접 작성한 외모 프롬프트. 값이 있으면 `imageBasePrompt`보다 우선 사용
- `customImageReference` — 이미지 생성 API에 함께 전달할 참고 이미지
- `chatBackground` — 채팅 화면 배경 이미지

## API 엔드포인트

모두 서버(`server/index.js`)에서 OpenRouter를 호출하므로 API 키가 브라우저에 노출되지 않습니다.

- `POST /api/chat` — 캐릭터 대화 응답 생성
- `POST /api/rewrite-tone` — 사용자 입력의 페르소나 말투 보정
- `POST /api/summarize-image-scene` — 캐릭터와 사용자 대화를 이미지 생성용 장면 요약으로 변환
- `POST /api/generate-image` — 이미지 생성
- `POST /api/story` — 줄거리 후보 제안
- `POST /api/consumer` — 소비자 유형별 반응 시뮬레이션
- `POST /api/persuade` — 1:1 설득 대화 응답 + 구매 확률(0~100) 갱신
- `POST /api/persuade-report` — 설득 대화 분석 보고서 생성
