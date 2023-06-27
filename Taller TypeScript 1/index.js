"use strict";
//Las variables var pueden ser modificadas y re-declaradas dentro de su ámbito; las variables let pueden ser modificadas, pero no re-declaradas; las variables const no pueden ser modificadas ni re-declaradas. 
//Declare e inicialice:
//Dos variables lógicas
let estado = false;
let estado1 = true;
console.log(estado, estado1);
//Dos variables numéricas
let edad = 18;
let cantidad = 3;
console.log(edad, cantidad);
//Dos variables any
let costo = "30.000";
let costo1 = 30.000;
console.log(costo, costo1);
//Dos variables string
let nombre = "Santiago";
let apellido = "Barrera";
let mensaje = `Hola ${nombre} ${apellido} Bienvenido a nuestro sitio web, gracias por registrarte`;
console.log(mensaje);
// Una variable array de números que contenga cinco elementos e imprima cada uno de sus elementos
let arregloN = [2, 4, 6, 8, 10];
console.log(arregloN);
//Una variable array de strings que contenga cinco elementos e imprima cada uno de sus elementos.
let arregloS = ["hola", "como", "estas", "todo", "bien"];
console.log(arregloS);
//Recorra cada array creado usando for-each e imprimiendo cada uno de sus elementos
arregloN.forEach((elemento) => {
    console.log(elemento);
});
arregloS.forEach((elemento) => {
    console.log(elemento);
});
//cómo eliminar elementos de un array
// con .splice se puede eliminar elementos en un array ademas .shift elimina el primer valor y .pop el ultimo
// arregloN.splice(1,3);
// console.log(arregloN);
//agregar elementos
//.push agrega al final
arregloS.push("?");
console.log(arregloS);
//unshift agrega al inicio
arregloS.unshift(nombre);
console.log(arregloS);
// leer y actualizar elementos.
//leer elementos
console.log(arregloN[2]);
//actualizar elementos
arregloS[3] = "ESTAS";
console.log(arregloS);
let diasSemana = {
    lunes: "Lunes",
    martes: "Martes",
    miercoles: "Miércoles",
    jueves: "Jueves",
    viernes: "Viernes"
};
console.log("----------+++++++");
for (const llave in diasSemana) {
    console.log("Día:", llave);
    console.log("Valor:", diasSemana[llave]);
    console.log("-----------------");
}
let numeros = { 1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco", 6: "seis", 7: "siete",
    8: "ocho", 9: "nueve" };
console.log("----------+++++++");
for (const clave in numeros) {
    console.log("numero:", clave);
    console.log("valor:", numeros[clave]);
    console.log("-----------------");
}
