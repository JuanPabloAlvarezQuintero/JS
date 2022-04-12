const nombre = "Juan Pablo";
const apellido = "Alvarez Quintero";

console.log("Nombre: "+ nombre);
console.log("Apellido: " + apellido);

// Tamaño del String

console.log("El string: " +    nombre +    " tiene " +    nombre.length +    " letras contanto los espacios.");

// Buscar posiciones en un String

console.log("Buscar en que posición inicia Pablo: " + nombre.indexOf("Pablo"));

console.log("Buscar si Pablo esta en el string nombre: " + nombre.includes("Pablo"));


// Unir dos String con concat o con ,

console.log("Nombre y Apellido concatenado: "+nombre.concat(" "+apellido));
console.log(nombre,apellido);

// Template string o literals

console.log(`El nombre ${nombre} y su apellido ${apellido}`);


// Metodos de Eliminar espacios en blanco al principio y final del String (trim)

const producto = '   Portatil Asus       ';
console.log(producto.trimStart().trimEnd());

// Reemplazar palabra en un String

const producto2 = "Mouse ergonomico negro";
console.log(producto2);
console.log(producto2.replace('negro','Gris'));

// Cortar el String con slice

console.log(producto2.slice(0,17));
console.log(producto2.substring(0,5));
console.log(nombre.charAt(0));

// Repetir un string

const producto3 = ' En promoción !'.repeat(2);
console.log(`${producto2}${producto3}`);    

// Separar el string por los espacios

const actividad = "Estoy aprendiendo JavaScript";
console.log(actividad.split(" "));

// Convertir a Mayusculas o Minusculas

const mayuscula = 'Convertir este texto en mayusculas';
console.log(mayuscula.toUpperCase());

const minusculas = 'CONVERTIR ESTE TEXTO EN MINUSCULAS';
console.log(minusculas.toLowerCase());

// Convertir un número en String
let valor = 50;
console.log("número entero: ",valor);
console.log("número convertido a String: ",valor.toString());