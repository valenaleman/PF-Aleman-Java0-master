// Almaceno valores

let numerocero;


// Asigno un dato a una vriable 

let numeroone= 2023; // Número almacena La - placita - Pañalera

// Datos

let frase;
frase = "La placita - Pañalera";

// Inicializo variables

let numerotwo= 2023;

// Constante

const PI = 6;

// Operación con strings

let texto1 = 'La placita';
let texto2 = ' - Pañalera';

let texto3 = texto1 + texto2; // 'La placita - Pañalera'

// Visualización de datos en la consola
let numero3 = 2023;
let txt = 'La placita - Pañalera'

console.log(txt);
console.log(numero3);

// Estrictamente distinto
// resultado = a !== b;
// console.log(resultado);

resultado = a !== b;
console.log(resultado);

if (a !==b) {
    console.log('Son distintos')
}

// Declaración de una función

function saludar() {
    alert('Hola');
}

// Ejecuto la función

console.log('En esta página se mostraran pañales');

// Ejemplo con parametros

function suma(num1,num2) {
 console.log(num1 + num2)
}

suma(3000,6000);

suma(5000,600);

suma('Hola','cliente');

let x;
let y;


x = 80;
y = 25;

// Validación de datos para no enviar cualquier valor por parametro

if (Number(x) && Number(y)) {
    suma(x,y);
}else {
    console.log('Parametros invalidos!');
}

// Retorno de un valor

// Ejemplo agregando a un carrito de compras un elemento

let total;


function agregarItemCarrito(totalCarrito, precio, cantidad) {
    return totalCarrito + precio*cantidad;
}

function mostrarTotalCarrito(totalCarrito) {
    console.log('Total con el nuevo item añadido' + total);
}

function vaciarCarrito() {
    console.log('Vaciamos los items del carrito');
    return 0;
}

console.log('total del carrito:' + total);

total = agregarItemCarrito(total, 5000, 600);
mostrarTotalCarrito(total);
total = agregarItemCarrito(total, 3000, 6000);
mostrarTotalCarrito(total);
total = vaciarCarrito();


// Función con error 

function calculadora(num1, num2, operacion) {
    switch(operacion) {
        case '+' :
                 return num1 + num2;
                 console.log('Hola');
                 break;
        case '-' :
                 return num1 - num2;
                 break;
    }
}

// Expresión de función - función anonima

function saludar() {
    alert('Hola, ¿cómo va?')
}

// En forma de expreción de función

const saludardos = function () {
    alert('Hola, ¿cómo va?');
}

saludar();

function usarLaFuncion(unaFuncion) {
    unaFuncion();
}

usarLaFuncion(function() {
    alert('Hola, ¿cómo va?');
})

// Scoping

let variableGlobal = 6000;
let variableLocal = 4;

function mostrarDato() {
    // Ambito de la función

    let variableLocal = 4; // Local a la función
    console.log(variableGlobal);
    console.log('Variable global dentro de mostrarDatos' + variableGlobal);
}

mostrarDato();
// Contexto global
console.log('Variable global:' + variableGlobal);
console.log('Variable local a mostrarDato:' + variableLocal);

let numero = 5;

function imprimirNumero() {
    let numero = 3;
    console.log(numero); // 3
}

imprimirNumero();
console.log(numero); // 3

console.log('El resultado es:' + resultado0)

// Una persona

let nombre;
let apellido;
let producto;
let mail;

// Un contacto de una persona

nombre = 'Maria'
apellido = 'Gonzales'
producto = 'Pañales'
mail = 'mariagonzales00@gmail.com'

// Forma literal de declaración de objetos 

const persona1 = {nombre: 'Maria', apellido: 'Gonzales', producto: 'Pañales', mail: 'mariagonzales00@gmail.com'}

console.log(persona1); 

// Accedo a los atributos

console.log(persona1.mail);
console.log('El mail de' + persona1.nombre + 'es' + persona1.mail);

// Si no existe me devolvera undefined

console.log(persona1.peso);

// Modifico el contenido del atributo del objeto

persona1.nombre = 'Claudia';

console.log(persona1);

// Otra forma de acceder a los atributos del objeto

let atributo = 'nombre';
console.log(persona1[atributo]);

console.log(persona1['edad']);

