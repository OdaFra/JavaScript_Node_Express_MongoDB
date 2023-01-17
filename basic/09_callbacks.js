/**
 * Callbacks
 */

const suma = (a, b) => {
  return a + b;
};
var resultado = suma(2, 4);
console.log(resultado);

const sum = (a, b, cb) => {
  cb(a + b);
};
sum(4, 4, (result) => {
  console.log(result);
});

const imprimir = (data) => console.log(data);
sum(3, 6, imprimir);

const getData = (cb, cbError) => {
    if (false){
    }else{
        cb( new Error('No se puede obtener datos'));
    }
};

const imprimirData = (data)=>console.log(data);
const errorHandler = (error)=>console.log(error);
getData(imprimirData, errorHandler);

