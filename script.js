const questions = [
  {
    q: "ما الفرق بين القيم لغةً واصطلاحًا؟",
    a: `<strong>لغةً:</strong> جمع قيمة، وتعني الثمن أو القدر.<br><strong>اصطلاحًا:</strong> مبادئ ومعايير تحدد سلوك الإنسان وتوجه تصرفاته.`,
  },
  {
    q: "ما أنواع القيم في الإسلام؟",
    a: `قيم دينية، وأخلاقية، واجتماعية، وإنسانية، واقتصادية.`,
  },
  {
    q: "هل المساواة دائمًا تحقق العدل؟",
    a: `لا، لأن العدل هو إعطاء كل ذي حق حقه، وقد تختلف الحقوق حسب الظروف.`,
  },
  {
    q: "ما المقصود بالاستخلاف في الأرض؟",
    a: `أن الله جعل الإنسان خليفة في الأرض لعمارتها وإصلاحها وفق أوامره.`,
  },
  {
    q: "ما أهمية المسؤولية في الإسلام؟",
    a: `تحفظ الحقوق، وتنظم الحياة، وتجعل الإنسان مسؤولًا عن أفعاله.`,
  },
  {
    q: "ما الفرق بين الأمانة والوفاء؟",
    a: `<strong>الأمانة:</strong> حفظ الحقوق وأداء الواجبات.<br><strong>الوفاء:</strong> الالتزام بالعهود والوعود.`,
  },
  {
    q: "ما أثر القيم الإسلامية على الفرد والمجتمع؟",
    a: `تصلح الفرد، وتهذب الأخلاق، وتنشر المحبة والتعاون، وتحافظ على استقرار المجتمع.`,
  },
];

const home = document.getElementById("home");
const chat = document.getElementById("chat");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const questionsEl = document.getElementById("questions");

function renderQuestions() {
  questionsEl.innerHTML = "";
  questions.forEach((item, index) => {
    const card = document.createElement("button");
    card.className = "question-card";
    card.type = "button";
    card.innerHTML = `<span class="q-icon">💬</span>${item.q}`;

    card.addEventListener("click", () => {
      const existing = card.nextElementSibling;
      if (existing && existing.classList.contains("answer-wrap")) {
        existing.remove();
        card.setAttribute("aria-expanded", "false");
        return;
      }

      const answerWrap = document.createElement("div");
      answerWrap.className = "answer-wrap";
      answerWrap.innerHTML = `
        <div class="mini-avatar"><img src="robot.png" alt=""></div>
        <div class="answer">
          <div>${item.a}</div>
        </div>
      `;
      card.after(answerWrap);
      card.setAttribute("aria-expanded", "true");
      setTimeout(() => answerWrap.scrollIntoView({ behavior: "smooth", block: "nearest" }), 80);
    });

    card.setAttribute("aria-expanded", "false");
    questionsEl.appendChild(card);
  });
}

startBtn.addEventListener("click", () => {
  home.classList.add("hidden");
  chat.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

backBtn.addEventListener("click", () => {
  chat.classList.add("hidden");
  home.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderQuestions();
