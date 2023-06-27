class PC {
    public marca: string;
    private modelo: string;
    public memoriaRAM: number;
    private capacidadAlmacenamiento: number;
  
    constructor(marca: string, modelo: string, memoriaRAM: number, capacidadAlmacenamiento: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.memoriaRAM = memoriaRAM;
      this.capacidadAlmacenamiento = capacidadAlmacenamiento;
    }
  
    public encender() {
      console.log(`La PC ${this.marca} ${this.modelo} se ha encendido.`);
    }
  
    public apagar() {
      console.log(`La PC ${this.marca} ${this.modelo} se ha apagado.`);
    }
  
    static verificarEspecificaciones(pc: PC) {
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
  