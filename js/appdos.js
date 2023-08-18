const miBoton = document.getElementById('boton');

const miBotonDos = document.getElementById('botondos');

miBoton.onclick = () => {
    Swal.fire({
        title: 'Esta es la dirección de la pañalera',
        text: 'Para cerrar este cartel clickee el icono azul de abajo',
        icon: 'info',
        confirmButtonText: 'Clickee aqui'
      })
}

miBotonDos.onclick = async () => {
    const { value: email } = await Swal.fire({
      title: 'Ingrese su email',
      input: 'email',
      inputPlaceholder: 'En esta sección escrba su email'
    })
    
    if (email) {
      Swal.fire(`Entered email: ${email}`)
    }

    const { value: password } = await Swal.fire({
      title: 'Enter your password',
      input: 'password',
      inputLabel: 'Password',
      inputPlaceholder: 'Enter your password',
      inputAttributes: {
        maxlength: 10,
        autocapitalize: 'off',
        autocorrect: 'off'
      }
    })
    
    if (password) {
      Swal.fire(`Entered password: ${password}`)
    }
}