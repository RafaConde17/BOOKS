let paginaActual = 0;

/* 📖 TODAS LAS PÁGINAS DEL LIBRO */
const paginas = [
  {
    izquierda: {
      titulo: "CAMINANDO A TU LADO",
      imagen: "fotos/IMG2.png",
      texto: "Caminar a tu lado es la paz de mi alma; cada paso contigo le da sentido a mi vida. No importa el destino, solo la certeza de que, junto a ti, mi corazón siempre está en casa."
    },
    derecha: {
      titulo: "NOTAS DE MI CORAZON",
      imagen: "fotos/IMG3.png",
      texto: "Eres la melodía que vive en las notas de mi corazón; en ti todo encuentra armonía y sentido. Cuando pienso en ti, mi alma suena más suave, más viva, como si cada latido supiera exactamente por qué existe."
    }
  },

  {
    izquierda: {
      titulo: "SOLEDAD COMPUESTA",
      imagen: "fotos/IMG6.png",
      texto: "Suelo abrazar la soledad sin miedo, pero contigo la soledad cambia de nombre: se vuelve refugio. Si estamos solos juntos, no falta nada; las notas de mi corazón encuentran compañía y todo en mí descansa en ti."
    },
    derecha: {
      titulo: "DIVERSIÓN EN CASA",
      imagen: "fotos/IMG5.png",
      texto: "La diversión en casa contigo tiene un brillo especial: risas sencillas, miradas cómplices y esa paz que convierte cualquier momento en algo inolvidable. No hace falta nada más; tu presencia llena el espacio y vuelve cada instante ligero y feliz."
    }
  }
];


/* ================= AUDIO ================= */

function fadeInAudio(audio) {
  audio.volume = 0;
  audio.play();

  let vol = 0;
  const intervalo = setInterval(() => {
    if (vol < 0.5) {
      vol += 0.02;
      audio.volume = vol;
    } else {
      clearInterval(intervalo);
    }
  }, 120);
}

/* ================= CONTROLES ================= */

function abrirLibro() {
  document.getElementById("portada").classList.add("oculto");
  document.getElementById("libro").classList.remove("oculto");

  const musica = document.getElementById("musica");
  fadeInAudio(musica);

  paginaActual = 0;
  renderPaginas();
}

function cerrarLibro() {
  document.getElementById("libro").classList.add("oculto");
  document.getElementById("portada").classList.remove("oculto");

  const musica = document.getElementById("musica");
  musica.pause();
  musica.currentTime = 0;
}

function siguientePagina() {
  if (paginaActual < paginas.length - 1) {
    paginaActual++;
    renderPaginas();
  }
}

function paginaAnterior() {
  if (paginaActual > 0) {
    paginaActual--;
    renderPaginas();
  }
}

/* ================= RENDER ================= */

function renderPaginas() {
  const izquierda = document.getElementById("izquierda");
  const derecha = document.getElementById("derecha");

  const pagina = paginas[paginaActual];

  izquierda.innerHTML = `
    <h2>${pagina.izquierda.titulo}</h2>

    <div class="marco-foto">
      <img src="${pagina.izquierda.imagen}" class="imagen-romantica">
      <span class="nota-foto">♥</span>
    </div>

    <p>${pagina.izquierda.texto}</p>
  `;

  derecha.innerHTML = `
    <h2>${pagina.derecha.titulo}</h2>

    <div class="marco-foto">
      <img src="${pagina.derecha.imagen}" class="imagen-romantica">
      <span class="nota-foto">♥</span>
    </div>

    <p>${pagina.derecha.texto}</p>

    <div class="controles">
      ${
        paginaActual > 0
          ? `<button onclick="paginaAnterior()">← Anterior</button>`
          : `<button onclick="cerrarLibro()">Cerrar</button>`
      }

      ${
        paginaActual < paginas.length - 1
          ? `<button onclick="siguientePagina()">Siguiente →</button>`
          : `<button onclick="cerrarLibro()">Cerrar</button>`
      }
    </div>
  `;

  izquierda.setAttribute("data-page", paginaActual * 2 + 1);
  derecha.setAttribute("data-page", paginaActual * 2 + 2);
}

/* ================= CORAZONES ================= */

function crearCorazones() {
  const contenedor = document.querySelector(".corazones-fondo");

  setInterval(() => {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "♥";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = 28 + Math.random() * 40 + "px";
    corazon.style.animationDuration = 6 + Math.random() * 6 + "s";

    contenedor.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 12000);

  }, 120);
}

crearCorazones();
