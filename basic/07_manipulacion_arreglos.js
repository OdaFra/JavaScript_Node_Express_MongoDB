/**
 * Manipulacion de arreglos
 */

//For each
// Proceso con For
let letras = ["a", "b", "c", "d", "e"];
for (let i = 0; i < letras.length; i++) {
  const element = letras[i];
  console.log(`${element}`);
}
//Utilizando For each

letras.forEach((e) => console.log(e));

//funciones - push, shift, pop (son mutables)
//Push agregando elemento al arreglo.
let abc = ["a", "b", "c", "d", "e"];
abc.push("f");
console.log(abc);

//shift sirve para obtener el primer elemento de un arreglo como ejemplo (abstrae el primer elemento).
let primerElemento = abc.shift();
console.log(primerElemento);
console.log(abc);

//pop sirve para obtener el ultimo elemento de un arreglo (abstrae el ultimo elemento)
let ultimoElemento = abc.pop();
console.log(ultimoElemento);
console.log(abc);

//Metodo Map
let est = ["Juan", "Manuel", "Oscar", "Emilio"];
let info = est.map((nombre) => {
  return {
    nombre: nombre,
    asistencia: false,
  };
});
let detalles = est.map((nombre) => `${nombre}.`);
console.log(est);
console.log(info);
console.log(detalles);

var productos = [
  {
    nombre: "Camisetas",
    precio: 33,
  },
  {
    nombre: "Zapatos",
    precio: 45,
  },
  {
    nombre: "Gorros",
    precio: 12,
  },
];

var impuesto = productos.map((producto) => {
  //   producto.impuesto = .11;
  //   return producto;
  return {
    ...producto,
    impuesto: 0.12,
  };
});
var precios = productos.map((producto) => producto.precio);

console.log(productos);
console.log(impuesto);
console.log(precios);

// Metodo Filter
let alumnos = [
  {
    nombre: "Juan",
    edad: 29,
    matriculado: true,
  },
  {
    nombre: "Alberto",
    edad: 27,
    matriculado: true,
  },
  {
    nombre: "David",
    edad: 30,
    matriculado: false,
  },
  {
    nombre: "Julian",
    edad: 22,
    matriculado: true,
  },
];

let filtradoMayor = alumnos.filter(
  (alumno) => alumno.edad >= 27 && alumno.matriculado === true
);
console.log(alumnos);
console.log(filtradoMayor);

// Metodo Reduce.

let calificaciones = [3, 3, 4, 5, 7, 8, 10];
let suma = calificaciones.reduce(
  (acumulador, calificacion) => acumulador + calificacion,
  0
);
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

let edades = [20, 21, 23, 21, 20, 25, 25, 31, 32, 25];

//salida
// {
// 21:3,
// }
let res = edades.reduce((acumulador, edad) => {
  if (!acumulador[edad]) {
    acumulador[edad] = 1;
  } else {
    acumulador[edad] += 1;
  }
  return acumulador;
}, {});
console.log(edades);
console.log(res);

let ventas = [
  {
    nombre: "Camisetas",
    precio: 100,
    totalVendido: 10,
  },
  {
    nombre: "Zapatos",
    precio: 50,
    totalVendido: 12,
  },
  {
    nombre: "Gorros",
    precio: 10,
    totalVendido: 30,
  },
];

let resultado = ventas.reduce((acumulador, producto) => {
  let totalVentas = producto.precio * producto.totalVendido;
  acumulador[producto.nombre] = totalVentas;
  return acumulador;
}, {});
console.log(ventas);
console.log(resultado);

//
let estudiantes = [
  {
    nombre: "Juan",
    edad: 29,
    matriculado: true,
  },
  {
    nombre: "Alberto",
    edad: 27,
    matriculado: true,
  },
  {
    nombre: "David",
    edad: 30,
    matriculado: false,
  },
  {
    nombre: "Julian",
    edad: 22,
    matriculado: true,
  },
];

var result = estudiantes
  .map((estudiante) => estudiante.matriculado)
  .reduce(
    (acumulador, item) => {
      if (item) {
        acumulador.matriculado += 1;
      } else {
        acumulador.noMatriculado += 1;
      }
      return acumulador;
    },
    { matriculado: 0, noMatriculado: 0 }
  );

console.log(estudiantes);
console.log(result);

//some -- every
// some dentro de un arreglo nos ayuda a identificar si al menos uno cumple con una condicion.
//every -- si todos los elemento cumplen con una condicion.

var nros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = nros.some((numero) => numero % 2 === 0);
var result2 = nros.every((numero) => numero % 2 === 0);

console.log(nros);
console.log(result);
console.log(result2);

let clientes = [
  { id: 1, nombre: "Oscar" },
  { id: 2, nombre: "David" },
  { id: 3, nombre: "Juan" },
  { id: 4, nombre: "Alberto" },
  { id: 5, nombre: "Carlos" },
];
var resp = clientes.find((cliente) => cliente.id == 4);
var respfilter = clientes.filter((cliente) => cliente.id == 5);
// findIndex

var respfindIndex = clientes.findIndex((cliente) => cliente.id == 3);

//console.log(clientes);
console.log(resp);
console.log(respfilter);
console.log(respfindIndex, clientes[respfindIndex]);

//Incluides

var mascotas = ['perro', 'gato', 'pajaro'];
var resmas = mascotas.includes('perro');
console.log(resmas);
console.log('OscarDavid'.includes('a'));

var buscador =(parametro)=>{
  let clientes = [
    { id: 1, nombre: "Oscar" },
    { id: 2, nombre: "David" },
    { id: 3, nombre: "Juan" },
    { id: 4, nombre: "Alberto" },
    { id: 5, nombre: "Carlos" },
  ];
  return clientes.filter((cliente)=>cliente.nombre.includes(parametro));
}
console.log(buscador('ar'));

//Manipulacion de arreglos - join

var elementos = ['agua', 'fuego', 'aire', 'tierra'];

var resultElement = elementos.join('-');

console.log(resultElement);


let client = [
  { id: 1, nombre: "Oscar" },
  { id: 2, nombre: "David" },
  { id: 3, nombre: "Juan" },
  { id: 4, nombre: "Alberto" },
  { id: 5, nombre: "Carlos" },
  { id: 6, nombre: "Marcelo" },
];

var csvGenerator = (array, separador=',')=>{
  let headers = Object.keys(array[0]).join(separador);
  let data = array.map((element)=>Object.values(element).join(separador));
  console.log(headers);
  data.forEach(element=>console.log(element));
}

csvGenerator(client);

//Concat  - Sort - Splice - Slice

let array =[1,2,3,4,5];
let arreglo =[6,7,8,9];
let concatArray= array.concat(arreglo);
let expressOperation = [...array, ...arreglo]
console.log(concatArray);
console.log(expressOperation);

//Sort - ordenamiento
var sortOrdenar = [0,2,3,1,4,5,8,6,7,9]
console.log(sortOrdenar.sort());

var meses =['Dic', 'Ene','Mar','Feb'];
console.log(meses.sort());

var qty = [1, 1000, 100, 10000, 30 ,4];
let ordenar =qty.sort((x, y)=> x-y);
console.log(ordenar);


//Splice - modifica completamente el arreglo
let nombres = ['Oscar', 'David', 'Naho'];
//  nombres.splice(1);
 nombres.splice(1,1,'Juan')
 console.log(nombres);


//Slice - no modifica el arreglo en si
var names = ['Oscar', 'David', 'Naho', 'Juan', 'Alberto'];
var resul = names.slice(1,names.length);
console.log(resul);