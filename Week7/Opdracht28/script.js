const broth = [
  { naam: "Tonkotsu", emoji: "🥛", rating: 5 },
  { naam: "Shoyu", emoji: "🍶", rating: 4 },
  { naam: "Miso", emoji: "🧈", rating: 4 },
  { naam: "Spicy Chicken", emoji: "🌶️", rating: 5 },
];

const noodles = [
  { naam: "Thick Ramen", emoji: "🍝", rating: 4 },
  { naam: "Thin Udon", emoji: "🥢", rating: 3 },
  { naam: "Wavy Egg Noodles", emoji: "🍜", rating: 5 },
  { naam: "Rice Noodles", emoji: "🍚", rating: 3 },
];

const toppings = [
  { naam: "Soft Boiled Egg", emoji: "🥚", rating: 5 },
  { naam: "Chashu Pork", emoji: "🥩", rating: 5 },
  { naam: "Bamboo Shoots", emoji: "🎋", rating: 3 },
  { naam: "Nori Seaweed", emoji: "🌿", rating: 4 },
  { naam: "Corn", emoji: "🌽", rating: 3 },
];

const spiceLevel = [
  { naam: "Mild", emoji: "😊", rating: 2 },
  { naam: "Medium", emoji: "🔥", rating: 4 },
  { naam: "Extra Spicy", emoji: "💀", rating: 5 },
  { naam: "No Spice", emoji: "❄️", rating: 1 },
];

let currentBowl = null;
let favorites = [];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function cookBowl() {
  const gekozenBroth = getRandomItem(broth);
  const gekozenNoodles = getRandomItem(noodles);
  const gekozenTopping = getRandomItem(toppings);
  const gekozenSpice = getRandomItem(spiceLevel);

  const totalScore =
    gekozenBroth.rating +
    gekozenNoodles.rating +
    gekozenTopping.rating +
    gekozenSpice.rating;

  currentBowl = {
    broth: gekozenBroth,
    noodles: gekozenNoodles,
    topping: gekozenTopping,
    spice: gekozenSpice,
    score: totalScore,
  };

  displayBowl(currentBowl, "result");
}

function displayBowl(bowl, elementId) {
  document.getElementById(elementId).innerHTML = `
    <div class="bowl">
      <h2>🍜 Jouw Ramen Bowl</h2>
      <p><strong>Broth:</strong> ${bowl.broth.emoji} ${bowl.broth.naam} (${bowl.broth.rating}⭐)</p>
      <p><strong>Noodles:</strong> ${bowl.noodles.emoji} ${bowl.noodles.naam} (${bowl.noodles.rating}⭐)</p>
      <p><strong>Topping:</strong> ${bowl.topping.emoji} ${bowl.topping.naam} (${bowl.topping.rating}⭐)</p>
      <p><strong>Spice Level:</strong> ${bowl.spice.emoji} ${bowl.spice.naam} (${bowl.spice.rating}⭐)</p>
      <div class="score">Total Ramen Score: ${bowl.score} ⭐</div>
      <button id="saveBtn" onclick="saveFavorite()">💾 Opslaan als favoriet</button>
    </div>
  `;
}

function chefSpecial() {
  let specialHTML = "<h2>👨‍🍳 Chef's Special - 5 Random Bowls</h2>";

  for (let i = 0; i < 5; i++) {
    const gekozenBroth = getRandomItem(broth);
    const gekozenNoodles = getRandomItem(noodles);
    const gekozenTopping = getRandomItem(toppings);
    const gekozenSpice = getRandomItem(spiceLevel);

    const totalScore =
      gekozenBroth.rating +
      gekozenNoodles.rating +
      gekozenTopping.rating +
      gekozenSpice.rating;

    specialHTML += `
      <div class="bowl">
        <h3>Bowl ${i + 1}</h3>
        <p>${gekozenBroth.emoji} ${gekozenBroth.naam} | ${gekozenNoodles.emoji} ${gekozenNoodles.naam} | ${gekozenTopping.emoji} ${gekozenTopping.naam} | ${gekozenSpice.emoji} ${gekozenSpice.naam}</p>
        <div class="score">Score: ${totalScore} ⭐</div>
      </div>
    `;
  }

  document.getElementById("result").innerHTML = specialHTML;
}

function saveFavorite() {
  if (currentBowl) {
    favorites.push(currentBowl);
    updateFavoritesList();
    alert("✅ Bowl opgeslagen als favoriet!");
  }
}

function updateFavoritesList() {
  let favoritesHTML = "";

  for (let i = 0; i < favorites.length; i++) {
    const fav = favorites[i];
    favoritesHTML += `
      <div style="background: #f0f0f0; padding: 10px; margin: 10px 0; border-radius: 5px;">
        <strong>Favoriet ${i + 1}:</strong> ${fav.broth.emoji} ${fav.broth.naam}, ${fav.noodles.emoji} ${fav.noodles.naam}, ${fav.topping.emoji} ${fav.topping.naam}, ${fav.spice.emoji} ${fav.spice.naam} (${fav.score}⭐)
      </div>
    `;
  }

  document.getElementById("favoritesList").innerHTML =
    favoritesHTML || "<p>Nog geen favorieten opgeslagen.</p>";
}