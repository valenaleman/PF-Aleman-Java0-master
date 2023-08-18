let carrito = [new Itemone('Ultrasec', 3200, 'Babysec', 60), 
               new Itemone('Premium care, piel delicada', 5900, 'Pampers', 58), 
               new Itemone('Premium care, recién nacido hipoalergénico', 2420, 'Pampers', 36), 
               new Itemone('Premium care, Recien nacido', 3200, 'Pampers', 20), 
               new Itemone('Chelino', 7600, 'Chelino', 27), 
               new Itemone('Hipoalergénicas', 690, 'Q-SOFT Premium', 50)
            ];

function dibujarTable () {
    const bodyTabla = document.getElementById ('items');
    bodyTabla.innerHTML = '';
    carrito.forEach((item) => {
        bodyTabla.innerHTML = bodyTabla.innerHTML +
        `
        <tr>
             <th>1</th>
             <td>${item.nombre}</td>
             <td>${item.precio}</td>
             <td>${item.marca}</td>
             <td>${item.cantidad}</td>
        </tr>
        `
    })
}