persona1['edad'] = 80;

function mostrarAtributo (nombreAtributo, objetodos) {
    console.log(objetodos[nombreAtributo]);
}

mostrarAtributo('mail', persona1);
mostrarAtributo('nombre', persona1);

// Recorrido de atributos
// Uso de FOR... IN

const persona = {nombre: 'Maria', apellido: 'Gonzales', producto: 'Pañales', mail: 'mariagonzales00@gmail.com'}

// Por cada atributo que hay en el objeto persona1...

for (const atributo in persona1) {
    console.log(atributo + ': ' + persona1[atributo]);
}

// El operador IN nos devolvera verdadero si esta el atributo en el objeto, si no falso

if ('peso' in persona1) {
    console.log('El atributo peso esta en personal');
}else {
    console.log('El atributo peso no esta en persona1');
}

// Constructores
// Constructor de productos

function Producto(nom, precio, marca) {
    this.nombre = nom;
    this.precio = precio;
    this.marca = marca;
}

let nombreP = 'Pañal para bebés (60 pañales, para peso: 8,5 - 12 kg)';
let precio = 3200;
let marca = 'Babysec - Ultrasec';

const producto1 = new Producto(nombreP, precio, marca);

let nombrePtwo = 'Pañal para bebés (58 pañales, talle: XG, para peso: 11 - 15 kg)';
let preciotwo = 5900;
let marcatwo = 'Pampers - Premium care';

const producto2 = new Producto(nombrePtwo, preciotwo, marcatwo);

let nombrePthree = 'Pañal para bebés (36 pañales, para peso: 5 - 8 kg)';
let preciothree = 2420;
let marcathrree = 'Pampers - Premium care';

const producto3 = new Producto(nombrePthree, preciothree, marcathrree);

let nombrePfour = 'Pañal para bebés (20 pañales, para peso: 6 kg)';
let preciofour = 3200;
let marcafour = 'Pampers - Premium care';

const producto4 = new Producto(nombrePfour, preciofour, marcafour);

let nombrePfive = 'Pañal para bebés (27 unidades, talle: 6)';
let preciofive = 7600;
let marcafive = 'Chelino';

const producto5 = new Producto(nombrePfive, preciofive, marcafive);

let nombrePsix = 'Pañal para bebés (50 unidades, medidas: 200 x150 mm)';
let preciosix = 690;
let marcasix = 'Q-SOFT Premium';

const producto6 = new Producto(nombrePsix, preciosix, marcasix);

// Creo arrays

const arrayVacio = []; // Un array vacio

const arrayConElementos = ['Babysec', 'Pampers', 'Chelino', 'Q-SOFT'];

console.log(arrayVacio);
console.log(arrayConElementos);

// Accedo a un elemento de mi array

console.log(arrayConElementos[2]);
console.log(arrayConElementos[3]);
console.log(arrayConElementos[4]);


arrayConElementos[2] = 'Babysec';

console.log(arrayConElementos);

// Atributos 
// Length

console.log('cantidad de elementos:' + arrayConElementos.length);

const miLista = ['Babysec', 'Pampers', 'Chelino', 'Q-SOFT'];

console.log(miLista[0]);
console.log(miLista[1]);
console.log(miLista[2]);
console.log(miLista[3]);

for (let i = 0; i <= miLista.length; i++) {
    console.log(miLista[0]);
}

// Retornar funciones

function Pañalera(tienda) {
    return function(nombreLocal) {
        console.log(`${nombreLocal} ahora puede ${tienda}`)
    }
}

function Pañalera(tienda) {
    switch(tienda) {
        case 'tienda':
            return function(nombrep) {
                console.log(`${nombrep} El nombre de la tienda es La placita`);
            }
        case '2020':
            return function(nombrep) {
                console.log(`${nombrep} El año que se creo La placita fue en el 2020`);
            }
        default:
            return function(nombrep) {
                console.log(`${nombrep} El nombre de la tienda es La placita, esta tienda se creo en el 2020 ${tienda}`);
            }
    }
}

const elNombreDeLaTienda = Pañalera('tienda');
elNombreDeLaTienda('La placita');

const elAñoQueSeCreoLaTienda = Pañalera('2020');

elAñoQueSeCreoLaTienda('FechaDeCreaciónDeLaPañalera');

