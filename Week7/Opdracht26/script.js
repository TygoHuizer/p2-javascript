const songs = [
  {
    titel: "Blinding Lights",
    artiest: "The Weeknd",
    duur: 3.2,
    emoji: "🔥",
  },
  {
    titel: "Starboy",
    artiest: "The Weeknd",
    duur: 3.5,
    emoji: "⭐",
  },
  {
    titel: "Uptown Funk",
    artiest: "Bruno Mars",
    duur: 4.3,
    emoji: "🕺",
  },
  {
    titel: "Levitating",
    artiest: "Dua Lipa",
    duur: 3.8,
    emoji: "✨",
  },
  {
    titel: "Bohemian Rhapsody",
    artiest: "Queen",
    duur: 5.9,
    emoji: "🎸",
  },
];

// Vind het langste nummer
let langsteNummer = songs[0];
for (let i = 1; i < songs.length; i++) {
  if (songs[i].duur > langsteNummer.duur) {
    langsteNummer = songs[i];
  }
}

// Toon het langste nummer bovenaan
document.getElementById("langsteNummer").innerHTML =
  `<h3>🏆 Langste nummer: ${langsteNummer.titel}</h3>`;

// Toon alle nummers in de playlist
let playlistHTML = "";
for (let i = 0; i < songs.length; i++) {
  playlistHTML += `<p>${songs[i].emoji} ${songs[i].titel} – ${songs[i].artiest} (${songs[i].duur} minuten)</p>`;
}

document.getElementById("playlist").innerHTML = playlistHTML;