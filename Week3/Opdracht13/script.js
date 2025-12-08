let leef = prompt("Wat is je leeftijd?");
if (leef < 18) {
  document.getElementById("leef").innerHTML =
    "Je mag hier nog niet naar binnen.";
  document.getElementById("leef").style.color = "red";
}
if (leef >= 18) {
  document.getElementById("leef").style.color = "green";
}
if (leef >= 18 && leef <= 65) {
  document.getElementById("leef").innerHTML = "Welkom, volwassen bezoeker!";
}
if ((leef) >= 65) {
  document.getElementById("leef").innerHTML = "Welkom, senior bezoeker!";
}
