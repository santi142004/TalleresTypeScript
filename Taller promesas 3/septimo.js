"use strict";
const promesa7 = new Promise((resolve) => {
    setTimeout(() => resolve("Resultado 7"), 2000);
});
const promesa8 = new Promise((resolve) => {
    setTimeout(() => resolve("Resultado 8"), 1500);
});
const promesa9 = new Promise((resolve) => {
    setTimeout(() => resolve("Resultado 9"), 1000);
});
const promesa10 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Error en promesa 10")), 500);
});
Promise.all([promesa7, promesa8, promesa9, promesa10])
    .then((resultados) => {
    resultados.forEach((resultado) => {
        console.log(resultado);
    });
})
    .catch((error) => {
    console.log("Error:", error.message);
});
// Implementación de Promise.race con dos promesas
const promiseRace = Promise.race([promesa7, promesa10]);
promiseRace
    .then((resultado) => {
    console.log("Resultado de la carrera:", resultado);
})
    .catch((error) => {
    console.log("Error en la carrera:", error.message);
});
