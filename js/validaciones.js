const modalRegistro = new bootstrap.Modal(document.getElementById('modalRegistro'));
const modalLogin = new bootstrap.Modal(document.getElementById('modalLogin'));

function validarCampoRequerido(input) {
    if(input.value != '') {
        console.log('esta bien');
        input.className = 'form-control is-valid';
        return true;
    } else {
        console.log('faltan datos');
        input.className = 'form-control is-invalid';
        return false;
    }
}

function validarCampoRequeridoContacto(input) {
    if(input.value != '') {
        console.log('esta bien');
        input.className = 'form-control is-valid w-75';
        return true;
    } else {
        console.log('faltan datos');
        input.className = 'form-control is-invalid w-75';
        return false;
    }
}

let navbar = document.querySelector('nav')

window.onscroll = function() {
    // pageYOffset or scrollY
        if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled')
        } else {
        navbar.classList.remove('scrolled')
        }
}

function validarMail(input) {
    let expresion = /\w+@\w+\.[a-z]{2,4}$/;
    if (input.value != '' && expresion.test(input.value)) {
        input.className = 'form-control is-valid';
        return true;
    } else {
        input.className = 'form-control is-invalid';
        return false;
    }
}

function validarMailContacto(input) {
    //lucia@gmail.com -- \w es cadena de texto con numeros, \. lo uso cuando estoy escribiendo una expresion regular y el $ es cuando quiero terminar la expresion regular
    let expresion = /\w+@\w+\.[a-z]{2,4}$/;
    if (input.value != '' && expresion.test(input.value)) {
        input.className = 'form-control is-valid w-75';
        return true;
    } else {
        input.className = 'form-control is-invalid w-75';
        return false;
    }
}

function validarTelefono(input) {
    if (input.value != '' && !isNaN(input.value)) {
        input.className = 'form-control is-valid';
        return true;
    } else {
        input.className = 'form-control is-invalid';
        return false;
    }
}

function validarConsulta(input) {
    if (input.value != '' && input.value.length >= 10) {
        input.className = 'form-control is-valid w-75';
        return true;
    } else {
        input.className = 'form-control is-invalid w-75';
        return false;
    }
}

function validarCodigo(input) {
    if (input.value != '' && !isNaN(input.value)) {
        console.log('esta bien');
        input.className = 'form-control is-valid';
        return true;
    } else {
        console.log('faltan datos');
        input.className = 'form-control is-invalid';
        return false;
    }
}

let checkbox = document.getElementById('checkContacto');
checkbox.addEventListener('change', validarCheck);
function validarCheck() {
    if (checkbox.checked) {
        checkbox.className = 'form-check-input is-valid';
        return true;
    } else {
        checkbox.className = 'form-check-input is-invalid';
        return false;
    }
}

class Administrador{
    constructor(usuario, contrasenia) {
        this.usuario = usuario;
        this.contrasenia = contrasenia;
    }
}

let usuarioAdministrador = [];
// Cargar el usuario-administrador
let usuarioAdmin = new Administrador('admin', 'admin');
console.log(usuarioAdmin);
usuarioAdministrador.push(usuarioAdmin);
// guardar el usuario en localstorage
localStorage.setItem('usuarioAdministradorKey', JSON.stringify(usuarioAdministrador)); 
// Traigo de LS el usuario y la contraseña
let administrador = JSON.parse(localStorage.getItem('usuarioAdministradorKey'));

function redireccionar() {
  window.location.href = "admin.html";
  if(administrador.usuario === 'admin' && administrador.contrasenia === 'admin') {
    codigoHTML = `
    <nav class="navbar navbar-expand-md d-print-block justify-content-center fixed-top">
      <a class="navbar-brand navbar-brand d-flex mr-auto margen-logo" href="index.html">Amazon Prime</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contacto.html">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="acerca-nosotros.html">Nosotros</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Ingresar
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#modalLogin" data-bs-toggle="modal">Login</a>
              </li>
              <li><a class="dropdown-item" href="#modalRegistro" data-bs-toggle="modal">Registrate</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="admin.html" tabindex="-1" aria-disabled="true">Administración</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Busca tu pelicula" aria-label="Search" />
          <button class="btn btn-outline-danger buscar" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
    `;
} else {
    codigoHTML = `
    <nav class="navbar navbar-expand-md d-print-block justify-content-center fixed-top">
      <a class="navbar-brand navbar-brand d-flex mr-auto margen-logo" href="index.html">Amazon Prime</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contacto.html">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="acerca-nosotros.html">Nosotros</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Ingresar
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#modalLogin" data-bs-toggle="modal">Login</a>
              </li>
              <li><a class="dropdown-item" href="#modalRegistro" data-bs-toggle="modal">Registrate</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Busca tu pelicula" aria-label="Search" />
          <button class="btn btn-outline-danger buscar" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
    `;
}
}

