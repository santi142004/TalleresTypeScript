let promesa2: Promise<number> = new Promise((resolve) => {
  resolve(2);
});

promesa2
  .then((valor) => {
    return valor * valor;
  })
  .then((valor) => {
    return valor * valor;
  })
  .then((valor) => {
    return valor * valor;
  })
  .then((valor) => {
    console.log('El valor final es:', valor);
  });
