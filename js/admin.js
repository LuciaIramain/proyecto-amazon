
class Peliculas{
    constructor(codigo, nombrePelicula, categoria, descripcion, estado, imagen){
        this.codigo = codigo;
        this.nombrePelicula = nombrePelicula;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.estado = estado;
        this.imagen = imagen;
    }
}

let listaPeliculas = [];
const modalPeliculas = new bootstrap.Modal(document.getElementById('modalPeli'));
btnAgregarPeli.addEventListener('click', () => {
    limpiarFormularioPelicula();
    modalPeliculas.show();
});
let existePelicula = false;
leerDatos();

function limpiarFormularioPelicula() {
    let formulario = document.getElementById('modalPeliculas');
    formulario.reset();
    document.getElementById('codigoPelicula').className = "form-control";
    document.getElementById('nombrePelicula').className = "form-control";
    document.getElementById('categoriaPelicula').className = "form-control";
    document.getElementById('descripcionPelicula').className = "form-control";
    document.getElementById('estadoPelicula').className = "form-control";
    document.getElementById('imagenPelicula').className = "form-control";
    existePelicula = false;
}

window.agregarPeliculas = function () {
    if (validarCodigo(document.getElementById('codigoPelicula')) &&
    validarCampoRequerido(document.getElementById('nombrePelicula')) && 
    validarCampoRequerido(document.getElementById('categoriaPelicula')) &&
    validarCampoRequerido(document.getElementById('descripcionPelicula')) &&
    validarCampoRequerido(document.getElementById('estadoPelicula')) &&
    validarCampoRequerido(document.getElementById('imagenPelicula'))) {
        // Cargar una pelicula
        let nuevaPelicula = new Peliculas(document.getElementById('codigoPelicula').value, document.getElementById('nombrePelicula').value,
        document.getElementById('categoriaPelicula').value, document.getElementById('descripcionPelicula').value, 
        document.getElementById('estadoPelicula').value, validarCampoRequerido(document.getElementById('imagenPelicula')).value);
        // guardar la pelicula en el arreglo
        console.log(nuevaPelicula);
        listaPeliculas.push(nuevaPelicula);
        // guardar los datos en localstorage
        localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPeliculas)); //transformo algo de js a JSON
        Swal.fire(
            'Nueva pelicula!',
            'Su carga se realizo con exito!',
            'success'
        )
        limpiarFormularioPelicula();
        leerDatos();
        modalPeliculas.hide();
    } else {
        console.log('datos incorrectos');
    }
}

function leerDatos() {
    if (localStorage.length > 0) {
        let _listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculasKey'));
        if (listaPeliculas.length === 0) {
            listaPeliculas = _listaPeliculas;
        }
        escribirDatosTabla(_listaPeliculas);
    }
}

function escribirDatosTabla(_listaPeliculas) {
    let bodyTablaPeliculas = document.getElementById('bodyTablaPeliculas');
    bodyTablaPeliculas.innerHTML = '';
    let codigoHTML = '';
    for (let i in _listaPeliculas) {
        codigoHTML = `
                        <tr>
                            <td>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="checkbox1" name="options[]" value="1">
                                    <label for="checkbox1"></label>
                                </span>
                            </td>
                            <td>${_listaPeliculas[i].codigo}</td>
                            <td>${_listaPeliculas[i].nombrePelicula}</td>
                            <td>${_listaPeliculas[i].categoria}</td>
                            <td>${_listaPeliculas[i].descripcion}</td>
                            <td>${_listaPeliculas[i].estado}</td>
                            <td>${_listaPeliculas[i].imagen}</td>
                            <td class="botonesContenedor">
                                <button class="btn btn-warning botonesAdmin" title="Editar" onclick="modificarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i
                                class="far fa-edit text-light"></i></button>
                                <button class="btn btn-danger botonesAdmin" title="Eliminar" onclick="eliminarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>`;
        bodyTablaPeliculas.innerHTML += codigoHTML;
    }
}

window.eliminarPelicula = function (pelicula) {
    console.log('prueba', pelicula.id);
    Swal.fire({
        title: '¿Estás seguro de eliminar la pelicula seleccionada?',
        text: "¡No puede volver atrás esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Aqui borra el producto
            let peliculaFiltrada = listaPeliculas.filter((peliculas) => 
                peliculas.codigo != pelicula.id
            )
            listaPeliculas = peliculaFiltrada; 
            // Guardar en localstorage los datos filtrados
            localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPeliculas));
            // Volver a dibujar la tabla
            leerDatos();
            // console.log(funkopopFiltrado);
          Swal.fire(
            '¡Borrado!',
            'Tu pelicula ha sido eliminada.',
            'success'
          );
        }
    });
}

window.modificarPelicula = function (btnEditar) {
    console.log(btnEditar.id);
    limpiarFormularioPelicula();
    let peliculaBuscada = listaPeliculas.find((pelicula) => {
       return pelicula.codigo === btnEditar.id;
    });
    document.getElementById('codigoPelicula').value = peliculaBuscada.codigo;
    document.getElementById('nombrePelicula').value = peliculaBuscada.nombrePelicula;
    document.getElementById('categoriaPelicula').value = peliculaBuscada.categoria;
    document.getElementById('descripcionPelicula').value = peliculaBuscada.descripcion;
    document.getElementById('estadoPelicula').value = peliculaBuscada.estado;
    document.getElementById('imagenPelicula').value = peliculaBuscada.imagen;
    existePelicula = true;
    modalPeliculas.show();
}

window.guardarPelicula = function (event) {
    event.preventDefault();
    if(existePelicula === true) {
        actualizarDatosPeliculas();
    } else {
        agregarPeliculas();
    }

}

function actualizarDatosPeliculas() {
    // esta funcion guarda en LS con los datos modificados
    console.log('modificar');
    let codigo = document.getElementById('codigoPelicula').value;
    let nombre = document.getElementById('nombrePelicula').value;
    let categoria = document.getElementById('categoriaPelicula').value;
    let descripcion = document.getElementById('descripcionPelicula').value;
    let estado = document.getElementById('estadoPelicula').value;
    let imagen = document.getElementById('imagenPelicula').value;

    // buscar el objeto que quiero modificar y cambiar sus valores
    for (let i in listaPeliculas) {
        if (listaPeliculas[i].codigo === codigo) {
            // encontre el funko que quiero editar
            listaPeliculas[i].nombrePelicula = nombre;
            listaPeliculas[i].categoria = categoria;
            listaPeliculas[i].descripcion = descripcion;
            listaPeliculas[i].estado = estado;
            listaPeliculas[i].imagen = imagen;
        }
    }
    localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPeliculas));
    limpiarFormularioPelicula();
    modalPeliculas.hide();
    Swal.fire(
        'Modificación exitosa!',
        'Se actualizó correctamente su pelicula',
        'success'
    );
    leerDatos();
}



