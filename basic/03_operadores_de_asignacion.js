/**
 * Operadores
 */
/**
 * Operadores de asignacion
 */

//(+)
var x = 2;
var y = 2;

x += y;
console.log(x);

//(-)
var x = 2;
var y = 2;

x -= y;
console.log(x);

//(*)
var x = 2;
var y = 2;

x *= y;
console.log(x);

//(/)
var x = 2;
var y = 2;

x /= y;
console.log(x);

//(%)
var x = 2;
var y = 2;

x %= y;
console.log(x);

//(**)
var x = 2;
var y = 4;

x **= y;
console.log(x);

/**
 * Operador de comparacion
 */

//Operador igual (==)

console.log(3 == 3);
console.log(3 == "3");

//Operador no es igual (!=)
console.log(3 != 3);

//Operador estrictamente igual (===)
console.log(3 === 3);
console.log(3 === "3");

//Desigualdad estricta (!==)
console.log(3 !== "3");

//Operadores > , <, >=, =<

console.log(3 > 4);
console.log(3 >= 4);
console.log(5 < 4);
console.log(3 <= 4);

/**
 * Operador arismetico
 */
console.log(2 + 4);
console.log(2 - 4);
console.log(2 * 4);
console.log(2 / 4);
console.log(2 % 4);
console.log(2 ** 4);

//Operador incremento y decremento
var nro = 0;
console.log(++nro);
console.log(nro++);
console.log(nro);

var numero = 3;
console.log(--numero);
console.log(numero--);
//console.log(numero);

/**
 * Operador logicos
 */

//AND
console.log(true && true);
console.log(2 > 3 && 1 <= 2);

//OR
console.log(true || false);

//NOT 
console.log(!true);

//Operador de concatenacion
let nombre = 'Oscar';
let apellido = 'Ramirez'
var nombrecompleto = nombre+' '+apellido;
console.log(nombrecompleto);

//Operador condicional ternaria.
console.log(2>3?'Es mayor':'Es menor');

// desestructuracion de objetos.
var persona = {
    nom:'Oscar',
    lastname:'Ramirez',
};

var { nom }=persona;
console.log(nom);
console.log(persona);

// Desestructurar de arreglos
var arreglo =[1,2,3,4];

var [uno, dos]=arreglo;
console.log(uno, dos);

/**
 * Operador de miembro o acceso de propiedad.
 */
//Notacion punto.
var persona = {
    nom:'Oscar',
    lastname:'Ramirez',
};

console.log(persona.lastname);

//Notacion por corchete.
var persona = {
    nom:'Oscar',
    lastname:'Ramirez',
};
console.log(persona['lastname']);

//Notacion por cochete  en arreglos.
var arreglo = [21,22,23,24,25,26];
console.log(arreglo[2]);

//Operador de determinacion de tipo (typeof)
console.log(typeof('Oscar'));
console.log(typeof(2,5));


//Ejercicios.
var minutos = 60;
var segundo = 60;

console.log(minutos * segundo *24);

var ancho = 2, alto = 5;
console.log(ancho*alto);

var grados = 20;
console.log((grados * (9/5))+32);