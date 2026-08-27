// ============================================================
// 퀴즈 엔진: 4단계 진행, 채점, 재도전, 명예의 전당
// ============================================================

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// 정답/오답 설명 문구를 만든다. 선택한 퀴즈 언어가 한국어면 중복 표기를 피한다.
function explanationText(lang, item) {
  if (lang === "ko") {
    return `(한국어) ${item.ko.desc}`;
  }
  return `(${QUIZ_LANGS[lang].label}) ${item[lang].desc}\n(한국어) ${item.ko.desc}`;
}

const QuizEngine = {
  totalScore: 0,
  currentRetry: null,
  lang: "en",

  showRetry({ title, desc, retry }) {
    document.getElementById("retry-title").textContent = title;
    document.getElementById("retry-desc").textContent = desc;
    this.currentRetry = retry;
    Nav.show("quiz-retry-view");
  },

  stopAllTimersAndAudio() {
    // 현재 퀴즈 화면에는 상시 재생되는 오디오/타이머가 없어 별도 정리는 불필요하지만,
    // 추후 기능 확장 시 여기에 정리 로직을 추가할 수 있도록 자리만 마련해 둔다.
  }
};

// ============================================================
// 언어 선택 화면
// ============================================================
const QuizLang = {
  render() {
    const wrap = document.getElementById("quiz-lang-flags");
    wrap.innerHTML = "";
    Object.keys(QUIZ_LANGS).forEach((code) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-lang-btn";
      btn.dataset.lang = code;
      btn.innerHTML = `${FLAG_SVG[code]}<span>${QUIZ_LANGS[code].label}</span>`;
      btn.addEventListener("click", () => this.select(code));
      wrap.appendChild(btn);
    });
  },
  select(code) {
    QuizEngine.lang = code;
    Nav.show("quiz-match-view");
    QuizMatch.start();
  }
};

// ============================================================
// 1단계: 카드 매칭
// ============================================================
const QuizMatch = {
  ROUND_SIZES: [3, 4, 5],
  round: 0,
  matchedCount: 0,
  totalPairs: 0,
  flipped: [],
  lock: false,

  start() {
    QuizEngine.totalScore = 0;
    this.round = 0;
    this.playRound();
  },

  playRound() {
    const n = this.ROUND_SIZES[this.round];
    const words = pickMatchWords(n);
    this.totalPairs = n;
    this.matchedCount = 0;
    this.flipped = [];
    this.lock = false;

    document.getElementById("match-round-label").textContent = `(${n}쌍 매칭 · ${this.round + 1}/${this.ROUND_SIZES.length})`;

    const board = document.getElementById("match-board");
    board.innerHTML = "";
    board.style.setProperty("--match-cols", n);

    const cards = [];
    words.forEach((w) => {
      cards.push({ slug: w.slug, type: "word", label: w.ko.word });
      cards.push({ slug: w.slug, type: "image", image: w.image, label: w.ko.word });
    });

    shuffle(cards).forEach((c) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "match-card";
      btn.dataset.slug = c.slug;
      btn.dataset.type = c.type;

      const front = c.type === "word"
        ? `<span class="match-card-word">${escapeHtml(c.label)}</span>`
        : `<img class="match-card-img" src="${c.image}" alt="${escapeHtml(c.label)}">`;

      btn.innerHTML = `
        <span class="match-card-inner">
          <span class="match-card-back" aria-hidden="true">?</span>
          <span class="match-card-front">${front}</span>
        </span>`;

      btn.addEventListener("click", () => this.onCardClick(btn));
      board.appendChild(btn);
    });
  },

  onCardClick(btn) {
    if (this.lock) return;
    if (btn.classList.contains("matched") || btn.classList.contains("flipped")) return;

    btn.classList.add("flipped");
    this.flipped.push(btn);

    if (this.flipped.length === 2) {
      this.lock = true;
      const [a, b] = this.flipped;
      const isMatch = a.dataset.slug === b.dataset.slug && a.dataset.type !== b.dataset.type;

      if (isMatch) {
        a.classList.add("matched");
        b.classList.add("matched");
        this.flipped = [];
        this.lock = false;
        this.matchedCount++;
        if (this.matchedCount === this.totalPairs) {
          setTimeout(() => this.roundComplete(), 500);
        }
      } else {
        setTimeout(() => {
          a.classList.remove("flipped");
          b.classList.remove("flipped");
          this.flipped = [];
          this.lock = false;
        }, 700);
      }
    }
  },

  roundComplete() {
    this.round++;
    if (this.round < this.ROUND_SIZES.length) {
      this.playRound();
    } else {
      Nav.show("quiz-ox-view");
      QuizOX.start();
    }
  }
};

