const answers = [
  { text: "Ja, absoluut!", tone: "positive" },
  { text: "Zeker weten!", tone: "positive" },
  { text: "Alle tekenen wijzen op ja", tone: "positive" },
  { text: "Het ziet er goed uit", tone: "positive" },
  { text: "Nee, absoluut niet", tone: "negative" },
  { text: "Ik denk het niet", tone: "negative" },
  { text: "Zeer twijfelachtig", tone: "negative" },
  { text: "Beter van niet", tone: "negative" },
  { text: "Misschien", tone: "neutral" },
  { text: "Vraag het later nog eens", tone: "neutral" },
  { text: "Kan ik nu niet zeggen", tone: "neutral" },
  { text: "Concentreer je en vraag opnieuw", tone: "neutral" },
];

let lastAnswer = null;

function getAnswer() {
  const question = document.getElementById("questionInput").value.trim();
  const warning = document.getElementById("warning");

  // Validatie: check of vraag is ingevuld
  if (question === "") {
    warning.textContent = "⚠️ Vul eerst een vraag in!";
    return;
  }

  warning.textContent = "";

  // Kies willekeurig antwoord (maar niet hetzelfde als vorige)
  let randomAnswer;
  do {
    randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  } while (randomAnswer === lastAnswer && answers.length > 1);

  lastAnswer = randomAnswer;

  // Toon vraag en antwoord op antwoord scherm
  document.getElementById("displayQuestion").textContent = question;
  const answerElement = document.getElementById("displayAnswer");
  answerElement.textContent = randomAnswer.text;

  // Verwijder oude tone classes
  answerElement.className = "answer-display";
  // Voeg nieuwe tone class toe
  answerElement.classList.add(randomAnswer.tone);

  // Wissel van scherm
  switchScreen("answerScreen");
}

function askAgain() {
  // Leeg input veld
  document.getElementById("questionInput").value = "";
  document.getElementById("warning").textContent = "";

  // Ga terug naar input scherm
  switchScreen("inputScreen");
}

function switchScreen(screenId) {
  // Verwijder active class van alle schermen
  const screens = document.querySelectorAll(".screen");
  screens.forEach((screen) => screen.classList.remove("active"));

  // Voeg active class toe aan gewenste scherm
  document.getElementById(screenId).classList.add("active");
}