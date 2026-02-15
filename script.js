let paginaActual = 0;

/* 📖 TODAS LAS PÁGINAS DEL LIBRO */
const paginas = [
  {
    izquierda: {
      titulo: "DARLING",
      imagen: "fotos/IMG2.png",
      texto: "Amor buenas noches, se q es tarde pero la verdad queria hacerte este detalle por lo mucho que te amo. tu sabes que hoy estaba mal pero igualmente me disculpo,tambien me disculpo por lo del pollo creo que hice mal en no exigir pero dejando eso, encontre esto en mis recuerdos.se q son de roblox pero para mi es importante por todo lo q vivimos esos  tiempos."
    },
    derecha: {
      titulo: "Capítulo 2: El Digno Rival",
      imagen: "img2.jpg",
      texto: "El último nuke no es solo el más fuerte…"
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
      texto: "Todo final es también un comienzo."
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

  if (paginaActual === 0) {
    // Diseño romántico especial para Capítulo 1
    izquierda.innerHTML = `
      <h2>${pagina.izquierda.titulo}</h2>

      <div class="marco-foto">
        <img src="${pagina.izquierda.imagen}" class="imagen-romantica">
        <span class="nota-foto">♥</span>
      </div>

      <p>${pagina.izquierda.texto}</p>
    `;
  } else {
    // Diseño normal para otras páginas
    izquierda.innerHTML = `
      <h2>${pagina.izquierda.titulo}</h2>
      <img src="${pagina.izquierda.imagen}" class="imagen-pagina">
      <p>${pagina.izquierda.texto}</p>
    `;
  }

  /* ====== PÁGINA DERECHA ====== */

  derecha.innerHTML = `
    <h2>${pagina.derecha.titulo}</h2>
    <img src="${pagina.derecha.imagen}" class="imagen-pagina">
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

  /* ====== NUMERACIÓN DE PÁGINAS ====== */

  izquierda.setAttribute("data-page", paginaActual * 2 + 1);
  derecha.setAttribute("data-page", paginaActual * 2 + 2);
}