// ============================================================
// 2단계: OX 퀴즈
// ============================================================
const QuizOX = {
  questions: [],
  idx: 0,
  score: 0,

  start() {
    this.questions = buildOXQuestionsML(QuizEngine.lang, 10);
    this.idx = 0;
    this.score = 0;
    document.querySelector("#quiz-ox-view .quiz-stage-label").textContent =
      `2단계 · OX 퀴즈 (${QUIZ_LANGS[QuizEngine.lang].label})`;
    this.renderQuestion();
  },

  renderQuestion() {
    const q = this.questions[this.idx];
    document.getElementById("ox-progress").textContent = `${this.idx + 1} / ${this.questions.length}문항`;
    document.getElementById("ox-score").textContent = `점수: ${this.score}점`;
    document.getElementById("ox-question").textContent = q.text;
    document.getElementById("ox-feedback").textContent = "";
    document.querySelectorAll(".ox-btn").forEach((b) => { b.disabled = false; });
  },

  answer(value) {
    const q = this.questions[this.idx];
    const correct = value === q.answer;
    if (correct) this.score += 1;

    if (correct) {
      document.getElementById("ox-feedback").textContent = "정답이에요! 🎉";
    } else {
      const lang = QuizEngine.lang;
      document.getElementById("ox-feedback").textContent =
        `아쉬워요. 정답은 ${q.answer ? "O" : "X"}예요.\n` + explanationText(lang, q.item);
    }
    document.querySelectorAll(".ox-btn").forEach((b) => { b.disabled = true; });

    setTimeout(() => {
      this.idx++;
      if (this.idx < this.questions.length) {
        this.renderQuestion();
      } else {
        this.finish();
      }
    }, correct ? 900 : 2200);
  },

  finish() {
    document.getElementById("ox-score").textContent = `점수: ${this.score}점`;
    if (this.score >= 6) {
      QuizEngine.totalScore += this.score;
      Nav.show("quiz-mc-view");
      QuizMC.start();
    } else {
      QuizEngine.showRetry({
        title: "2단계 통과 실패",
        desc: `이번 점수는 ${this.score}점이에요. 6점 이상 맞히면 3단계로 넘어갈 수 있어요. 새 문제로 다시 도전해요!`,
        retry: () => { Nav.show("quiz-ox-view"); this.start(); }
      });
    }
  }
};

// ============================================================
// 3단계: 5지선다
// ============================================================
const QuizMC = {
  questions: [],
  idx: 0,
  score: 0,

  start() {
    this.questions = buildMCQuestionsML(QuizEngine.lang, 10);
    this.idx = 0;
    this.score = 0;
    document.querySelector("#quiz-mc-view .quiz-stage-label").textContent =
      `3단계 · 5지선다 (${QUIZ_LANGS[QuizEngine.lang].label})`;
    this.renderQuestion();
  },

  renderQuestion() {
    const q = this.questions[this.idx];
    document.getElementById("mc-progress").textContent = `${this.idx + 1} / ${this.questions.length}문항`;
    document.getElementById("mc-score").textContent = `점수: ${this.score}점`;
    document.getElementById("mc-question").textContent = q.prompt;
    document.getElementById("mc-feedback").textContent = "";

    const wrap = document.getElementById("mc-options");
    wrap.innerHTML = "";
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mc-option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", () => this.answer(opt, btn));
      wrap.appendChild(btn);
    });
  },

  answer(opt, btnEl) {
    const q = this.questions[this.idx];
    const correct = opt === q.answer;
    if (correct) this.score += 2;

    document.querySelectorAll(".mc-option-btn").forEach((b) => {
      b.disabled = true;
      if (b.textContent === q.answer) b.classList.add("correct");
    });
    if (!correct) btnEl.classList.add("incorrect");

    if (correct) {
      document.getElementById("mc-feedback").textContent = "정답이에요! 🎉";
    } else {
      const lang = QuizEngine.lang;
      document.getElementById("mc-feedback").textContent =
        `아쉬워요.\n` + explanationText(lang, q.item);
    }

    setTimeout(() => {
      this.idx++;
      if (this.idx < this.questions.length) {
        this.renderQuestion();
      } else {
        this.finish();
      }
    }, correct ? 1000 : 2400);
  },

  finish() {
    document.getElementById("mc-score").textContent = `점수: ${this.score}점`;
    if (this.score >= 12) {
      QuizEngine.totalScore += this.score;
      Nav.show("quiz-initials-view");
      QuizInitials.start();
    } else {
      QuizEngine.showRetry({
        title: "3단계 통과 실패",
        desc: `이번 점수는 ${this.score}점이에요. 12점 이상 맞히면 4단계로 넘어갈 수 있어요. 새 문제로 다시 도전해요!`,
        retry: () => { Nav.show("quiz-mc-view"); this.start(); }
      });
    }
  }
};

