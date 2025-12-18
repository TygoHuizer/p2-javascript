let knop = document.getElementById("Knop");
let clicked = false;
knop.addEventListener("click", klik);

function klik() {
  console.log("Je hebt op de knop geklikt!");
  if (clicked) {
    document.getElementById("Knop").innerText = "NOG EEN KEER???";
    document.getElementById("Knop").style.color = "pink";

    document.body.style.backgroundColor = "darkblue";

    clicked = false;
  } else {
    document.getElementById("Knop").innerText = "Nog een keer?";
    document.body.style.backgroundColor = "lightblue";
    document.getElementById("Knop").style.color = "red";
    clicked = true;
  }
}
