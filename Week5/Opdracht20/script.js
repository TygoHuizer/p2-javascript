let emojis = ["😀", "😂", "😍", "🤔", "😎"];

let button = document.getElementById("emojibtn");
let showemoji = document.getElementById("showEmoji");
let showIndexNumber = document.getElementById("showIndexNumber");

button.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * emojis.length);
    showemoji.innerHTML = emojis[randomIndex];
    showIndexNumber.innerHTML = "Ik ben index: " +randomIndex;
})