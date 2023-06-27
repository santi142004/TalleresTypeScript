class Coche {
    public marca: string;
    private modelo: string;
  
    constructor(marca: string, modelo: string) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    public acelerar() {
      console.log(`El coche ${this.marca} ${this.modelo} está acelerando.`);
    }
  
    static frenar() {
      console.log('El coche está frenando.');
    }
  }
  
  const miCoche = new Coche('Ford', 'Mustang');
  miCoche.acelerar(); 
  Coche.frenar(); 