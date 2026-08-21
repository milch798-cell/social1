// ============================================================
// 사회과 다국어 어휘 학습 사이트 — 데이터 모듈
// 새 어휘를 추가하려면 이 배열에 항목을 추가하고,
// /[slug].jpg 와 assets/audio/[slug]_ko|en|ru|zh.mp4
// 파일을 넣어주면 자동으로 목록에 나타납니다.
// ============================================================

const VOCAB = [
  {
    slug: "democracy",
    image: "democracy.jpg",
    ko: { word: "민주주의", desc: "어떤 한 사람이 마음대로 결정하는 것이 아니라, 나라의 주인인 국민이 함께 뜻을 모아 나라를 다스리는 방식입니다." },
    en: { word: "Democracy", desc: "A way of ruling the country where the people, as masters, gather their thoughts together instead of one person making decisions arbitrarily." },
    ru: { word: "Демократия", desc: "Способ управления страной, при котором народ как хозяин принимает решения вместе, а не один человек по своему усмотрению." },
    zh: { word: "民主主义", desc: "不是由某个人随心所欲地做决定，而是由作为国家主人的国民共同集思广益来治理国家的方式。" },
    examples: [
      "모든 친구의 의견을 듣고 다수결로 점심시간 놀이를 정하는 것이 민주주의의 모습이에요.",
      "현장체험 학습 장소를 우리 반 친구들이 투표로 직접 정하는 것과 같아요.",
      "학급의 문제를 해결하기 위해 모두가 자유롭게 자기 생각을 말하는 것이에요."
    ]
  },
  {
    slug: "election",
    image: "election.jpg",
    ko: { word: "선거", desc: "우리 모두가 한꺼번에 나랏일을 할 수 없으니, 우리를 대신해 일할 대표자를 투표로 뽑는 소중한 약속입니다." },
    en: { word: "Election", desc: "A precious promise to vote for a representative to work on our behalf, since we cannot all manage state affairs at once." },
    ru: { word: "Выборы", desc: "Важное обещание выбрать путём голосования представителя, который будет работать вместо нас, так как мы не можем все вместе заниматься государственными делами." },
    zh: { word: "选举", desc: "因为我们无法同时处理国家事务，所以通过投票选举代表我们工作的人，这是一个珍贵的约定。" },
    examples: [
      "새 학기가 되어 우리 반을 이끌어갈 학급 회장과 부회장을 뽑는 일과 비슷해요.",
      "전교 어린이 회장 선거 날, 투표소에서 신중하게 투표하는 일과 같아요.",
      "가족회의에서 이번 휴가지 결정을 위해 각자의 의견을 표로 모으는 일과 같아요."
    ]
  },
  {
    slug: "election-principles",
    image: "election-principles.jpg",
    ko: { word: "선거의 기본 원칙", desc: "민주주의 국가에서 공정한 선거가 이루어지도록 반드시 지켜야 하는 보통 선거, 평등 선거, 직접 선거, 비밀 선거라는 네 가지 규칙입니다." },
    en: { word: "Basic Principles of Election", desc: "Four rules that a democratic country must follow to hold a fair election: universal, equal, direct, and secret suffrage." },
    ru: { word: "Основные принципы выборов", desc: "Четыре правила, которые демократическая страна должна соблюдать для проведения справедливых выборов: всеобщее, равное, прямое и тайное голосование." },
    zh: { word: "选举的基本原则", desc: "民主国家为实现公正选举而必须遵守的四项规则：普通选举、平等选举、直接选举和秘密选举。" },
    examples: [
      "학급 회장을 뽑을 때도 나이나 성별과 상관없이 투표하고, 내가 누구를 뽑았는지 비밀로 하는 것처럼 지켜야 할 규칙들이 있어요.",
      "누구나 투표할 수 있고, 한 표씩 평등하게, 내 손으로 직접, 비밀리에 투표하는 것, 이 네 가지가 공정한 선거의 약속이에요."
    ]
  },
  {
    slug: "universal-suffrage",
    image: "universal-suffrage.jpg",
    ko: { word: "보통 선거", desc: "성별, 재산, 학력에 상관없이 일정한 나이가 되면 누구나 투표할 수 있는 원칙입니다." },
    en: { word: "Universal Suffrage", desc: "The principle that anyone can vote once they reach a certain age, regardless of their gender, wealth, or education." },
    ru: { word: "Всеобщее избирательное право", desc: "Принцип, согласно которому каждый может голосовать по достижении определённого возраста, независимо от пола, имущества или образования." },
    zh: { word: "普通选举", desc: "无论性别、财产、学历如何，只要达到一定年龄，任何人都可以投票的原则。" },
    examples: [
      "돈이 많거나 공부를 많이 한 사람만 투표하는 게 아니라, 누구나 만 18세가 되면 투표할 수 있어요.",
      "가난한 사람도, 부자인 사람도 나이가 되면 똑같이 투표장에 가는 것이에요."
    ]
  },
  {
    slug: "secret-ballot",
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
    slug: "legitimacy",
    image: "legitimacy.jpg",
    ko: { word: "정당성", desc: "정해진 규칙(선거 등)을 지켜서 뽑혔기 때문에, 모두가 인정할 수 있는 올바른 자격을 얻은 상태입니다." },
    en: { word: "Legitimacy", desc: "A state of having gained proper qualification that everyone can accept, because the person was elected by following set rules (such as elections)." },
    ru: { word: "Легитимность", desc: "Состояние обладания надлежащей квалификацией, которую все могут признать, потому что человек был избран с соблюдением установленных правил (таких как выборы)." },
    zh: { word: "正当性", desc: "因为遵守了既定规则（如选举等）而被选中，从而获得大家都能认可的正当资格的状态。" },
    examples: [
      "정식 선거를 통해 뽑힌 전교 회장은 학교 행사를 이끌어갈 '정당성'을 갖게 돼요.",
      "정식 선거로 뽑힌 회장이 \"이제 회의를 시작하겠습니다\"라고 할 때 친구들이 따르는 근거예요."
    ]
  },
  {
    slug: "policy-reflection",
    image: "policy-reflection.png",
    ko: { word: "정책 반영", desc: "우리들의 생각이나 요구가 나라나 학교의 실제 계획(정책) 속에 쏙 들어가는 것입니다." },
    en: { word: "Policy Reflection", desc: "When our ideas or demands are actually included in the official plans (policies) of the school or the country." },
    ru: { word: "Отражение в политике", desc: "Когда наши идеи или требования включаются в реальные планы (политику) школы или страны." },
    zh: { word: "政策反映", desc: "我们的想法或要求被纳入学校或国家的实际计划（政策）中。" },
    examples: [
      "어린이 보호구역에 과속 방지턱을 설치해달라는 시민들의 의견이 나라의 계획에 반영되었어요.",
      "\"학교 앞에 가로등을 설치해 주세요\"라는 주민들의 의견으로 가로등이 생긴 경우예요."
    ]
  }
];

const LANGS = {
  en: { label: "United States", short: "EN" },
  ru: { label: "Russia", short: "RU" },
  zh: { label: "China", short: "ZH" }
};
