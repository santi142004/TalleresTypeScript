"use strict";
class Robot {
    constructor(nombre, modelo) {
        this.bateria = 100;
        this.estado = 'inactivo';
        this.nombre = nombre;
        this.modelo = modelo;
    }
    activar() {
        this.estado = 'activo';
        console.log(`El robot ${this.nombre} está activado y listo para funcionar.`);
    }
    desactivar() {
        this.estado = 'inactivo';
        console.log(`El robot ${this.nombre} se ha desactivado.`);
    }
    static cargarBateria(robot) {
        robot.bateria = 100;
        console.log(`La batería del robot ${robot.nombre} ha sido cargada al 100%.`);
    }
    static mostrarEstado(robot) {
        console.log(`El robot ${robot.nombre} está ${robot.estado} y tiene una batería de ${robot.bateria}%.`);
    }
}
const miRobot = new Robot('Robi', 'XYZ123');
miRobot.activar();
miRobot.desactivar();
Robot.cargarBateria(miRobot);
Robot.mostrarEstado(miRobot);
