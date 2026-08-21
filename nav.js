// ============================================================
// 화면 전환(라우팅) 공용 모듈
// ============================================================

const Nav = {
  screens: [],
  init() {
    this.screens = [...document.querySelectorAll(".screen")];
  },
  show(id) {
    this.screens.forEach((s) => { s.hidden = s.id !== id; });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Nav.init();

  document.getElementById("home-learn-btn").addEventListener("click", () => {
    Nav.show("grid-view");
  });

  document.getElementById("home-quiz-btn").addEventListener("click", () => {
    Nav.show("quiz-lang-view");
    QuizLang.render();
  });

  document.getElementById("grid-home-btn").addEventListener("click", () => {
    Nav.show("home-view");
  });

  document.querySelectorAll(".quiz-home-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      QuizEngine.stopAllTimersAndAudio();
      Nav.show("home-view");
    });
  });
});
