let hover = document.getElementById("hov");

hover.addEventListener("mouseover", mouseOver);
hover.addEventListener("mouseout", mouseOut);

function mouseOver() {
  hover.style.backgroundColor = "red";
  hover.style.transition = "all 0.3s ease";
  hover.innerHTML = "Nice hover!";
  hover.style.scale = "1.2";
}
function mouseOut() {
  hover.style.backgroundColor = "blue";
  hover.innerHTML = "";
  hover.style.scale = "0.5";
}
