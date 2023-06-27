let promesa1 = new Promise((resolve, reject) => {
    reject("Ha ocurrido un error desconocido")
})

promesa1.catch((err) => {
    console.log( err);
})