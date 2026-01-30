function openModal() {
  document.getElementById("modal").style.display = "block";
}

function verifyAge() {
  const age = parseInt(document.getElementById("ageInput").value);

  if (age >= 18) {
    // Redirect naar een website
    window.location.href = "https://www.youtube.com";
  } else {
    // Toon rode waarschuwingspagina
    document.getElementById("modal").style.display = "none";
    document.getElementById("warningPage").style.display = "flex";
  }
}