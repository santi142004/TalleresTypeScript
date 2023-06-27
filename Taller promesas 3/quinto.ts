let promesa3= new Promise((resolve) => {
    resolve("Somos ADSI");
  });
  
  let promesa4 = new Promise((resolve, reject) => {
    const estado: string = "cumplida"; 
    if (estado === "cumplida") {
      resolve("Somos programadores");
    } else {
      reject(new Error("Promesa 2 no cumplida"));
    }
  });
  
  let promesa5= new Promise((resolve) => {
    resolve(" Hacemos mover el mundo");
  });
  
  promesa3
    .then((mensaje1) => {
      console.log(mensaje1);
      return promesa4;
    })
    .then((mensaje2) => {
      console.log(mensaje2);
      return promesa5;
    })
    .then((mensaje3) => {
      console.log(mensaje3);
    })
    .catch((err) => {
      console.log('Ha ocurrido un error: ', err.message);
    });
  