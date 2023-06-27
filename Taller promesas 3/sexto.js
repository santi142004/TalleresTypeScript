"use strict";
let promesa6 = new Promise((resolve, reject) => {
    const tiempoAleatorio = Math.random() * 2000; // Genera un tiempo aleatorio entre 0 y 2000 milisegundos
    function callback() {
        if (tiempoAleatorio < 1000) {
            resolve("promesa resuelta");
        }
        else {
            reject(new Error("info error"));
        }
    }
    ;
    setTimeout(callback, tiempoAleatorio);
});
promesa6
    .then((mensaje) => {
    console.log(mensaje);
})
    .catch((err) => {
    console.log(err.stack);
});
