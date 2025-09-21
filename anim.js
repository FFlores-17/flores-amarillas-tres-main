// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tiempo aquel, viendo a la distancia", time: 4 },
  { text: "Tiempo fue viendo al interior", time: 9 },
  { text: "Tiempo que no me imaginaba,", time: 11 },
  { text: "lo que me perdí", time: 18 },
  { text: "Y hoy aquí, viendo las estrellas", time: 24 },
  { text: "Y hoy aquí, todo es claridad", time: 29 },
  { text: "Desde aquí ya puedo ver", time: 33 },
  { text: "Que es donde debo estar", time: 37 },
  { text: "Y la luz encuentro al fin ", time: 42 },
  { text: "Se aclaró aquella niebla", time: 46.5 },
  { text: "Y la luz encuentro al fin", time: 51 },
  { text: "Ahora el cielo es azul", time: 56 },
  { text: "Es real brillando así", time: 61 },
  { text: "Ya cambió la vida entera", time: 65 },
  { text: "Esta vez todo es diferente", time: 73 },
  { text: "Veo en ti la luz", time: 79 },
  { text: "Tiempo aquel, persiguiendo un sueño", time: 109 },
  { text: "Tiempo fue en la oscuridad", time: 114 },
  { text: "Tiempo que no había visto cómo es la realidad ", time: 118 },
  { text: "Ella aquí luce como estrella", time: 128 },
  { text: "Ella aquí, todo es claridad ", time: 133 },
  { text: "Si aquí está es fácil ver", time: 137 },
  { text: "Que aquí hoy quiero estar", time: 142 },
  { text: "Y la luz encuentro al fin", time: 146 },
  { text: "Se aclaró aquella niebla", time: 151 },
  { text: "Y la luz encuentro al fin", time: 155 },
  { text: "Ahora el cielo es azul", time: 159 },
  { text: "Es real brillando así ", time: 164 },
  { text: "Ya cambió la vida entera", time: 168 },
  { text: "Esta vez todo es diferente", time: 177 },
  { text: "Veo en ti la luz", time: 182 },
  { text: "Veo en ti la luz", time: 192 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);