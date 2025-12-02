function Kleur_aanpassen() {
  document.getElementById("leeftijd").style.color = "red";
}


let leeftijd = prompt("In welk jaar bent u geboren?");
let getal = 2025 - leeftijd;
let leeftijdTekst = "Uw leeftijd is " + getal + " jaar.";
document.getElementById("leeftijd").innerText = leeftijdTekst;
console.log(("leeftijd".innerText = leeftijdTekst));
