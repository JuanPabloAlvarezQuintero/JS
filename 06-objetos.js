//Creando un objeto

const producto = {
  nombre: "TV 50 Pulgadas",
  precio: 1200000,
  disponible: true,
};

//Acceder a propiedes del objeto
console.log(producto.nombre);
console.log(producto.precio);
//console.log(producto["disponible"]); //no es muy comun

//Agregar una propiedad al objeto despues de creado
producto.marca = "LG";

//Eliminar propiedades de un objeto
//delete producto.disponible;

console.log(producto);

//Extraer una propiedad y pasarla a una variable
const { nombre, precio, disponible } = producto; //Destructuring de objetos
console.log(nombre);
console.log(precio);
console.log(disponible);

//Creando un objeto dentro de otro
const producto2 = {
  nombre2: "Tablet",
  precio: 800000,
  disponible: true,
  informacion: {
    peso: "1Kg",
    medidas: "30-15",
    marca: "Samsung",
    fabricacion: {
      pais: "Japon",
      material: "Aluminio",
    },
  },
};

//Extraer propiedades de un objeto anidado
const {nombre2,informacion,informacion: { fabricacion: {pais} }} = producto2;
console.log(nombre);
console.log(informacion);
console.log("Pais de facbricación: ",pais);
