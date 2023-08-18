const miOpcion = document.getElementById('op');

miOpcion.onclick = async () => {
        const { value: edad } = await Swal.fire({
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
        if (edad) {
          Swal.fire(`Usted selecciono: ${edad}`)
        }
}
