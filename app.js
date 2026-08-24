// ============================================================
// 사회과 다국어 어휘 학습 사이트 — 동작 로직
// ============================================================

const FLAG_SVG = {
  en: `<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="24" height="16" fill="#B31942"/>
        <g fill="#FFFFFF">
          <rect y="1.23" width="24" height="1.23"/>
          <rect y="3.69" width="24" height="1.23"/>
          <rect y="6.15" width="24" height="1.23"/>
          <rect y="8.62" width="24" height="1.23"/>
          <rect y="11.08" width="24" height="1.23"/>
          <rect y="13.54" width="24" height="1.23"/>
        </g>
        <rect width="10.2" height="8.62" fill="#0A3161"/>
      </svg>`,
  ru: `<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="24" height="16" fill="#FFFFFF"/>
        <rect y="5.33" width="24" height="5.33" fill="#0039A6"/>
        <rect y="10.66" width="24" height="5.34" fill="#D52B1E"/>
      </svg>`,
  zh: `<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="24" height="16" fill="#DE2910"/>
        <g fill="#FFDE00">
          <polygon points="3,2 3.6,3.9 5.6,3.9 4,5.1 4.6,7 3,5.8 1.4,7 2,5.1 0.4,3.9 2.4,3.9"/>
          <polygon points="8.2,1.2 8.5,2.1 9.4,2.1 8.7,2.6 9,3.5 8.2,2.9 7.4,3.5 7.7,2.6 7,2.1 7.9,2.1"/>
          <polygon points="10.4,3.6 10.7,4.5 11.6,4.5 10.9,5 11.2,5.9 10.4,5.3 9.6,5.9 9.9,5 9.2,4.5 10.1,4.5"/>
          <polygon points="10.4,7 10.7,7.9 11.6,7.9 10.9,8.4 11.2,9.3 10.4,8.7 9.6,9.3 9.9,8.4 9.2,7.9 10.1,7.9"/>
          <polygon points="8.2,9.6 8.5,10.5 9.4,10.5 8.7,11 9,11.9 8.2,11.3 7.4,11.9 7.7,11 7,10.5 7.9,10.5"/>
        </g>
      </svg>`
};

const REPLAY_ICON = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M11 5L6 9H3v6h3l5 4V5z" fill="currentColor"/>
  <path d="M15.5 9a4.5 4.5 0 010 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M18 6.5a8 8 0 010 11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
</svg>`;

const state = {
  currentItem: null,
  currentLang: "ko",
  audio: null,
  koFinished: false
};

const els = {};

function qs(sel) { return document.querySelector(sel); }

function init() {
  els.gridView = qs("#grid-view");
  els.detailView = qs("#detail-view");
  els.vocabGrid = qs("#vocab-grid");
  els.backBtn = qs("#back-btn");
  els.flagsRow = qs("#flags-row");
  els.wordLangLabel = qs("#word-lang-label");
  els.wordText = qs("#word-text");
  els.replayBtn = qs("#replay-btn");
  els.detailImage = qs("#detail-image");
  els.noteText = qs("#note-text");
  els.statusLine = qs("#status-line");

  buildGrid();
  buildFlags();

  els.backBtn.addEventListener("click", showGrid);
  els.replayBtn.addEventListener("click", () => playAudio(state.currentItem, state.currentLang));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !els.detailView.hidden) showGrid();
  });
}

function buildGrid() {
  els.vocabGrid.innerHTML = "";
  VOCAB.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "vocab-tile";
    btn.textContent = item.ko.word;
    btn.setAttribute("aria-label", `${item.ko.word} 학습하기`);
    btn.addEventListener("click", () => openDetail(item));
    els.vocabGrid.appendChild(btn);
  });
}

function buildFlags() {
  els.flagsRow.innerHTML = "";
  Object.keys(LANGS).forEach((code) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "flag-btn";
    btn.dataset.lang = code;
    btn.title = LANGS[code].label;
    btn.setAttribute("aria-label", LANGS[code].label);
    btn.innerHTML = FLAG_SVG[code];
    btn.addEventListener("click", () => selectLanguage(code));
    els.flagsRow.appendChild(btn);
  });
}

function openDetail(item) {
  state.currentItem = item;
  state.currentLang = "ko";
  state.koFinished = false;

  Nav.show("detail-view");
  els.flagsRow.classList.remove("visible");
  els.statusLine.textContent = "";

  const imageWrap = document.querySelector(".image-frame-wrap");
  if (item.hasMedia && item.image) {
    imageWrap.hidden = false;
    els.detailImage.src = item.image;
    els.detailImage.alt = `${item.ko.word} 의미를 나타내는 이미지`;
  } else {
    imageWrap.hidden = true;
  }

  els.replayBtn.hidden = !item.hasMedia;

  renderLangContent("ko");

  if (item.hasMedia) {
    playAudio(item, "ko");
  } else {
    // 음성・이미지 자료가 없는 어휘는 바로 다국어 국기를 보여준다
    state.koFinished = true;
    els.flagsRow.classList.add("visible");
    els.statusLine.textContent = "오른쪽 위 국기를 눌러 다른 언어 설명도 읽어보세요.";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showGrid() {
  stopAudio();
  Nav.show("grid-view");
}

function renderLangContent(langCode) {
  const item = state.currentItem;
  const data = item[langCode];
  state.currentLang = langCode;

  els.wordLangLabel.textContent = langCode === "ko" ? "한국어" : LANGS[langCode].label;
  els.wordText.textContent = data.word;
  els.noteText.textContent = data.desc;

  [...els.flagsRow.children].forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === langCode);
  });
}

function selectLanguage(langCode) {
  if (!state.koFinished) return; // 한국어 설명이 끝난 뒤 다국어 선택 가능
  renderLangContent(langCode);
  if (state.currentItem.hasMedia) {
    playAudio(state.currentItem, langCode);
  }
}

function audioPath(item, langCode) {
  return `${item.slug}_${langCode}.mp4`;
}

function stopAudio() {
  if (state.audio) {
    state.audio.pause();
    state.audio.currentTime = 0;
  }
  els.replayBtn.classList.remove("playing");
}

function playAudio(item, langCode) {
  stopAudio();

  const audio = new Audio(audioPath(item, langCode));
  state.audio = audio;

  els.replayBtn.classList.add("playing");
  els.statusLine.textContent = langCode === "ko" ? "한국어 설명을 듣고 있어요…" : "듣는 중…";

  audio.addEventListener("ended", () => {
    els.replayBtn.classList.remove("playing");
    if (langCode === "ko" && !state.koFinished) {
      state.koFinished = true;
      els.flagsRow.classList.add("visible");
      els.statusLine.textContent = "오른쪽 위 국기를 눌러 다른 언어로도 들어보세요.";
    } else {
      els.statusLine.textContent = "";
    }
  });

  audio.addEventListener("error", () => {
    els.replayBtn.classList.remove("playing");
    els.statusLine.textContent = "음성 파일을 재생할 수 없습니다.";
  });

  audio.play().catch(() => {
    // autoplay가 차단된 경우 재생 버튼으로 유도
    els.replayBtn.classList.remove("playing");
    els.statusLine.textContent = "▶ 버튼을 눌러 설명을 들어보세요.";
  });
}

els.replayBtnIconReady = false;

document.addEventListener("DOMContentLoaded", () => {
  init();
  qs("#replay-btn").innerHTML = REPLAY_ICON;
});
