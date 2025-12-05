let pizza = 0;

function plus() {
  pizza++;
  document.getElementById("pizza").innerText = pizza;
}























function morning() {
  document.getElementById("groet").innerHTML = "Goodmorning!";
  document.body.classList.remove("nacht");
  document.body.classList.add("dag");
}
function evening() {
  document.getElementById("groet").innerHTML = "Goodevening!";
  document.body.classList.remove("dag");
  document.body.classList.add("nacht");
}
