class Robot {
    public nombre: string;
    private modelo: string;
    public bateria: number = 100;
    private estado: string = 'inactivo';
  
    constructor(nombre: string, modelo: string) {
      this.nombre = nombre;
      this.modelo = modelo;
    }
  
    public activar() {
      this.estado = 'activo';
      console.log(`El robot ${this.nombre} está activado y listo para funcionar.`);
    }
  
    public desactivar() {
      this.estado = 'inactivo';
      console.log(`El robot ${this.nombre} se ha desactivado.`);
    }
  
    static cargarBateria(robot: Robot) {
      robot.bateria = 100;
      console.log(`La batería del robot ${robot.nombre} ha sido cargada al 100%.`);
    }
  
    static mostrarEstado(robot: Robot) {
      console.log(`El robot ${robot.nombre} está ${robot.estado} y tiene una batería de ${robot.bateria}%.`);
    }
  }
  
  const miRobot = new Robot('Robi', 'XYZ123');
  miRobot.activar(); 
  miRobot.desactivar(); 
  
  Robot.cargarBateria(miRobot); 
  Robot.mostrarEstado(miRobot); 
  