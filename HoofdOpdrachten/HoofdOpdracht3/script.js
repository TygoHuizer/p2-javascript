const answers = [
  { text: "Ja, absoluut!", waarde: 1 },
  { text: "Zeker weten!", waarde: 1 },
  { text: "Alle tekenen wijzen op ja", waarde: 1 },
  { text: "Het ziet er goed uit", waarde: 1 },
  { text: "Nee, absoluut niet", waarde: 3 },
  { text: "Ik denk het niet", waarde: 3 },
  { text: "Zeer twijfelachtig", waarde: 3 },
  { text: "Beter van niet", waarde: 3 },
  { text: "Misschien", waarde: 2 },
  { text: "Vraag het later nog eens", waarde: 2 },
  { text: "Kan ik nu niet zeggen", waarde: 2 },
  { text: "Concentreer je en vraag opnieuw", waarde: 2 },
];

let lastAnswer = null;

function getAnswer() {
  const input = document.getElementById("questionInput");
  const question = input.value.trim();
  
  if (!question) {
    document.getElementById("warning").textContent = "⚠️ Vul eerst een vraag in!";
    return;
  }

  document.getElementById("warning").textContent = "";

  let answer = answers[Math.floor(Math.random() * answers.length)];
  while (answer === lastAnswer && answers.length > 1) {
    answer = answers[Math.floor(Math.random() * answers.length)];
  }
  lastAnswer = answer;

  document.getElementById("displayQuestion").textContent = question;
  const display = document.getElementById("displayAnswer");
  display.textContent = answer.text;
  
  let toneClass = "";
  if (answer.waarde === 1) {
    toneClass = "positive";
  } else if (answer.waarde === 2) {
    toneClass = "neutral";
  } else if (answer.waarde === 3) {
    toneClass = "negative";
  }
  
  display.className = "answer-display " + toneClass;

  switchScreen("answerScreen");
}

function askAgain() {
  document.getElementById("questionInput").value = "";
  document.getElementById("warning").textContent = "";
  switchScreen("inputScreen");
}

function switchScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}