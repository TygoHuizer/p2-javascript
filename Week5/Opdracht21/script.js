function begroet() {
  let naam = document.getElementById("naamVak").value;
  
  // Check: is de input leeg?
  if (naam === "") {
    alert("Typ eerst je naam!");
  } else {
    let resultaat = document.getElementById("resultaat");
    resultaat.innerHTML = "Hallo " + naam + "!";
    document.getElementById("naamVak").value = "";
  }
}
document.getElementById("knop").addEventListener("click", begroet);