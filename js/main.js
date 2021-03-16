
/*Navbar Scroll*/
var navbar = document.querySelector("nav");

window.onscroll = function () {
  if (window.pageYOffset > 250) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
/*End Nadbar Scroll*/
const contenedorPrincipal1 = document.getElementById("contenedor-principal-1");
const contenedorPrincipal2 = document.getElementById("contenedor-principal-2");
const contenedorPrincipal3 = document.getElementById("contenedor-principal-3");
const contenedorPrincipal4 = document.getElementById("contenedor-principal-4");


function agregarEventosSlider(contenedorPrincipal) {
  const fila = contenedorPrincipal.querySelector(".contenedor-carousel");
  const peliculas = contenedorPrincipal.querySelectorAll(".pelicula");

  const flechaIzquierda = contenedorPrincipal.querySelector(".flecha-izquierda");
  const flechaDerecha = contenedorPrincipal.querySelector(".flecha-derecha");

  // ? ----- ----- Event Listener para la flecha derecha. ----- -----
  flechaDerecha.addEventListener("click", () => {

    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = contenedorPrincipal.querySelector(".indicadores .activo");
    if (indicadorActivo.nextSibling) {
      indicadorActivo.nextSibling.classList.add("activo");
      indicadorActivo.classList.remove("activo");
    }
  });

  // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
  flechaIzquierda.addEventListener("click", () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = contenedorPrincipal.querySelector(".indicadores .activo");
    if (indicadorActivo.previousSibling) {
      indicadorActivo.previousSibling.classList.add("activo");
      indicadorActivo.classList.remove("activo");
    }
  });
  // ? ----- ----- Paginacion ----- -----
  const numeroPaginas = Math.ceil(peliculas.length / 5);
  for (let i = 0; i < numeroPaginas; i++) {
		console.log('contenedorPrincipal', contenedorPrincipal)
    const indicador = document.createElement("button");

    if (i === 0) {
      indicador.classList.add("activo");
    }

    contenedorPrincipal.querySelector(".indicadores").appendChild(indicador);
    indicador.addEventListener("click", (e) => {
      fila.scrollLeft = i * fila.offsetWidth;

      contenedorPrincipal.querySelector(".indicadores .activo").classList.remove("activo");
      e.target.classList.add("activo");
    });
  }

  // ? ----- ----- Hover ----- -----
  peliculas.forEach((pelicula) => {
    pelicula.addEventListener("mouseenter", (e) => {
      const elemento = e.currentTarget;
      setTimeout(() => {
        peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
        elemento.classList.add("hover");
      }, 300);
    });
  });

  fila.addEventListener("mouseleave", () => {
    peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
  });
}

agregarEventosSlider(contenedorPrincipal1);
agregarEventosSlider(contenedorPrincipal2);
agregarEventosSlider(contenedorPrincipal3);
agregarEventosSlider(contenedorPrincipal4);

// Cargar peliculas detalle
let listaPeli = [];
leerPeliculas();

function leerPeliculas() {
  if (localStorage.length > 0) {
      listaPeli = JSON.parse(localStorage.getItem('listaPeliculasKey'));
      dibujarPeli();
  }
}
function dibujarPeli() {
  let filaGrilla = document.getElementById('detallePelicula');
  filaGrilla.innerHTML = '';
  let informacionPeli = '';
  for (let i in listaPeli) {
      let img = '';
      if (listaPeli[i].imagen === '') {
          img =  `img/peliculas/${listaPeli[i].imagen}`;
      }

      informacionPeli = `<div class="pelicula" >
              <a href="detallePelicula.html"><img src="img/peliculas/${listaPeli[i].imagen}" alt="imagen pelicula recomendada"/></a>
      </div>`;
      // agregar las columnas a la fila
      filaGrilla.innerHTML += informacionPeli;
  }
}