// Elementos del DOM

// Elemento principal

console.log(document);

// Elementos secundarios

console.log(document.body);
console.log(document.head);

// Propiedades del documento

console.log(document.URL);
console.log(document.contentType);
console.log(document.scripts);
console.log(document.links) // Muestra los href

// Acceder a los elementos del DOM

const oneclass = document.getElementsByClassName('pañaleraicon');
console.log(oneclass);

// Formas de escuchar eventos

// Obtenemos el elemento de DOM

/*const boton = document.getElementById('boton');*/

// Obtenemos el elemento del DOM usando querySelector

const boton = document.querySelector('#boton');

const botondos = document.querySelector('#botondos');

const botontres = document.querySelector('#botontres');

const botoncuatro = document.querySelector('#botoncuatro');

const botoncinco = document.querySelector('#botoncinco');

const botonseis = document.querySelector('#botonseis');

// Escucha de eventos

// Primera forma de agregar la escucha de un evento

function mostrarMensaje() {
    alert('Sera dirigido a la página del producto seleccionado');
}

boton.addEventListener('click', mostrarMensaje);

//boton.addEventListener('click', () => alert('Sera dirigido a la página del producto seleccionado'));

botondos.addEventListener('click', mostrarMensaje);

//botondos.addEventListener('click', () => alert('Sera dirigido a la página del producto seleccionado'));

botontres.addEventListener('click', mostrarMensaje);

//botontres.addEventListener('click', () => alert('Sera dirigido a la página del producto seleccionado'));

botoncuatro.addEventListener('click', mostrarMensaje);

//botoncuatro.addEventListener('click', () => alert('Sera dirigido a la página del producto seleccionado'));

botoncinco.addEventListener('click', mostrarMensaje);

//botoncinco.addEventListener('click', () => alert('Sera dirigido a la página del producto seleccionado'));

botonseis.addEventListener('click', mostrarMensaje);

//botonseis.addEventListener('click', () => alert('Sera dirigido a la página del producto seleccionado'));

// Eventos del mouse

function mensaje() {
    console.log('Estas ejecutando el evento sobre el boton');
}

const botonPrincipal = document.querySelector('#botonPrincipal');

botonPrincipal.addEventListener('mouseup', mensaje);

// Eventos del teclado

const miInput = document.querySelector('#inputuno');

miInput.addEventListener('keydown', () => {
    console.log('Ejecutaste el evento en el input');
});

// Storage

// LOCALSTORAGE

let miNombre = 'Valentina';

// Guardamos un elemento en el localStorage

localStorage.setItem('nombre', miNombre);

// Obtenemos ese elemento del localStorage

const elNombreObtenido =  localStorage.getItem('nombre');

console.log(nombreObtenido);

// Session storage

let unaClave = 2020;

sessionStorage.setItem('clave', unaClave);

for (let i = 0; i < localStorage.length ; i++);
{
    let clave = localStorage.key(i);
    let elemento = localStorage.getItem(clave);
    console.log(`${clave} : ${elemento}`);
}

// Remuevo un item

localStorage.removeItem('otraclave');

// Remover todos los elementos del session/localstorage

//localStorage.clear();

// Operador de postincremento

// Ejecutación de la sentencia y incremento

let añouno = 2020;

function mostrarDato(añouno) {
    console.log(añodos);
}

mostrarDato(añouno++);

mostrarDato(añouno);

// Operador preincremento

// Hacemos el incremento y luego la sentencia

let añodos = 2023;

mostrarDato(++añodos);

// Operador teernario

let nombreUsuario = 'user1';

if (nombreUsuario === 'user1') {
    console.log('Permiso concedido');
} else {
    console.log('Permiso denegado');
}

// Ejecutamos en una sola sentencia la resolución de un condicional, esta camuflado en un operador teernario

//(nombreUsuario === 'user1') ? console.log('Permiso concedido') : console.log('Permiso denegado');

let asignarPermiso;

const PERMISO_CONCEDIDO = 2020;

const PERMISO_DENEGADO = 2023;

// Con condicional 1

if (nombreUsuario === ' user1') {
    permiso = PERMISO_CONCEDIDO;
} else {
    permiso = PERMISO_DENEGADO;
}

// Con ternario

