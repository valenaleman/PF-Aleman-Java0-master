const miBotonTres = document.getElementById('carritouno');

miBotonTres.onclick = () => {
    Swal.fire(
        'Producto agregado al carrito correctamente',
        'El producto fue agregado al carrito',
        'success'
      )
}