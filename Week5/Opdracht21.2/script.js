let snacks = [];

function begroet() {
  let naam = document.getElementById("Snack").value;

  if (naam === "") {
    alert("Voeg eerst een snack toe!");
  } else {
    snacks.push(naam);
    toonSnacks();
    document.getElementById("Snack").value = "";
  }
}

function toonSnacks() {
  let resultaat = document.getElementById("resultaat");
  resultaat.innerHTML = "";

  snacks.forEach(function (snack) {
    resultaat.innerHTML += "<li>" + snack + "</li>";
  });

  document.getElementById("totaal").innerHTML =
    "Totaal aantal snacks: " + snacks.length;
}

function verwijderLaatste() {
  if (snacks.length > 0) {
    snacks.pop();
    toonSnacks();
  } else {
    alert("Er zijn geen snacks om te verwijderen!");
  }
}

document.getElementById("knop").addEventListener("click", begroet);
document
  .getElementById("verwijderKnop")
  .addEventListener("click", verwijderLaatste);
