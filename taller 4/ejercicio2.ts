function resultado(): Promise<number> {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(8);
      }, 6000);
    });
  }
  
  async function imprimir() {
    try {
      const result = await resultado();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  imprimir();

  async function cuadradoAsincrono() {
    try {
      const result = await resultado();
      const square = result * result;
      console.log(square);
    } catch (error) {
      console.error(error);
    }
  }
    cuadradoAsincrono();
  