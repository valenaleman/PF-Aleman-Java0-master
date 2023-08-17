const miOpcion = document.getElementById('op');

miOpcion.onclick = () => {
    (async () => {

        const { value: fruit } = await Swal.fire({
          title: 'Seleccione una opción',
          input: 'select',
          inputOptions: {
            'Para': {
              adultos: 'Personas mayores',
              menores: 'Personas de menor edad (bebés)',
            },
          },
          inputPlaceholder: 'Opciónes',
        })
        if (adultos) {
          Swal.fire(`Usted selecciono: ${adultos}`)
        }
        })()
}