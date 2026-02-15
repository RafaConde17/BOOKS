let paginaActual = 0;

/* 📖 TODAS LAS PÁGINAS DEL LIBRO */
const paginas = [
  {
    izquierda: {
      titulo: "DARLING",
      imagen: "fotos/IMG2.png",
      texto: "Amor buenas noches, se q es tarde pero la verdad queria hacerte este detalle por lo mucho que te amo. tu sabes que hoy estaba mal pero igualmente me disculpo,tambien me disculpo por lo del pollo creo que hice mal en no exigir pero dejando eso, encontre esto en mis recuerdos.se q son de roblox pero para mi es importante por todo lo q vivimos esos tiempos."
    },
    derecha: {
      titulo: "HONEY",
      imagen: "fotos/IMG4.png",
      texto: "Amor, yo quiero estar toda mi vida contigo por que para mi eres la mejor persona del mundo, para mi solo existes tu, te amo mucho demasiado, que cada vez que pienso en ti me pongo muy feliz y empiezo a llorar de felicidad"
    }
  },

  {
    izquierda: {
      titulo: "Capítulo 3",
      imagen: "img3.jpg",
      texto: "Cuando el poder alcanza su punto máximo…"
    },
    derecha: {
      titulo: "Capítulo 4",
      imagen: "img4.jpg",
      texto: "y por ultimo quiero recordarte que yo siempre estaré para ti en las buenas y las malas, cada dia intento mejorar para estar mejor y hacerte muy feliz y asi será hasta que sea abuelita, siempre resolveré los problemas para que estemos bien y cuidar mucho tu corazoncito mi vida"
    }
  }
];

/* ================= CONTROLES ================= */

function abrirLibro() {
  document.getElementById("portada").classList.add("oculto");
  document.getElementById("libro").classList.remove("oculto");
  paginaActual = 0;
  renderPaginas();
}

function cerrarLibro() {
  document.getElementById("libro").classList.add("oculto");
  document.getElementById("portada").classList.remove("oculto");
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

  /* ====== PÁGINA IZQUIERDA ====== */

  izquierda.innerHTML = `
    <h2>${pagina.izquierda.titulo}</h2>

    <div class="marco-foto">
      <img src="${pagina.izquierda.imagen}" class="imagen-romantica">
      <span class="nota-foto">♥</span>
    </div>

    <p>${pagina.izquierda.texto}</p>
  `;

  /* ====== PÁGINA DERECHA ====== */

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

  /* ====== NUMERACIÓN ====== */

  izquierda.setAttribute("data-page", paginaActual * 2 + 1);
  derecha.setAttribute("data-page", paginaActual * 2 + 2);
}

function crearCorazones() {
  const contenedor = document.querySelector(".corazones-fondo");

  setInterval(() => {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "♥";

    // posición horizontal aleatoria
    corazon.style.left = Math.random() * 100 + "vw";

    // MÁS GRANDES
    corazon.style.fontSize = 28 + Math.random() * 40 + "px";

    // MÁS LENTOS Y SUAVES
    corazon.style.animationDuration = 6 + Math.random() * 6 + "s";

    contenedor.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 12000);

  }, 120); // ← MÁS ABUNDANTES (antes 300)
}

crearCorazones();