asignarPermiso = (nombreUsuario === 'User1') ? PERMISO_CONCEDIDO : PERMISO_DENEGADO;

(nombreUsuario === 'user1') ? llamarVista1() : llamarVista2();

console.log(asignarPermiso);

// Operadores logicos

// And

let numerocuatro = 20;

if (numerocuatro > 0) {
    console.log('numerocuatro es mayor a 0');
} 

numerocuatro > 0 && console.log('numerocuatro es mayor a 0');

// Hacemos el objeto en un registro

const usuario = {
    nombreUsuario: 'Claudia1970',
    nombre: 'Claudia',
    apellido: 'Acosta',
    edad: '',
    estadoCivil: '',
}

const validacionVacio =  usuario.nombreUsuario != '' && usuario.nombre != '' && usuario.apellido != '' && usuario.edad != '' && usuario.estadoCivil != '';

if (validacionVacio === false) {
    console.log('Hay campos vacios');
} else {
    console.log('Validación pasada');
}

validacionVacio === false ? console.log('Hay campos vacios') : console.log('Validación pasada!');

console.log(0 || NaN || undefined || null || '' || '' || false || 'Hola estas en la página de la placita' || 'Esperemos volver a verte');
console.log(true && 2020 && usuario && 'Maria' && '');

// Destructuring

const usuario2 = {
    username: 'MaryA23',
    nombre:'Maria',
    apellido: 'Acosta',
    edad: 65,
    estadoCivil: null
}

// Imprimimos por consola los valores de los atributos de usuario

function mostrarUnUsuario (username, nombreuno, apellidouno, edad) {
    console.log(username);
    console.log(apellidouno);
    console.log(nombreuno);
    if (edad > 70){
       console.log('El usuario es de avanzada edad');
    } else {
        console.log('El usuario no es de avanzada edad');
    }
}

// Operaciones de desestructuración

let {username, nombreuno, apellidouno, edad} = usuario;

mostrarUnUsuario(username, nombre, apellido, edad);

// Alias

let {nombreuno:nombre2,username:username2,apellidouno:apellido2,edad:edad2} = usuario2;

mostrarUnUsuario(username2,nombre2,apellido2,edad2);

mostrarUnUsuarioV2(usuario);

mostrarUnUsuarioV2(usuario2);

// Destructuración de parametros

function mostrarUnUsuarioV2 ({username, apellido, nombre, edad}) {
    console.log(`username: ${username}`);
    console.log(`apellido: ${apellido}`);
    console.log(`nombre: ${nombre}`);
    if (edad > 70) {
        console.log('El usuario es de avanzada edad');
    } else {
        console.log('El usuario no es de avanzada edad')
    }
}

// Concatenar array

const array = [ 20, 21, 22, 23, 'Maria del Carmen', 'Pedro'];

const array2 = [ 'Claudia', 2023, {nombre: 'Maria del Carmen', apellido: 'Acosta'}];

const array3 = array.concat(array2);

console.log(array3);

// Usando spread 

const arrayConcatenadoSPREAD = [...array, ...array2];

console.log(arrayConcatenadoSPREAD);

// Copiar arrays

class Item {
    nombre;
    precio;
    cantidad;
    marca;
    constructor (nombre, precio, marca, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.cantidad =cantidad;
    }
}

const stock = [new Item ('Ultrasec', 3200, 'Babysec', 60), new Item ('Premium care, piel delicada', 5900, 'Pampers', 58), new Item ('Premium care, recién nacido hipoalergénico', 2420, 'Pampers', 36), new Item ('Premium care, Recien nacido', 3200, 'Pampers', 20), new Item ('Chelino', 7600, 'Chelino', 27), new Item ('Q-SOFT', 690, 'Premium hipoalergénicas', 50)];

const stock2 = stock;

stock2.push(new Item ('Ultrasec', 3200, 'Babysec', 60), new Item ('Premium care, piel delicada', 5900, 'Pampers', 58), new Item ('Premium care, recién nacido hipoalergénico', 2420, 'Pampers', 36), new Item ('Premium care, Recien nacido', 3200, 'Pampers', 20), new Item ('Chelino', 7600, 'Chelino', 27), new Item ('Q-SOFT', 690, 'Premium hipoalergénicas', 50));

console.log(stock);

console.log(stock2);