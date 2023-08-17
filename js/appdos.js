const miBoton = document.getElementById('boton');

miBoton.onclick = () => {
    Swal.fire({
        title: 'Esta es la dirección de la pañalera',
        text: 'Para cerrar este cartel clickee el icono azul de abajo',
        icon: 'info',
        confirmButtonText: 'Clickee aqui'
      })
}

