let emoji = ["😀", "😂", "😍", "🤔", "😎"];
let index = 0;

function toon() {
  document.getElementById("emo").innerHTML = emoji[index];
  index = (index + 1) % emoji.length;
}

setInterval(toon, 100);