// function validarGeneralLogin(event) {
//     event.preventDefault(); 
//     if (validarCampoRequerido(document.getElementById('usu')) && 
//     validarCampoRequerido(document.getElementById('contra'))) {
       
        
       
//     } else {
//         alerta.className = 'alert alert-danger';
//         alerta.innerHTML = 'Usuario no registrado';  
//     }
// }

function validarGeneralContacto(event) {
    event.preventDefault(); 
    console.log('validar formulario'+ event); // lo uso para controlar
    let alerta = document.getElementById('mensajeEnvio');
    if (validarCampoRequeridoContacto(document.getElementById('nombreCon')) && 
        validarMailContacto(document.getElementById('mailCon')) &&
        validarConsulta(document.getElementById('consulta')) &&
        validarCheck()) {
            enviarMailContacto();
            limpiarFormularioContacto();
            Swal.fire(
                'Su Consulta fue enviada con exito!',
                'Nos comunicaremos con usted a la brevedad',
                'success'
            );
    } else {
        alerta.className = 'alert alert-danger';
        alerta.innerHTML = 'Ocurrio un error, verifique los datos ingresados.';  
    }
}

function enviarMailContacto() {
    emailjs.send("service_9ehkr6a","template_rd4p65a",{
        to_name: "Administrador",
        from_name: document.getElementById('mailCon').value,
        message: `Nombre y Apellido: ${document.getElementById('nombreCon').value}, Email: ${document.getElementById('mailCon').value} y Consulta: ${document.getElementById('consulta').value}`,
        }).then(
            function (response) {
                console.log(response);
                alerta.className = 'alert alert-success';
                alerta.innerHTML = 'Los datos se enviaron correctamente.';
            }, function (error) {
                console.log(error);
                alerta.className = 'alert alert-danger';
                alerta.innerHTML = 'Ocurrio un error, verifique los datos ingresados.';
            }
        );
}

function limpiarFormularioContacto() {
    let formulario = document.getElementById('formContacto');
    formulario.reset();
    document.getElementById('nombreCon').className = "form-control";
    document.getElementById('mailCon').className = "form-control";
    document.getElementById('consulta').className = "form-control";
    document.getElementById('checkContacto').className = "form-control";
}

function validarGeneralRegistro(event) {
    console.log('funcion');
    event.preventDefault();
    if (validarCampoRequerido(document.getElementById('nombreR')) && 
    validarMail(document.getElementById('mailR')) &&
    validarCampoRequerido(document.getElementById('telefonoR')) &&
    validarCampoRequerido(document.getElementById('usuarioR')) &&
    validarCampoRequerido(document.getElementById('contraseniaR'))) {
        enviarMailRegistro();
        modalRegistro.hide();
        limpiarFormularioRegistro();
        Swal.fire(
            'Su Registro fue exitoso!',
            'Bienvenido a Prime Video',
            'success'
            );
    } else {
        alerta.className = 'alert alert-danger';
        alerta.innerHTML = 'Ocurrio un error, verifique los datos ingresados.';  
    }
}

function enviarMailRegistro() {
    emailjs.send("service_9ehkr6a","template_rd4p65a",{
        to_name: "Administrador",
        from_name: document.getElementById('mailR').value,
        message: `Nombre y Apellido: ${document.getElementById('nombreR').value}, Email: ${document.getElementById('mailR').value}
        , Telefono: ${document.getElementById('telefonoR').value}, Usuario: ${document.getElementById('usuarioR').value}, Contraseña: ${document.getElementById('contraseniaR').value}`,
        }).then(
            function (response) {
                console.log(response);
                alerta.className = 'alert alert-success';
                alerta.innerHTML = 'Los datos se enviaron correctamente.';
            }, function (error) {
                console.log(error);
                alerta.className = 'alert alert-danger';
                alerta.innerHTML = 'Ocurrio un error, verifique los datos ingresados.';
            }
        );
}

function limpiarFormularioRegistro() {
    let formulario = document.getElementById('formRegistro');
    formulario.reset();
    document.getElementById('nombreR').className = "form-control";
    document.getElementById('mailR').className = "form-control";
    document.getElementById('telefonoR').className = "form-control";
    document.getElementById('usuarioR').className = "form-control";
    document.getElementById('contraseniaR').className = "form-control";
}

