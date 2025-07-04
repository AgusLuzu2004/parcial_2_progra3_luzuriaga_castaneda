function guardarNombreLS(nombre) {
    localStorage.setItem('nombre', nombre);
}

function obtenerNombre() {
    const mensaje = document.querySelector('.incorrecto');
    const btnIngresar = document.querySelector('.nombreEnviado');
    const valorInput = document.querySelector('.input-nombre');

    btnIngresar.addEventListener('click', (event) => {
        event.preventDefault();
        const valorBuscado = valorInput.value.toLowerCase().trim();
        if (valorBuscado.length <= 2) {
            mensaje.textContent = "Error en nombre";
            valorInput.value = "";
            return;
        }
        guardarNombreLS(valorBuscado);
        window.location.href = "/vistas/listadoProductos.html";
    });
}

document.addEventListener("DOMContentLoaded", obtenerNombre);