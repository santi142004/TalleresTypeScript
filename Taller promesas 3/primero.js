"use strict";
let promesa = new Promise((resolve, reject) => {
    resolve("Somos programadores, hacemos mover el mundo");
});
promesa.then((res) => {
    console.log(res);
});
