let count = document.getElementById("wacht");

count.addEventListener("input", updateCount);

function updateCount() {
  document.getElementById("aantal").innerText = count.value.length;
  document.getElementById("aantal1").innerText = count.value.length;
  if (count.value.length < 6) {
    document.getElementById("aantal").style.color = "red";
    document.getElementById("aantal").innerText += " (Wachtwoord te kort)";
  } else if (count.value.length >= 6) {
    document.getElementById("aantal").style.color = "green";
    document.getElementById("aantal").innerText += " (Sterk wachtwoord!)";
  }
}
