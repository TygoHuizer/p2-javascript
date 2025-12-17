let pizza = 0;

function update() {
  if (pizza >= 20) {
    document.getElementById("groet").innerHTML = "🍕🍕🍕🍕 Pizza King 🍕🍕🍕🍕";
    document.getElementById("winOverlay").classList.add("show");
    document.getElementById("pizza").style.color = "darkgreen";
  } else if (pizza >= 15) {
    document.getElementById("groet").innerHTML = "🍕🍕🍕 Pizza Master 🍕🍕🍕";
    document.getElementById("pizza").style.color = "green";
  } else if (pizza >= 10) {
    document.getElementById("groet").innerHTML = "🍕🍕 Pizza Lover 🍕🍕";
    document.getElementById("pizza").style.color = "yellow";
  } else if (pizza >= 5) {
    document.getElementById("groet").innerHTML = "🍕 Pizza Fan 🍕";
    document.getElementById("pizza").style.color = "orange";
  } else {
    document.getElementById("groet").innerHTML = "";
    document.getElementById("pizza").style.color = "red";
  }
}
function plus() {
  pizza++;
  document.getElementById("pizza").innerText = pizza;
  update();
}
function minus() {
  if (pizza > 0) {
    pizza--;
    document.getElementById("pizza").innerText = pizza;
    document.getElementById("pizza").style.color = "red";
    update();
  }
}

function reset() {
  pizza = 0;
  document.getElementById("pizza").innerText = pizza;
  document.getElementById("groet").innerHTML = "";
}
function playAgain() {
  pizza = 0;
  document.getElementById("pizza").innerText = pizza;
  document.getElementById("groet").innerHTML = "";
  document.getElementById("winOverlay").classList.remove("show");
}

function morning() {
  document.getElementById("groet").innerHTML = "🌞🌞🌞";
  document.body.classList.remove("nacht");
  document.body.classList.add("dag");
}
function evening() {
  document.getElementById("groet").innerHTML = "🦇🦇🦇";
  document.body.classList.remove("dag");
  document.body.classList.add("nacht");
}
