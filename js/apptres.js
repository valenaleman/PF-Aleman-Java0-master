const miBotonTres = document.getElementById('cartone');

miBotonTres.onclick = () => {
Swal.fire(
  'Producto agregado al carrito correctamente',
  'El producto fue agregado al carrito',
  'success'
)
}