const numero = 85;
const numero2 = 2.5;

let resultado = numero + numero2;
console.log(`La suma de ${numero} y ${numero2} es ${resultado}`);

let n3;

// Redondear hacia abajo
Math.floor(2.6);

// Redondear hacia arriba
n3 = Math.ceil(4.6);

// Raiz cuadrada
n3 = Math.sqrt(856);

// Potencia
n3 = Math.pow(2, 3);

// Minimo
n3 = Math.min(2, 33, 4, 7, 9);

// Maximo
n3 = Math.max(3, 8, 5, 9, 43, 33);

// Aleatorio
n3 = Math.floor(Math.random() * 20);

console.log(n3);

//Orden de ejecución de operaciones

let orden;

orden = 20 + 30 * 2;
orden = (20 + 30) * 2;

//descuento en carrito de compras del 20%

orden = (20 + 30 + 40 + 50 + 60) * 0.2;

// poner impuesto a 16%
orden = (20 + 30) * 1.16;

console.log(orden);

//Incrementos o Decrementos

let puntaje = 5;

++puntaje;
++puntaje;

console.log(puntaje);

//Convertir String en números

const number1 = "20";
const number2 = "20.5";
const number3 = 8;

console.log(number1);
console.log(Number.parseInt(number1));
console.log(Number.parseFloat(number2));

// Revisar si una variable es entero o no
console.log(Number.isInteger(number3));