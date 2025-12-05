let keuze = prompt("Kies een optie: Cola, Water of Koffie");
if (keuze === "cola") {
  document.getElementById("keuze").innerHTML = "Je krijgt een blikje cola 🥤";
  document.getElementById("keuze").style.color = "red";
}
else if (keuze === "water") {
  document.getElementById("keuze").innerHTML = "Goed bezig, lekker gezond 💧";
  document.getElementById("keuze").style.color = "blue";
}
 else if (keuze === "koffie") {
  document.getElementById("keuze").innerHTML = "Energie incoming ☕";
  document.getElementById("keuze").style.color = "brown";
} else {
    document.getElementById("keuze").innerHTML = "Dat drankje is helaas op";
}