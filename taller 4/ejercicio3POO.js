"use strict";
class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    acelerar() {
        console.log(`El coche ${this.marca} ${this.modelo} está acelerando.`);
    }
    static frenar() {
        console.log('El coche está frenando.');
    }
}
const miCoche = new Coche('Ford', 'Mustang');
miCoche.acelerar();
Coche.frenar();