// ============================================================
// 4단계: 초성 퀴즈(주관식)
// ============================================================
const QuizInitials = {
  questions: [],
  idx: 0,
  score: 0,

  start() {
    this.questions = buildInitialsQuestionsML(QuizEngine.lang, 10);
    this.idx = 0;
    this.score = 0;
    document.querySelector("#quiz-initials-view .quiz-stage-label").textContent =
      `4단계 · 초성 퀴즈 (${QUIZ_LANGS[QuizEngine.lang].label})`;
    this.renderQuestion();
  },

  renderQuestion() {
    const q = this.questions[this.idx];
    document.getElementById("init-progress").textContent = `${this.idx + 1} / ${this.questions.length}문항`;
    document.getElementById("init-score").textContent = `점수: ${this.score}점`;
    document.getElementById("init-question").textContent = q.text;
    document.getElementById("init-hint").textContent = q.initials;
    document.getElementById("init-feedback").textContent = "";

    const input = document.getElementById("init-input");
    input.value = "";
    input.disabled = false;
    document.querySelector(".init-submit-btn").disabled = false;
    input.focus();
  },

  submit() {
    const input = document.getElementById("init-input");
    const q = this.questions[this.idx];
    const correct = normalizeAnswer(input.value) === normalizeAnswer(q.answer);
    if (correct) this.score += 3;

    if (correct) {
      document.getElementById("init-feedback").textContent = "정답이에요! 🎉";
    } else {
      const lang = QuizEngine.lang;
      document.getElementById("init-feedback").textContent =
        `아쉬워요. 정답은 "${q.answer}"예요.\n` + explanationText(lang, q.item);
    }
    input.disabled = true;
    document.querySelector(".init-submit-btn").disabled = true;

    setTimeout(() => {
      this.idx++;
      if (this.idx < this.questions.length) {
        this.renderQuestion();
      } else {
        this.finish();
      }
    }, correct ? 1200 : 2600);
  },

  finish() {
    document.getElementById("init-score").textContent = `점수: ${this.score}점`;
    if (this.score >= 18) {
      QuizEngine.totalScore += this.score;
      QuizHOF.start(QuizEngine.totalScore);
    } else {
      QuizEngine.showRetry({
        title: "4단계 통과 실패",
        desc: `이번 점수는 ${this.score}점이에요. 18점 이상 맞히면 명예의 전당에 오를 수 있어요. 새 문제로 다시 도전해요!`,
        retry: () => { Nav.show("quiz-initials-view"); this.start(); }
      });
    }
  }
};

// ============================================================
// 명예의 전당 (localStorage 기반 — 같은 브라우저에서만 순위 공유)
// ============================================================
const QuizHOF = {
  STORAGE_KEY: "vocabQuizHOF",
  score: 0,

  start(score) {
    this.score = score;
    document.getElementById("hof-total-score").textContent = score;
    document.getElementById("hof-list").hidden = true;
    document.getElementById("hof-name-form").hidden = false;
    document.getElementById("hof-name-input").value = "";
    Nav.show("quiz-hof-view");
  },

  loadList() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  },

  submitName() {
    const nameInput = document.getElementById("hof-name-input");
    const name = nameInput.value.trim() || "이름없음";
    const list = this.loadList();
    const entry = { name, score: this.score, ts: Date.now() };
    list.push(entry);
    list.sort((a, b) => b.score - a.score || a.ts - b.ts);
    const trimmed = list.slice(0, 20);

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(trimmed));
    } catch (e) {
      // localStorage 사용 불가 환경(예: 일부 임베드 뷰) — 명단 저장 없이 결과만 보여준다
    }

    this.renderList(trimmed, entry);
  },

  renderList(list, myEntry) {
    document.getElementById("hof-name-form").hidden = true;
    const ol = document.getElementById("hof-list");
    ol.hidden = false;
    ol.innerHTML = "";

    list.forEach((item, i) => {
      const li = document.createElement("li");
      const isMe = item === myEntry || (item.ts === myEntry.ts && item.name === myEntry.name);
      li.className = "hof-item" + (isMe ? " hof-item--me" : "");
      li.innerHTML = `
        <span class="hof-rank">${i + 1}위</span>
        <span class="hof-name">${escapeHtml(item.name)}</span>
        <span class="hof-points">${item.score}점</span>`;
      ol.appendChild(li);
    });
  }
};

// ============================================================
// 초기 이벤트 바인딩
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ox-btn").forEach((btn) => {
    btn.addEventListener("click", () => QuizOX.answer(btn.dataset.value === "true"));
  });

  document.getElementById("init-form").addEventListener("submit", (e) => {
    e.preventDefault();
    QuizInitials.submit();
  });

  document.getElementById("retry-btn").addEventListener("click", () => {
    if (QuizEngine.currentRetry) QuizEngine.currentRetry();
  });

  document.getElementById("hof-name-submit").addEventListener("click", () => {
    QuizHOF.submitName();
  });
});
