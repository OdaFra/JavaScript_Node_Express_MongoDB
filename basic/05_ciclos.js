/**
 * Ciclos
 */
var contador = 0;
while (contador < 10) {
  console.log("Hola Mundo");
  contador += 1;
}

/**
 * Do - while
 */
var contador = 1;
do {
  console.log("Hola Mundo!");
  contador += 1;
} while (contador <= 10);

//FOR

let contador = 1;
for (contador; contador <= 5; contador++) {
  console.log("Soy Goku");
}

var persona = {
  nombre: "Oscar",
  apellido: "Ramirez",
  edad: 31,
};
for (let clave in persona) {
  console.log(clave, persona[clave]);
}

//for -of
var arreglo = [1, 2, 3, 4];
for (let valor of arreglo) {
  console.log(valor);
}

//Ejercicio
var nro = 1;
acumulador = 0;
for (nro; acumulador < 20; nro++) {
  acumulador = nro * 2;
  console.log("Tabla de dos: " + acumulador);
}

let y;
for (let i = 2; i <= 12; i++) {
  for (let j = 1; j <= 10; j++) {
    y = i * j;
    console.log(`${i} x ${j} = ${y}`);
  }
}

var x;
for (i = 2; i <= 12; i++) {
  console.log(`
    \nTabla de ${i}\n`);
  for (j = 1; j <= 10; j++) {
    y = i * j;
    console.log(`${i} x ${j} = ${y}`);
  }
}
