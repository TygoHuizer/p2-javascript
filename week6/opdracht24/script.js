let progress = 0;
const loadingBar = document.getElementById("loadingBar");
const percentageText = document.getElementById("percentage");
const emojiElement = document.getElementById("emoji");
const messageElement = document.getElementById("message");

function updateLoadingBar() {
  progress += 10;

  loadingBar.style.width = progress + "%";

  percentageText.textContent = `Loading... ${progress}%`;

  if (progress <= 30) {
    loadingBar.style.background = "red";
  } else if (progress <= 60) {
    loadingBar.style.background = "orange";
  } else if (progress < 100) {
    loadingBar.style.background = "blue";
  } else {
    loadingBar.style.background = "green";
  }

  if (progress <= 30) {
    emojiElement.textContent = "🐢";
  } else if (progress <= 60) {
    emojiElement.textContent = "🚶‍♂️";
  } else if (progress < 100) {
    emojiElement.textContent = "🏃‍♂️";
  } else {
    emojiElement.textContent = "🥇";
  }

  if (progress >= 100) {
    clearInterval(loadingInterval);
    percentageText.textContent = "100%";
    messageElement.textContent = "Loading complete!";
  }
}

const loadingInterval = setInterval(updateLoadingBar, 500);
