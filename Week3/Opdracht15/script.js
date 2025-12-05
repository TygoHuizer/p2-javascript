let teller = "0";

function update() {
  if (teller >= 5) {
    document.getElementById("veel").innerHTML = "Pauze? Water is ook lekker ";
    document.getElementById("teller").style.color = "red";
  } else if (teller >= 3) {
    document.getElementById("veel").innerHTML = "Dat zijn er best veel… ";
    document.getElementById("teller").style.color = "orange";
  } else {
    document.getElementById("veel").innerHTML = "";
    document.getElementById("teller").style.color = "green";
  }
}

function plus() {
  teller++;
  document.getElementById("teller").innerText = teller;
  update();
}
function reset() {
  teller = 0;
  document.getElementById("teller").innerText = teller;
  document.getElementById("veel").innerHTML = "";
  update();
}
function min() {
  if (teller > 0) {
    teller--;
    document.getElementById("teller").innerText = teller;
  }
  update();
}
 x