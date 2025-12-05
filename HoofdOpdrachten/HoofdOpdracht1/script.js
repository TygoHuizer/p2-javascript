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
