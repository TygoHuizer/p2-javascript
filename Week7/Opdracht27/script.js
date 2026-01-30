const pokemon = [
  {
    naam: "Charizard",
    type: "vuur",
    powerlevel: 84,
    emoji: "🔥",
  },
  {
    naam: "Lopunny",
    type: "normaal",
    powerlevel: 76,
    emoji: "🐰",
  },
  {
    naam: "Gardevoir",
    type: "psychic",
    powerlevel: 79,
    emoji: "✨",
  },
];

function choosePokemon() {
  // Kies een willekeurige Pokémon
  const randomIndex = Math.floor(Math.random() * pokemon.length);
  const gekozenPokemon = pokemon[randomIndex];

  // Bepaal kleur op basis van type
  let kleur;
  if (gekozenPokemon.type === "vuur") {
    kleur = "#ff6b6b";
  } else if (gekozenPokemon.type === "water") {
    kleur = "#4ecdc4";
  } else if (gekozenPokemon.type === "psychic") {
    kleur = "#e84393";
  } else {
    kleur = "#a29bfe";
  }

  // Toon de Pokémon in een kaart
  document.getElementById("result").innerHTML = `
    <div class="pokemon-card" style="background-color: ${kleur}">
      <div class="pokemon-emoji">${gekozenPokemon.emoji}</div>
      <div class="pokemon-name">${gekozenPokemon.naam}</div>
      <p><strong>Type:</strong> ${gekozenPokemon.type}</p>
      <p><strong>Power Level:</strong> ${gekozenPokemon.powerlevel}</p>
    </div>
  `;
}