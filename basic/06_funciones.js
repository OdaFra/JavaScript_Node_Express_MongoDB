/**
 * Funciones
 */

//Declarativa
//Estructura
// function nombredelafuncion() {}

function Saludar(nombre) {
  console.log(`Hola, soy ${nombre}`);
}
Saludar("Oscar");

function saludar(nombre) {
  return `Hola soy ${nombre}`;
}
var saludo = saludar("Oscar");
console.log(saludo);
console.log(saludar("Hola, soy Oscar"));

//Expresion o funciones anonimas.
let suma = function (a, b) {
  return a + b;
};
console.log(`La suma es: ${suma(2, 4)}`);

// arrow - function.
var resta = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return "Solo puede restar numeros";
  }
  // return a-b;
};
console.log(`La resta es: ${resta(10, 2)}`);

let multiplicar = (a, b) => a * b;
console.log(`La multiplicacion es: ${multiplicar(2, 5)}`);

//
