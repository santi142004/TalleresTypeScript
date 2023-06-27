function subsidio(estrato: number) {
    return new Promise((resolve, reject) => {
      if (estrato >= 1 && estrato <= 2) {
        resolve("El usuario tiene derecho al subsidio.");
      } else if (estrato >= 3 && estrato <= 6) {
        resolve("El usuario no tiene derecho al subsidio.");
      } else {
        reject(new Error("Estrato no válido"));
      }
    });
  }
  
  let estratoUsuario: number = 2;
  
  subsidio(estratoUsuario)
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((err) => {
      console.log('Ha ocurrido un error: ', err.message);
    });
  
  