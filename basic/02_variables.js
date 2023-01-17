/**
 * Variables
 * 3 formas de variables
 * var
 * let
 * final
 *
 */
var nombre = "Oscar";
console.log(nombre);
var persona = {
  nombre: "Oscar",
  apellido: "Ramirez",
  edad: 31,
  direccion: {
    calle: "Inmaculada Concepcion",
    nroDeCasa: 0909,
  },
  cuidadesVisitadas: ["Luque", "Sanlo", "Caacupe"],
};
console.log(persona);

// variables con left

{
  let nombre = 'Oscar';
  console.log(nombre);
}
// console.log(nombre);

{
  var saludo = 'Hola como estas?'
  console.log(saludo);
}
console.log(saludo);

var nombre = 'Oscar';
var saludo = `Hola soy ${nombre}`
console.log(saludo);