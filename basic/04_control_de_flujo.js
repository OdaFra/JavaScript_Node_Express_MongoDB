/**
 * CONTROL DE FLUJO
 */

//Estructura IF

var llueve = true;
if (llueve) {
  console.log("Necesito una sombrilla");
}

var admin = "administrador";
if (admin === "administrador") {
  console.log("Es el administrador");
}

const mayor_de_edad = 18;
var edad = 17;

if (edad >= mayor_de_edad) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

var semaforo = "azul";
if (semaforo === "verde") {
  console.log("Adelante");
} else if (semaforo === "amarillo") {
  console.log("Atencion");
} else if (semaforo === "rojo") {
  console.log("Parar");
} else {
  console.log("Accion no identificada");
}

//switch
var producto = "Pera";
switch (producto) {
  case "manzana":
    console.log("Precio 3000");
    break;
  case "banana":
    console.log("Precio 2500");
    break;
  case "naranja":
    console.log("3500");
    break;
  default:
    console.log("Producto no encontrado");
    break;
}
// Ejercicios

var dia = "domingo";
if (dia === "lunes") {
  console.log("Monday");
} else if (dia === "martes") {
  console.log("Tuesday");
} else if (dia === "miercoles") {
  console.log("Wednesday");
} else if (dia === "jueves") {
  console.log("Thursday");
} else if (dia === "viernes") {
  console.log("Friday");
} else if (dia === "sabado") {
  console.log("Saturday");
} else {
  console.log("Dia no encontrado");
}

var dia = "Sabado";

switch (dia) {
  case "lunes":
    console.log("Monday");
    break;
  case "martes":
    console.log("Tuesday");
    break;
  case "miercoles":
    console.log("Wednesday");
    break;
  default:
    console.log("Dia no encontrado");
}

var total = 21;
switch (true) {
  case total <= 10:
    sum = total+3
    console.log("Se ha agregado 3$ por envio, total " + sum);
   
    break;
  case total >= 10 && total <= 20:
    sum = total+5
    console.log("Se ha agregado 5$ por envio, total " + sum);

    break;
  case total > 20 && total <= 50:
    sum = total+7
    console.log("Se ha agregado 7$ por envio, total "+sum);

    break;
  default:
    console.log("Envio gratis");
    break;
}
