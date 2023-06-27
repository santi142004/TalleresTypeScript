function numeroCuadrado(num: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    if (typeof num === 'number') {
      setTimeout(() => {
        const square = num * num;
        resolve(square);
      }, 1000); 
    } else {
      reject('El argumento no es un número válido');
    }
  });
}

async function cuadrado() {
  try {
    const result = await numeroCuadrado(5);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

cuadrado();
