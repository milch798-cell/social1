// ============================================================
// 사회과 다국어 어휘 학습 사이트 — 데이터 모듈
// 새 어휘를 추가하려면 이 배열에 항목을 추가하고,
// hasMedia: true 인 경우 /[slug].jpg 와
// assets/audio/[slug]_ko|en|ru|zh.mp4 파일을 넣어주면 됩니다.
// hasMedia: false 인 어휘는 이미지/음성 없이 텍스트(뜻풀이)만으로
// 학습 모드・퀴즈 2~4단계에 사용됩니다(1단계 카드 매칭에는 사용되지 않음).
// ============================================================

const VOCAB = [
  {
    slug: "정치",
    hasMedia: true,
    image: "정치.png",
    ko: { word: "정치", desc: "사회 구성원 간의 대립과 갈등을 조정하여 문제를 해결하는 모든 과정입니다." },
    en: { word: "Politics", desc: "Politics is the entire process of resolving problems by mediating confrontations and conflicts among members of society." },
    ru: { word: "Политика", desc: "это весь процесс решения проблем путём регулирования противостояний и конфликтов между членами общества." },
    zh: { word: "政治", desc: "政治是调解社会成员之间的对立与冲突，并解决问题的全过程。" },
    examples: [
      "아이들이 매일 먹는 급식에는 정치가 숨어 있습니다. 모든 학생이 좋아하는 메뉴만 나올 수 없는 이유(영양 균형, 예산, 알레르기 등)를 조율하는 과정이 정치입니다.",
      "점심시간마다 축구를 하고 싶은 6학년과 피구를 하고 싶은 5학년이 운동장을 두고 다툽니다. 이때 전교어린이회에서 요일별로 구역을 나누기로 '규칙'을 만듭니다. 민주적 의사결정과 규칙 제정. 힘이 센 사람이 독점하는 것이 아니라, 대화와 타협을 통해 모두가 납득할 수 있는 법(규칙)을 만드는 과정입니다.",
      "등굣길 안전을 위해 횡단보도 앞에 노란색 옐로카펫이 깔리고, 자동차 속도가 제한됩니다. 이건 누군가 \"아이들의 안전이 가장 중요하다\"라고 목소리를 냈기 때문입니다.",
      "부모님은 \"그만해라\", 아이는 \"더 하고 싶다\"라고 싸울 때, 가족이 모여서 '하루 1시간'이라는 약속을 정합니다. 이것이 가정 내에서 일어나는 가장 작은 단위의 정치입니다. 이처럼 한 사람의 일방적인 지시가 아니라 구성원이 함께 의견을 나누어 평화로운 상태를 유지하는 것이 정치의 본질입니다.",
      "전교 회장 후보가 \"화장실에 비누를 항상 채워두겠습니다\"라고 약속합니다. 학생들은 그 공약이 정말 필요한지 판단해서 투표를 합니다. 나의 불편함을 대신 해결해 줄 대표를 뽑고, 그 대표가 약속을 지키는지 감시하는 과정이 정치의 시작입니다."
    ]
  },
  {
    slug: "정치제도",
    hasMedia: true,
    image: "정치제도.png",
    ko: { word: "정치 제도", desc: "많은 사람이 모여 살다 보면 의견이 다를 때가 있죠? 이때 문제를 해결하고 질서를 지키기 위해 만든 사회의 운영 규칙입니다." },
    en: { word: "Political System", desc: "Operating rules for society created to resolve conflicts and maintain order when many people live together and have different opinions." },
    ru: { word: "Политическая система", desc: "Правила управления обществом, созданные для решения проблем и поддержания порядка, когда много людей живут вместе и имеют разные мнения." },
    zh: { word: "政治制度", desc: "许多人聚集在一起生活，难免会有意见分歧。这是为了解决这些问题并维持秩序而制定的社会运营规则。" },
    examples: [
      "학급 회의를 통해 청소 당번을 정하는 것도 하나의 작은 정치제도라고 할 수 있어요.",
      "학급 회의를 통해 점심시간 운동장 사용 순서를 정하는 규칙과 비슷해요.",
      "학교 복도에서 우측보행을 하기로 약속한 규칙과 같습니다.",
      "모둠 활동을 할 때 각자의 역할을 나누는 방식을 정하는 것과 비슷합니다."
    ]
  },
  {
    slug: "democracy",
    hasMedia: true,
    image: "democracy.jpg",
    ko: { word: "민주주의", desc: "어떤 한 사람이 마음대로 결정하는 것이 아니라, 나라의 주인인 국민이 함께 뜻을 모아 나라를 다스리는 방식입니다." },
    en: { word: "Democracy", desc: "A way of ruling the country where the people, as masters, gather their thoughts together instead of one person making decisions arbitrarily." },
    ru: { word: "Демократия", desc: "Способ управления страной, при котором народ как хозяин принимает решения вместе, а не один человек по своему усмотрению." },
    zh: { word: "民主主义", desc: "不是由某个人随心所欲地做决定，而是由作为国家主人的国民共同集思广익来治理国家的方式。" },
    examples: [
      "모든 친구의 의견을 듣고 다수결로 점심시간 놀이를 정하는 것이 민주주의의 모습이에요.",
      "현장체험 학습 장소를 우리 반 친구들이 투표로 직접 정하는 것과 같아요.",
      "어떤 놀이를 할지 정할 때 모두의 의견을 듣고 다수결로 결정하는 것이에요.",
      "학급의 문제를 해결하기 위해 모두가 자유롭게 자기 생각을 말하는 것이에요."
    ]
  },
  {
    slug: "주권",
    hasMedia: true,
    image: "주권.png",
    ko: { word: "주권", desc: "가족의 중요한 일을 가족구성원이 정하듯, 나라의 중요한 일을 스스로 결정할 수 있는 주인의 힘입니다." },
    en: { word: "Sovereignty (Popular ~)", desc: "The power of a master to decide the important affairs of the country, just as family members decide important family matters." },
    ru: { word: "Суверенитет (Народный ~)", desc: "Власть хозяина самостоятельно принимать важные решения для страны, подобно тому как члены семьи решают важные семейные дела." },
    zh: { word: "主权 (国民主权)", desc: "就像家庭成员决定家庭大事一样，这是作为主人可以自主决定国家大事的力量。" },
    examples: [
      "우리가 투표를 하는 이유는 나라의 주인으로서 내 권리인 '주권'을 당당하게 행사하기 위해서예요.",
      "투표를 통해 나를 대신해 일할 대표자를 뽑아 내 뜻을 전하는 행동이에요.",
      "나라의 정책이 잘못되었다고 생각할 때 캠페인, 1인시위, 서명 운동 등을 통해 \"고쳐주세요\"라고 당당하게 말하는 힘이에요."
    ]
  },
  {
    slug: "정책",
    hasMedia: true,
    image: "정책.png",
    ko: { word: "정책", desc: "사람들이 더 안전하고 행복하게 살 수 있도록, 나라나 지역 사회가 어떤 문제를 해결하기 위해 세운 구체적인 계획과 약속입니다." },
    en: { word: "Policy", desc: "Specific plans and promises made by the state or local community to solve problems so that people can live more safely and happily." },
    ru: { word: "Политика", desc: "Конкретные планы и обещания, установленные государством или местным сообществом для решения проблем, чтобы люди могли жить в большей безопасности и счастье." },
    zh: { word: "政策", desc: "为了让人们生活得更安全、更幸福，国家或地方社会为解决某些问题而制定的具体计划和承诺。" },
    examples: [
      "\"학교 앞 길은 위험해!\"라는 목소리가 모여, 학교 주변 도로의 속도를 제한하고 안전 펜스를 설치하기로 나라에서 계획을 세운 것이 바로 정책이에요.",
      "한국어가 서툰 친구들이 학교 생활에 잘 적응할 수 있도록 특별한 수업(KSL)을 만들고 교재를 지원하는 것도 나라의 중요한 정책 중 하나예요.",
      "무상 급식 및 우유 급식은 모든 어린이가 차별 없이 건강하게 밥을 먹을 수 있도록 나라에서 예산을 들여 점심 식사를 제공하기로 약속하고 실천하는 정책이에요."
    ]
  },
  {
    slug: "policy-reflection",
    hasMedia: true,
    image: "policy-reflection.jpg",
    ko: { word: "정책 반영", desc: "우리들의 생각이나 요구가 나라나 학교의 실제 계획(정책) 속에 쏙 들어가는 것입니다." },
    en: { word: "Policy Reflection", desc: "When our ideas or demands are actually included in the official plans (policies) of the school or the country." },
    ru: { word: "Отражение в политике", desc: "Когда наши идеи или требования включаются в реальные планы (политику) школы или страны." },
    zh: { word: "政策反映", desc: "我们的想法或要求被纳入学校或国家的实际计划（政策）中。" },
    examples: [
      "어린이 보호구역에 과속 방지턱을 설치해달라는 시민들의 의견이 나라의 계획에 반영되었어요.",
      "학생들이 건의한 '학교 도서관 신간 도서 구입' 의견이 예산안에 포함된 경우처럼 우리의 생각이나 요구가 계획에 반영되는 것을 말해요.",
      "\"학교 앞에 가로등을 설치해 주세요\"라는 주민들의 의견으로 가로등이 생긴 경우예요."
    ]
  },
  {
    slug: "election",
    hasMedia: true,
    image: "election.jpg",
    ko: { word: "선거", desc: "우리 모두가 한꺼번에 나랏일을 할 수 없으니, 우리를 대신해 일할 대표자를 투표로 뽑는 소중한 약속입니다." },
    en: { word: "Election", desc: "A precious promise to vote for a representative to work on our behalf, since we cannot all manage state affairs at once." },
    ru: { word: "Выборы", desc: "Важное обещание выбрать путем голосования представителя, который будет работать вместо нас, так как мы не можем все вместе заниматься делами" },
    zh: { word: "选举", desc: "因为我们无法同时处理国家事务，所以通过投票选举代表我们工作的代表，这是一个珍贵的约定。" },
    examples: [
      "새 학기가 되어 우리 반을 이끌어갈 학급 회장과 부회장을 뽑는 비슷해요.",
      "전교 어린이 회장 선거 날, 투표소에서 신중하게 투표하는 일과 같아요.",
      "가족회의에서 이번 휴가지 결정을 위해 각자의 의견을 표로 모으는 일과 같아요."
    ]
  },
  {
    slug: "legitimacy",
    hasMedia: true,
    image: "legitimacy.jpg",
    ko: { word: "정당성", desc: "정해진 규칙(선거 등)을 지켜서 뽑혔기 때문에, 모두가 인정할 수 있는 올바른 자격을 얻은 상태입니다." },
    en: { word: "Legitimacy", desc: "A state of having gained proper qualification that everyone can accept, because the person was elected by following set rules (such as elections)." },
    ru: { word: "Легитимность", desc: "Состояние получения надлежащей квалификации, которую все могут признать, потому что человек был выбран с соблюдением установленных правил (таких как выборы)." },
    zh: { word: "正当性", desc: "因为遵守了既定规则（如选举等）而被选中，从而获得大家都能认可的正当资格的状态。" },
    examples: [
      "정식 선거를 통해 뽑힌 전교 회장은 학교 행사를 이끌어갈 '정당성'을 갖게 돼요.",
      "정식 선거로 뽑힌 회장이 \"자, 이제 회의를 시작하겠습니다.\"라고 할 때 친구들이 따르는 근거예요.",
      "선거에서 이긴 회장이 학교 대표로서 전교 학생자치회의에 참석할 권리를 갖는 것이에요."
    ]
  },
  {
    slug: "지지하다",
    hasMedia: true,
    image: "지지하다.png",
    ko: { word: "지지하다", desc: "어떤 사람의 생각이나 계획이 옳다고 믿고 찬성하거나 응원하는 것입니다." },
    en: { word: "Support (Endorse)", desc: "Believing that someone’s thoughts or plans are right, and therefore agreeing with or cheering for them." },
    ru: { word: "Поддерживать", desc: "Вера в то, что чьи-то мысли или планы верны, и, следовательно, согласие с ними или их поддержка." },
    zh: { word: "支持", desc: "相信某个人的想法或计划是正确的，并表示赞成或支持。" },
    examples: [
      "나는 환경 보호를 중요하게 생각하는 후보자를 적극적으로 지지해요.",
      "\"저 후보의 공약이 정말 좋아!\"라고 생각하며 그 사람에게 투표하는 것이에요.",
      "회장 후보로 나온 친구의 발표를 듣고 박수를 치며 응원하고 해당 친구에게 투표하 것이에요."
    ]
  },
  {
    slug: "정치적의사",
    hasMedia: true,
    image: "정치적의사.png",
    ko: { word: "정치적 의사", desc: "사회 문제나 나라 일에 대해 내가 가지고 있는 나만의 생각이나 의견입니다." },
    en: { word: "Political Will / Opinion", desc: "One's own unique thoughts or opinions regarding social issues or the affairs of the country." },
    ru: { word: "Политическая воля", desc: "Собственные уникальные мысли или мнения по поводу социальных проблем или дел страны." },
    zh: { word: "政治意愿", desc: "针对社会问题或国家事务，自己所持有的个人想法或意见。" },
    examples: [
      "학교 앞 횡단보도를 더 넓혀야 한다는 내 생각은 나의 정치적 의사 표현이에요.",
      "\"학교 앞 횡단보도에 신호등이 꼭 필요해\"라고 생각하는 나의 마음이에요.",
      "\"급식에서 잔반을 줄이는 방법은 이게 좋겠어\"라고 제안하는 의견이에요.",
      "전교회장 선거 벽보를 보고 \"나는 저 후보의 생각이 마음에 들어\"라고 판단하는 생각이에요."
    ]
  },
  {
    slug: "universal-suffrage",
    hasMedia: true,
    image: "universal-suffrage.jpg",
    ko: { word: "보통 선거", desc: "성별, 재산, 학력에 상관없이 일정한 나이가 되면 누구나 투표할 수 있는 원칙입니다." },
    en: { word: "Universal Suffrage", desc: "The principle that anyone can vote once they reach a certain age, regardless of their gender, wealth, or education." },
    ru: { word: "Всеобщее избирательное право", desc: "Принцип, согласно которому каждый может голосовать по достижении определенного возраста, независимо от пола, имущества или образования." },
    zh: { word: "普通选举", desc: "无论性别、财产、学历如何，只要达到一定年龄，任何人都可以投票的原则。" },
    examples: [
      "돈이 많거나 공부를 많이 한 사람만 투표하는 게 아니라, 누구나 만 18세가 되면 투표할 수 있어요",
      "가난한 사람도, 부자인 사람도 나이가 되면 똑같이 투표장에 가는 것이에요."
    ]
  },
  {
    slug: "평등선거",
    hasMedia: true,
    image: "평등선거.png",
    ko: { word: "평등 선거", desc: "모든 사람이 똑같이 한 표씩만 투표할 수 있는 것입니다." },
    en: { word: "Equal Suffrage", desc: "The principle that every person can cast exactly one vote, and each vote has the same value." },
    ru: { word: "Равное избирательное право", desc: "Принцип, согласно которому каждый человек может отдать только один голос, и каждый голос имеет одинаковую ценность." },
    zh: { word: "平等选举", desc: "每个人都平等地只能投出一票的原则。" },
    examples: [
      "유명한 사람도 한 표, 돈이 많거나 적거나 모두 한 표, 나도 한 표! 모든 표의 가치는 똑같아요.",
      "선생님도 한 표, 18세가 된 형도 한 표씩만 행사하는 것이에요.",
      "회장 선거할 때 모든 친구들이 1표씩만 투표용지를 받아요."
    ]
  },
  {
    slug: "직접선거",
    hasMedia: true,
    image: "직접선거.png",
    ko: { word: "직접 선거", desc: "내가 뽑고 싶은 사람을 내 손으로 직접 투표하는 것입니다." },
    en: { word: "Direct Election", desc: "Voting for the person you want to elect with your own hand, rather than through a representative." },
    ru: { word: "Прямые выборы", desc: "Личное голосование за кандидата, которого вы хотите выбрать, без посредников." },
    zh: { word: "直接选举", desc: "用自己的手直接投票给自己想选的人，而不是通过他人代投。" },
    examples: [
      "내 투표용지를 다른 사람이 대신 써주거나 대신 내주는 것이 아니라 내가 직접 투표함에 넣어야 해요.",
      "\"엄마가 대신 찍어줘\" 하지 않고 선거권자가 직접 투표소에 들어가는 것이에요.",
      "회장 선거 때 내가 스스로 투표하고 직접 표를 제출하는 것이에요."
    ]
  },
  {
    slug: "secret-ballot",
    hasMedia: true,
    image: "secret-ballot.jpg",
    ko: { word: "비밀 선거", desc: "내가 누구에게 투표했는지 다른 사람이 알 수 없게 비밀을 지켜주는 것입니다." },
    en: { word: "Secret Ballot", desc: "Keeping your vote a secret so that others cannot know who you voted for." },
    ru: { word: "Тайное голосование", desc: "Сохранение вашего голоса в тайне, чтобы другие не могли узнать, за кого вы проголосовали." },
    zh: { word: "秘密选举", desc: "保护投票秘密，不让别人知道你投给了谁。" },
    examples: [
      "투표소 안에서 내가 누굴 찍었는지 아무에게도 말하지 않아도 되는 권리가 있어요.",
      "투표소 안에 가림막이 있어서 내가 누구를 찍는지 아무도 못 보게 하는 것이에요.",
      "친구가 \"누구 찍었어?\"라고 물어봐도 대답하지 않을 권리가 있는 것이에요."
    ]
  },
  {
    slug: "선거관리위원회",
    hasMedia: true,
    image: "선거관리위원회.png",
    ko: { word: "선거관리위원회", desc: "선거가 규칙대로 공정하게 치러지도록 감시하고 관리하는 곳입니다." },
    en: { word: "National Election Commission", desc: "A body that monitors and manages elections to ensure they are conducted fairly and according to the rules." },
    ru: { word: "Избирательная комиссия", desc: "Орган, который контролирует и управляет выборами, чтобы они проходили честно и в соответствии с правилами." },
    zh: { word: "选举管理委员会", desc: "监督并管理选举，确保选举依法、公正进行的机构。" },
    examples: []
  },
  {
    slug: "정당",
    hasMedia: true,
    image: "정당.png",
    ko: { word: "정당", desc: "정치적인 생각이 비슷한 사람들이 모여서 함께 나랏일을 하기 위해 만든 단체입니다." },
    en: { word: "Political Party", desc: "A group of people with similar political ideas who come together to participate in and manage the affairs of the country." },
    ru: { word: "Политическая партия", desc: "Группа людей с похожими политическими взглядами, объединившихся для совместного управления делами страны." },
    zh: { word: "政党", desc: "政治见解相似的人为了共同治理国家而组成的团体。" },
    examples: [
      "환경을 지키고 싶은 사람들이 모인 정당도 있고, 경제를 살리고 싶은 사람들이 모인 정당도 있어요.",
      "환경을 중요하게 생각하는 사람들이 모인 '초록정당'을 만들 수 있어요.",
      "동물의 권리를 지키고 싶은 사람들이 모인 '동물사랑정당'",
      "어린이들의 복지를 위해 모인 '어린이행복정당'."
    ]
  },
  {
    slug: "유권자",
    hasMedia: true,
    image: "유권자.png",
    ko: { word: "유권자", desc: "투표할 권리가 있는 사람(유권자)을 말합니다." },
    en: { word: "Voter", desc: "A person who has the legal right to vote in an election." },
    ru: { word: "Избиратель", desc: "Человек, имеющий законное право голоса на выборах." },
    zh: { word: "有权者", desc: "拥有投票权的合法公民。" },
    examples: [
      "유권자인 우리 부모님은 후보자들의 공약집을 꼼꼼히 읽어보고 투표하셨어요.\"",
      "학급 회장 선거를 할 때 우리 반의 모든 학생은 유권자예요.",
      "학급 회의에서 손을 들어 의견을 결정할 권리가 있는 우리 반 친구들 모두예요."
    ]
  },
  {
    slug: "공약",
    hasMedia: true,
    image: "공약.png",
    ko: { word: "공약", desc: "선거에 나온 후보자가 \"내가 당선되면 여러분을 위해 이런 일을 꼭 하겠습니다!\"\"라고 많은 사람 앞에서 공개적으로 하는 약속입니다." },
    en: { word: "Election Pledge", desc: "An election pledge is a public promise made by a candidate, saying, \"If I am elected, I will definitely do this for you!\"" },
    ru: { word: "Предвыборное обещание", desc: "Предвыборное обещание — это публичное обязательство кандидата: «Если меня выберут, я обязательно сделаю это для вас!»" },
    zh: { word: "公约", desc: "竞选公约是候选人在大家面前公开做的承诺，意思是：“如果我当选了，我一定会为大家做这件事！”" },
    examples: [
      "회장 후보로 나온 친구가 \"우리 반 사물함 위에 쌓인 먼지를 매주 금요일마다 닦겠습니다!\"라고 약속하는 것이에요.",
      "\"급식 시간에 우리가 좋아하는 메뉴가 더 자주 나오도록 영양사 선생님께 건의하겠습니다\"라고 발표하는 것이에요.",
      "벽보에 \"심심한 쉬는 시간을 위해 보드게임을 5종류 더 가져다 놓겠습니다\"라고 적어두는 것이에요."
    ]
  },
  {
    slug: "정책제안",
    hasMedia: true,
    image: "정책제안.png",
    ko: { word: "정책 제안", desc: "우리가 겪는 불편함을 해결하거나 더 좋은 학교를 만들기 위해, \"이렇게 해보면 어떨까요?\"라고 구체적인 아이디어나 방법을 내놓는 것입니다." },
    en: { word: "Policy Proposal", desc: "It is coming up with specific ideas or methods, such as \"How about doing it this way?\" to solve inconveniences we face or to make a better school." },
    ru: { word: "Предложение по политике", desc: "Это выдвижение конкретных идей или методов, таких как «А что, если сделать вот так?», чтобы решить проблемы, с которыми мы сталкиваемся, или сделать школу лучше." },
    zh: { word: "政策提案", desc: "为了解决我们面临的不便或建设更好的学校，提出如“这样做怎么样？”之类的具体想法或方法。" },
    examples: [
      "\"학교 화장실에 비누가 자주 떨어져요. 자동으로 비누가 나오는 기계를 설치해 주세요\"라고 학생자치회에 의견을 내는 것이에요.",
      "\"이주배경 친구들을 위해 알림장을 러시아어로도 써주세요\"라고 선생님께 아이디어를 말씀드리는 것이에요.",
      "\"복도에서 뛰는 친구들이 많으니, '천천히 걷기 캠페인'을 열자\"고 학급 회의에서 제안하는 것이에요."
    ]
  },
  {
    slug: "공공의이익",
    hasMedia: true,
    image: "공공의이익.png",
    ko: { word: "공공의 이익", desc: "나 혼자만 좋은 것이 아니라, 우리 반 전체, 우리 학교 모두, 혹은 우리 동네 사람들 모두에게 도움이 되는 좋은 결과를 말합니다. 즉,  '모두의 행복'을 의미합니다." },
    en: { word: "Common Good", desc: "It refers to a good result that benefits not just me, but our entire class, our whole school, or everyone in our neighborhood. In other words, it means \"everyone's happiness.\"" },
    ru: { word: "Общественные интересы", desc: "Это означает хороший результат, который приносит пользу не только мне одному, а всему нашему классу, всей школе или всем жителям нашего района. Другими словами, это «счастье для всех»." },
    zh: { word: "公共利益", desc: "这不仅是指对我个人有利，而是指对我们全班、全校或全社区的人都有帮助的好结果。换句话서，就是指“大家的幸福”。" },
    examples: [
      "운동장을 한 모둠이 독점하지 않고, 모든 반이 순서대로 공평하게 사용해서 모두가 즐겁게 노는 것이에요.",
      "학교 앞 횡단보도에 노란 발자국을 그려서, 모든 학생이 차 사고 없이 안전하게 등교하게 되는 것이에요.",
      "도서실 책을 깨끗이 봐서, 나 다음에 빌리는 친구도 기분 좋게 책을 읽을 수 있게 하는 것이에요."
    ]
  },
  {
    slug: "추구하다",
    hasMedia: true,
    image: "추구하다.png",
    ko: { word: "추구하다", desc: "내가 중요하다고 생각하는 목적이나 가치를 이루기 위해 계속해서 노력하고 그 방향으로 나아가는 것입니다." },
    en: { word: "Pursue", desc: "It means continuously working and moving forward in a certain direction to achieve a goal or value that you consider important." },
    ru: { word: "Стремиться / Преследовать", desc: "Это значит постоянно работать и двигаться вперед в определенном направлении, чтобы достичь цели или ценности, которую вы считаете важной." },
    zh: { word: "追求", desc: "为了实现自己认为重要的目标或价值，不断努力并朝着那个方向前进。" },
    examples: [
      "우리 반 회장이 \"모두가 사이좋은 반\"이라는 목표를 추구하며 매일 친구들의 고민을 들어주는 것이에요.",
      "환경 보호를 추구하는 동아리 친구들이 매주 운동장의 쓰레기를 줍는 활동을 실천하는 것이에요.",
      "선생님이 \"수업을 즐겁게 배우는 교실\"을 추구하며 재미있는 게임 수업을 준비하시는 것이에요."
    ]
  },
  {
    slug: "election-principles",
    hasMedia: true,
    image: "election-principles.jpg",
    ko: { word: "선거의 기본 원칙", desc: "민주주의 국가에서 공정한 선거가 이루어지도록 반드시 지켜야 하는 보통 선거, 평등 선거, 직접 선거, 비밀 선거라는 네 가지 규칙입니다." },
    en: { word: "Basic Principles of Election", desc: "Four rules that a democratic country must follow to hold a fair election: universal, equal, direct, and secret suffrage." },
    ru: { word: "Основные принципы выборов", desc: "Четыре правила, которые демократическая страна должна соблюдать для проведения справедливых выборов: всеобщее, равное, прямое и тайное голосование." },
    zh: { word: "选举的基本原则", desc: "民主国家为实现公正的选举而必须遵守的四项规则：普通选举、平等选举、直接选举和秘密选举。" },
    examples: [
      "학급 회장을 뽑을 때도 나이나 성별과 상관없이 투표하고, 내가 누구를 뽑았는지 비밀로 하는 것처럼 지켜야 할 규칙들이 있어요.",
      "누구나 투표할 수 있고, 한 표씩 평등하게, 내 손으로 직접, 비밀리에 투표하는 것, 이 네 가지가 공정한 선거의 약속이에요."
    ]
  },
  {
    slug: "국회",
    hasMedia: true,
    image: "국회.png",
    ko: { word: "국회", desc: "국민의 대표들이 모여 나라의 중요한 규칙(법)을 만들고, 나라 살림을 감시하는 곳입니다." },
    en: { word: "National Assembly", desc: "It is a place where representatives of the people gather to make important rules (laws) for the country and monitor the national budget and affairs." },
    ru: { word: "Национальное собрание", desc: "Это место, где собираются представители народа, чтобы принимать важные правила (законы) страны и следить за государственным бюджетом и делами." },
    zh: { word: "国会", desc: "这是国民代表聚集在一起制定国家重要规则（法律）并监督国家生活的地方。" },
    examples: [
      "어린이들이 안전하게 등교할 수 있도록 국회에서 새로운 법을 만들기로 했어요.\"",
      "우리나라의 모든 약속이 시작되는 '약속 공장' 같은 곳이 바로 국회예요.",
      "뉴스에서 본 것처럼 국민을 대표하는 국회의원들이 모여 나라의 미래를 위해 토론하는 곳이에요."
    ]
  },
  {
    slug: "국회의원",
    hasMedia: true,
    image: "국회의원.png",
    ko: { word: "국회의원", desc: "국민이 투표로 뽑은 국민의 심부름꾼으로 국민의 목소리를 나라에 전달합니다." },
    en: { word: "Member of National Assembly", desc: "They are \"servants of the people\" elected by vote, who deliver the voices of the citizens to the nation." },
    ru: { word: "Депутат (Член Нац. собрания)", desc: "Это «посланники народа», выбранные путем голосования, которые передают голос граждан государству." },
    zh: { word: "国会议员", desc: "他们是通过投票选出的“国民办事员”，负责将国民的声音传递给国家。" },
    examples: [
      "우리 반 친구들의 불편함을 대신 전하기 위해 뽑힌 학급 회장과 같은 역할이에요.",
      "\"우리 동네에 도서관이 필요해요!\"라고 국민 대신 나라에 말해주는 대표자예요.",
      "국민이 원하는 세상을 만들기 위해 법안(규칙안)을 만들고 발표하는 분들이에요."
    ]
  },
  {
    slug: "국가기관",
    hasMedia: true,
    image: "국가기관.png",
    ko: { word: "국가기관", desc: "나라를 안전하고 행복하게 만들기 위해 세워진 커다란 조직들을 말합니다. 국회, 정부, 법원 등이 모두 국가기관입니다." },
    en: { word: "State Institution", desc: "It refers to large organizations established to make the country safe and happy. The National Assembly, the Government, and the Courts are all national agencies." },
    ru: { word: "Государственный орган", desc: "Это крупные организации, созданные для того, чтобы сделать страну безопасной и счастливой. Национальное собрание, Правительство и Суды — все это государственные органы." },
    zh: { word: "国家机关", desc: "这是指为了让国家安全幸福而建立的大型组织。国会、政府、法院等都是国家机关。" },
    examples: [
      "학교 운영을 위해 꼭 필요한 교무실, 행정실, 보건실처럼 나라에 꼭 필요한 부서들이에요.",
      "우리가 낸 세금으로 우리 동네 공원을 관리해 주는 곳들이 다 국가기관이에요."
    ]
  },
  {
    slug: "법률",
    hasMedia: true,
    image: "법률.png",
    ko: { word: "법률", desc: "모든 국민이 지켜야 할 약속이자 규칙으로 국회에서 토론을 거쳐 만들어집니다." },
    en: { word: "Law / Legislation", desc: "It is a promise and rule that all citizens must follow, created through discussions in the National Assembly." },
    ru: { word: "Закон", desc: "Это обещание и правило, которое должны соблюдать все граждане; оно создается путем обсуждений в Национальном собрании." },
    zh: { word: "法律", desc: "这是全体国民都必须遵守的约定和规则，是通过国会讨论制定的。" },
    examples: [
      "학교에서 \"학교 복도에서는 뛰지 않기\"를 모든 학생들이 지키틑 것처럼 국가의 국민이라면 누구나 지켜야 하는 규칙이에요.",
      "식당에서 담배를 피울 수 없게 하는 법이 있어요.",
      "환경을 위해 일회용품 사용을 줄이게 하는 법",
      "자전거를 탈 때 헬멧을 꼭 써야 한다는 약속처럼 우리를 보호해 주는 방패 역할을 해요."
    ]
  },
  {
    slug: "예산안심의",
    hasMedia: true,
    image: "예산안심의.png",
    ko: { word: "예산안 심의", desc: "나라의 세금을 어디에, 얼마나 쓸지 미리 꼼꼼하게 따져보고 결정하는 일입니다." },
    en: { word: "Budget Deliberation", desc: "It is the process of carefully examining and deciding in advance where and how much of the country's taxes will be spent." },
    ru: { word: "Рассмотрение бюджета", desc: "Это процесс тщательного изучения и принятия решения о том, куда и сколько государственных налогов будет потрачено заранее." },
    zh: { word: "预算案审议", desc: "预先仔细考量并决定国家的税金将花在何处、花多少钱的工作。" },
    examples: [
      "필요한 물건을 사기 위해 용돈을 부모님께 받아야할 때, 부모님께 얼마의 용돈이 필요한지, 무엇을 사야하는지, 왜 사야하는지 말씀을 드리는 것과 같아요.",
      "\"우리 학교 체육대회 예산이 너무 많지는 않나요?\"라고 확인는 회의와 비슷해요.",
      "\"올해 학교 축제 예산이 너무 많지는 않은지\" 전교 회장단이 꼼꼼히 살펴보는 회의와 유사해요.",
      "나라의 소중한 돈이 꼭 필요한 곳(어린이 병원, 학교 등)에 쓰이도록 허락해 주는 일이에요."
    ]
  },
  {
    slug: "결산심사",
    hasMedia: true,
    image: "결산심사.png",
    ko: { word: "결산 심사", desc: "나라의 돈을 다 쓴 뒤에 잘 썼는지 계획한 곳에 적절하게 사용했는지 확인하는 것입니다." },
    en: { word: "Settlement Audit", desc: "It is the process of checking whether the country's money was spent well and appropriately used as planned after all of it has been spent." },
    ru: { word: "Аудит исполнения бюджета", desc: "Это процесс проверки того, были ли государственные деньги потрачены правильно и по назначению после того, как все они были израсходованы." },
    zh: { word: "决算审查", desc: "在国家的钱全部花完后，确认是否花得当，以及是否按照计划用在了合适的地方。" },
    examples: [
      "부모님께서 주신 용돈을 사용한 뒤에 처음 용돈을 받을 때 말씀드린 사용 목적에 맞게 사용했는지 부모님께 확인을 받는 절차와 같아요.",
      "부모님께서 \"지난번에 사기로 했던 축구공 대신 다른 걸 사진 않았는지\" 나중에 확인하는 것과 비슷해요.",
      "\"지난번에 사기로 한 공을 정말 샀나요?\"라고 확인하는 것과 비슷해요.",
      "돈을 낭비하지 않고 정직하게 썼는지 확인하는 과정과 비슷해요."
    ]
  },
  {
    slug: "국정감사",
    hasMedia: true,
    image: "국정감사.png",
    ko: { word: "국정 감사", desc: "정부가 나라 일을 잘못하고 있지는 않은지 국회가 조사하고 감시하는 일입니다." },
    en: { word: "Government Audit", desc: "It is the work of the National Assembly to investigate and monitor whether the government is doing its job correctly or making any mistakes." },
    ru: { word: "Государственная ревизия", desc: "Это работа Национального собрания по расследованию и контролю за тем, правильно ли правительство выполняет свою работу и не допускает ли оно ошибок." },
    zh: { word: "国政监查", desc: "这是指国会对政府是否在错误地处理国家事务进行调查和监督的工作。" },
    examples: [
      "나라가 국민과의 약속을 어기지 않고 열심히 일하고 있는지 일 년에 한 번 크게 확인하는 것이에요.",
      "선생님이 모둠 활동 시간을 마친 후, 모둠별로 약속을 잘 지켰는지 검사하는 시간과 비슷해요.",
      "\"왜 우리 동네 도로 공사가 1년째 멈춰 있나요?\"라고 국회의원이 공무원에게 묻는 일이에요.",
      "나라가 국민과의 약속을 어기지 않고 열심히 일하고 있는지 일 년에 한 번 크게 확인하는 것이에요."
    ]
  }
];

const LANGS = {
  en: { label: "United States", short: "EN" },
  ru: { label: "Russia", short: "RU" },
  zh: { label: "China", short: "ZH" }
};

// 퀴즈(2~4단계) 전용 언어 목록 — 학습 모드(LANGS)와 별개로 한국어를 포함한다.
const QUIZ_LANGS = {
  ko: { label: "대한민국", short: "KO" },
  en: { label: "United States", short: "EN" },
  ru: { label: "Russia", short: "RU" },
  zh: { label: "China", short: "ZH" }
};
