const miBotonTres = document.getElementById('carritouno');

const miOpcion = document.getElementById('opcion');

miBotonTres.onclick = () => {
    Swal.fire(
        'Producto agregado al carrito correctamente',
        'El producto fue agregado al carrito',
        'success'
      )
}

miOpcion.onclick = () => {
    (async () => {

        const { value: fruit } = await Swal.fire({
          title: 'Seleccione una opción',
          input: 'select',
          inputOptions: {
            'Para': {
              Adultos: 'Personas mayores',
              Menores: 'Personas de menor edad (bebés)',
            },
          },
          inputPlaceholder: 'Opciónes',
        })
        if (fruit) {
          Swal.fire(`You selected: ${fruit}`)
        }
        
        })()
}
