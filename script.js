const steps = [
  {
    talk: "Bem-vindo! Eu sou o Fazendeiro João. Neste passeio você vai aprender como produzir alimentos de forma forte e sustentável.",
    question: "Qual é a ideia central do tema deste site?",
    options: [
      "Produzir mais sem se preocupar com o ambiente",
      "Equilibrar produção e meio ambiente",
      "Parar toda produção agrícola"
    ],
    correct: 1,
    feedback: "Isso mesmo! Produção e preservação precisam caminhar juntas."
  },
  {
    talk: "Primeiro passo: solo saudável. Sem cuidar do solo, a produtividade cai e o impacto ambiental cresce.",
    question: "Qual prática ajuda a proteger o solo?",
    options: [
      "Deixar o solo sempre exposto",
      "Rotação de culturas e cobertura do solo",
      "Usar água em excesso"
    ],
    correct: 1,
    feedback: "Perfeito! Cobertura e rotação preservam nutrientes e evitam erosão."
  },
  {
    talk: "Agora vamos para a água: cada gota conta. Irrigação inteligente evita desperdícios e reduz custos.",
    question: "Qual estratégia economiza água no campo?",
    options: [
      "Irrigar no horário mais quente",
      "Usar sensores e irrigação por necessidade",
      "Aplicar sempre o mesmo volume"
    ],
    correct: 1,
    feedback: "Exato! Dados e planejamento tornam a irrigação eficiente."
  },
  {
    talk: "A biodiversidade também fortalece o agro. Polinizadores e áreas de vegetação ajudam no equilíbrio ecológico.",
    question: "Por que preservar áreas de vegetação nativa?",
    options: [
      "Porque atrapalham a produção",
      "Porque aumentam pragas apenas",
      "Porque ajudam a manter o equilíbrio ecológico"
    ],
    correct: 2,
    feedback: "Correto! A vegetação nativa protege a biodiversidade e serviços ambientais."
  },
  {
    talk: "Último passo: inovação e compromisso social. Sustentabilidade também envolve pessoas, renda e futuro das comunidades.",
    question: "O agro sustentável depende de quê?",
    options: [
      "Tecnologia, boas práticas e inclusão das pessoas",
      "Somente aumento de máquinas",
      "Apenas reduzir custos imediatos"
    ],
    correct: 0,
    feedback: "Excelente! O futuro sustentável é técnico, ambiental e humano."
  }
];

const dialogueText = document.getElementById("dialogueText");
const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const contentGrid = document.getElementById("contentGrid");
const tourProgress = document.getElementById("tourProgress");
const progressText = document.getElementById("progressText");

let currentStep = 0;
let answered = false;

function renderStep() {
  const step = steps[currentStep];
  dialogueText.textContent = step.talk;
  questionText.textContent = step.question;
  answersBox.innerHTML = "";
  feedback.textContent = "";
  nextBtn.disabled = true;
  answered = false;

  step.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(index, button));
    answersBox.appendChild(button);
  });

  const progressValue = Math.round((currentStep / steps.length) * 100);
  tourProgress.value = progressValue;
  progressText.textContent = `${progressValue}%`;
}

function handleAnswer(index, button) {
  if (answered) return;
  answered = true;

  const step = steps[currentStep];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, btnIndex) => {
    btn.disabled = true;
    if (btnIndex === step.correct) btn.classList.add("correct");
  });

  if (index === step.correct) {
    feedback.textContent = `✅ ${step.feedback}`;
    feedback.style.color = "var(--ok)";
  } else {
    button.classList.add("wrong");
    feedback.textContent = "❌ Não foi dessa vez. Revise a explicação e avance!";
    feedback.style.color = "var(--danger)";
  }

  nextBtn.disabled = false;
}

function unlockFreeNavigation() {
  dialogueText.textContent = "Parabéns! Você concluiu todo o passeio guiado. A navegação livre foi desbloqueada.";
  questionText.textContent = "✅ Missão concluída! Explore os cards livremente e revise o conteúdo.";
  answersBox.innerHTML = "";
  feedback.textContent = "Você agora pode navegar por conta própria.";
  nextBtn.style.display = "none";
  contentGrid.classList.remove("locked");
  contentGrid.setAttribute("aria-disabled", "false");
  tourProgress.value = 100;
  progressText.textContent = "100%";
}

nextBtn.addEventListener("click", () => {
  currentStep += 1;
  if (currentStep >= steps.length) {
    unlockFreeNavigation();
    return;
  }
  renderStep();
});

renderStep();
