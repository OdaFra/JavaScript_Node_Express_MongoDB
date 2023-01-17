/**
 * Promises
 */

const getData1 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Oscar",
          apellido: "Ramirez",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos");
    }
  });

getData1(false)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//const getData2 = Promise((resolve, reject) => {});


const getData2 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "David",
          apellido: "Ramirez Franco",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos 2");
    }
  });

  console.log('Inicio');
getData1(false)
  .then((data) => {
    console.log(data);
    return getData2(false);
  }).then((data)=>{
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log('Fin');

//

const getData = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "David",
          apellido: "Ramirez Franco",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos 2");
    }
  });


  const getData3 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Oscar",
          apellido: "Ramirez",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos 3");
    }
  });

getData3(false)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

  const main = async() => {
   try {
    let resultado = await getData(false);
   let resultado2 = await getData3(true);
console.log(resultado);
console.log(resultado2);
   } catch (error) {
    console.log(error);
   }
  }
  main();