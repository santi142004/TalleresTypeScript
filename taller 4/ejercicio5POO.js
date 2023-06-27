"use strict";
class PC {
    constructor(marca, modelo, memoriaRAM, capacidadAlmacenamiento) {
        this.marca = marca;
        this.modelo = modelo;
        this.memoriaRAM = memoriaRAM;
        this.capacidadAlmacenamiento = capacidadAlmacenamiento;
    }
    encender() {
        console.log(`La PC ${this.marca} ${this.modelo} se ha encendido.`);
    }
    apagar() {
        console.log(`La PC ${this.marca} ${this.modelo} se ha apagado.`);
    }
    static verificarEspecificaciones(pc) {
        console.log(`Especificaciones de la PC ${pc.marca} ${pc.modelo}: RAM ${pc.memoriaRAM}GB, Almacenamiento ${pc.capacidadAlmacenamiento}GB`);
    }
    static mostrarMensajeBienvenida() {
        console.log('Bienvenido/a al sistema de la PC');
    }
}
const miPC = new PC('HP', 'Pavilion', 8, 512);
miPC.encender();
miPC.apagar();
PC.verificarEspecificaciones(miPC);
PC.mostrarMensajeBienvenida();
