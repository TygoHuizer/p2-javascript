let budget = 100;
let product = prompt("Wat is de prijs van het product?");
if (budget >= product) {
  document.getElementById("geld").innerHTML = "U heeft genoeg geld!";
  document.getElementById("geld").style.color = "green";
} else {
  document.getElementById("geld").style.color = "red";
  document.getElementById("geld").innerHTML = "Helaas, te weinig geld";
}
