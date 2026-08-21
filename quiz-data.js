// ============================================================
// 퀴즈 문항 생성기
// VOCAB(assets/data.js)을 기반으로 매번 새로운 10문항 세트를 만든다.
// ============================================================

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}

// 초성(첫소리) 추출 -----------------------------------------------------
const CHOSEONG = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];

function toInitials(text) {
  let out = "";
  for (const ch of text) {
    const code = ch.charCodeAt(0);
    if (code >= 0xac00 && code <= 0xd7a3) {
      const idx = Math.floor((code - 0xac00) / (21 * 28));
      out += CHOSEONG[idx];
    } else if (ch === " ") {
      out += " ";
    } else {
      out += ch;
    }
  }
  return out;
}

function normalizeAnswer(text) {
  return text.replace(/\s+/g, "").trim();
}

// ---------------------------------------------------------------------
// OX 퀴즈: 정답형(실제 설명) + 오답형(다른 어휘 설명과 교차)
// ---------------------------------------------------------------------
function buildOXQuestions(count = 10) {
  const pool = [];

  VOCAB.forEach((item) => {
    pool.push({
      text: `다음 설명은 "${item.ko.word}"에 대한 설명이다.\n"${item.ko.desc}"`,
      answer: true
    });
  });

  VOCAB.forEach((item) => {
    const others = VOCAB.filter((v) => v.slug !== item.slug);
    const wrong = sample(others, 1)[0];
    pool.push({
      text: `다음 설명은 "${item.ko.word}"에 대한 설명이다.\n"${wrong.ko.desc}"`,
      answer: false
    });
  });

  return sample(pool, Math.min(count, pool.length)).map((q, i) => ({ id: i, ...q }));
}

// ---------------------------------------------------------------------
// 5지선다: 설명→어휘 / 어휘→설명 혼합
// ---------------------------------------------------------------------
function buildMCQuestions(count = 10) {
  const pool = [];

  VOCAB.forEach((item) => {
    const distractors = sample(VOCAB.filter((v) => v.slug !== item.slug), 4).map((v) => v.ko.word);
    const options = shuffle([item.ko.word, ...distractors]);
    pool.push({
      type: "desc-to-word",
      prompt: `다음 설명에 해당하는 어휘는 무엇일까요?\n"${item.ko.desc}"`,
      options,
      answer: item.ko.word
    });
  });

  VOCAB.forEach((item) => {
    const distractors = sample(VOCAB.filter((v) => v.slug !== item.slug), 4).map((v) => v.ko.desc);
    const options = shuffle([item.ko.desc, ...distractors]);
    pool.push({
      type: "word-to-desc",
      prompt: `"${item.ko.word}"의 알맞은 설명을 골라보세요.`,
      options,
      answer: item.ko.desc
    });
  });

  return sample(pool, Math.min(count, pool.length)).map((q, i) => ({ id: i, ...q }));
}

// ---------------------------------------------------------------------
// 초성 퀴즈: 설명/생활 예시 문장 + 초성 힌트 → 주관식
// ---------------------------------------------------------------------
function buildInitialsQuestions(count = 10) {
  const pool = [];

  VOCAB.forEach((item) => {
    const hintTexts = [item.ko.desc, ...(item.examples || [])];
    hintTexts.forEach((text) => {
      pool.push({
        text,
        answer: item.ko.word,
        initials: toInitials(item.ko.word)
      });
    });
  });

  // 어휘가 최대한 고르게 나오도록: 먼저 어휘별 1문항씩 우선 배정 후 나머지 채움
  const byWord = {};
  pool.forEach((q) => {
    (byWord[q.answer] = byWord[q.answer] || []).push(q);
  });

  const firstRound = Object.values(byWord).map((qs) => sample(qs, 1)[0]);
  const remaining = pool.filter((q) => !firstRound.includes(q));

  const chosen = shuffle(firstRound);
  if (chosen.length < count) {
    chosen.push(...sample(remaining, count - chosen.length));
  }

  return shuffle(chosen).slice(0, count).map((q, i) => ({ id: i, ...q }));
}

// ---------------------------------------------------------------------
// 1단계 매칭용 어휘 뽑기
// ---------------------------------------------------------------------
function pickMatchWords(n) {
  return sample(VOCAB, Math.min(n, VOCAB.length));
}
