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

// Agrego popup

alert('Te vamos a pedir que ingreses el correo electronico');

let correo = prompt('Ingrese su correo electronico');

if (correo) {
    correo = prompt('Ingrese su correo electrónico');
    console.log('Verificando correo electrónico');
}else {
    alert('Por favor ingresar correo electrónico en el caso de no haberlo hecho');
}

// Tipo de dato booleano

let dato = true; // Tipo de dato booleano
dato = false; // tipo de dato booleano

if (true){
    console.log('Correo ingresado')
}

// Operadores de comparación

let a = 'Correo ingresado';
let b = 'Correo ingresado';
let resultado = a == b;

console.log(resultado);

if (a == b) {
    console.log('Correo ingresado')
}

// Estrictamente distinto
// resultado = a !== b;
// console.log(resultado);

resultado = a !== b;
console.log(resultado);

if (a !==b) {
    console.log('Son distintos')
}

// Para que necesita comprar en la pañalera

let necesidad = prompt ('Ingrese ingrese la palabra Madre si es para su hijo o ingrese la palabra Adulto si es para algun familiar')
const Madre = 'Madres que necesitan pañales o accesorios para bebés';

if (necesidad >= Madre) {
    console.log ('Le mostraremos nuestros productos para bebés') 
}else {
    console.log('Le mostraremos productos para adultos')
}

// Declaración de una función

function saludar() {
    alert('Hola');
}

// Ejecuto la función

saludar();
console.log('En esta página se mostraran pañales');
saludar();

// Declaración de la función 
function saludar () {
    alert('Hola como va!')
}

// Usando parametros

// Parametros de entrada

function saludarAUnCliente(nombreCliente) {
    alert('Hola' + nombreCliente + 'como va!');
}

let nombrethree;
nombrethree = prompt('Ingrese su nombre');

let Cliente;

Cliente = 'Hola';

saludarAUnCliente(Cliente);

console.log('Hago otras cosas...')

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

// Otra expresión de función - Arrow function

const saludartres = () => {alert('Hola, ¿cómo va?')};

saludar();

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

// Nos planteamos una calculadora
/*
 1- + sumar
 2- - restar
 3- / dividir
 4- * multiplicar
*/

const SUMAR = 1; 
const RESTAR = 2;
const DIVIDIR = 3;
const MULTIPLICAR = 4;

let num1;
let num2;
let resultado0 = 0;
let opcion;
let operacion = 

alert('Bienvenido a la calculadora');
num1 = parseFloat(prompt('Ingrese un número'));
num2 = parseFloat(prompt('Ingrese otro número'));
opcion = parseInt(prompt(` 1- + sumar \n
                  2- - restar \n
                  3- / dividir \n
                  4- * multiplicar \n
                  Ingrese su opción:`));

if (opcion === 1) {
    resultado = num1 + num2;
} else {
    if (opcion === RESTAR) {
        resultado = num1 - num2
    } else {
        if (opcion === DIVIDIR) {
            resultado = num1 / num2;
        } else {
            if (opcion === MULTIPLICAR) {
                resultado0 = num1 * num2
            }
        }
    }
}

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