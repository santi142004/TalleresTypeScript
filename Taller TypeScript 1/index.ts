//Las variables var pueden ser modificadas y re-declaradas dentro de su ámbito; las variables let pueden ser modificadas, pero no re-declaradas; las variables const no pueden ser modificadas ni re-declaradas. 


//Declare e inicialice:
    //Dos variables lógicas
    let estado:boolean = false;
    let estado1:boolean = true;
    console.log(estado, estado1);
    
    //Dos variables numéricas
    let edad: number = 18;
    let cantidad: number =3;
    console.log(edad, cantidad);
    
    //Dos variables any
    let costo: any= "30.000";
    let costo1: any = 30.000;
        console.log(costo, costo1);
        
    //Dos variables string
    let nombre: string = "Santiago";
    let apellido: string = "Barrera";

    let mensaje = `Hola ${nombre} ${apellido} Bienvenido a nuestro sitio web, gracias por registrarte`;
    console.log(mensaje);

// Una variable array de números que contenga cinco elementos e imprima cada uno de sus elementos
let arregloN:number[] = [2,4,6,8,10];
console.log(arregloN);

//Una variable array de strings que contenga cinco elementos e imprima cada uno de sus elementos.
let arregloS: string[] = ["hola", "como", "estas", "todo", "bien"];
console.log(arregloS);

//Recorra cada array creado usando for-each e imprimiendo cada uno de sus elementos
arregloN.forEach((elemento: number) => {
    console.log(elemento);
  })

arregloS.forEach((elemento: string) => {
    console.log(elemento);
  })

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
arregloS[3]= "ESTAS";
console.log(arregloS);


//Declare e inicialice:
  //Una variable tipo objeto cuyos valores sean los días de la semana
  type DiasSemana = {
    lunes: string;
    martes: string;
    miercoles: string;
    jueves: string;
    viernes: string;
    [clave: string]: string; // Agrega una firma de índice
  };
  
  let diasSemana: DiasSemana = {
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
  
 //Una variable tipo objeto cuyos valores sean los números del 0 al 9
 type Numeros = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  [clave: string]: string; // Agrega una firma de índice
};

  let numeros : Numeros= {1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco", 6: "seis", 7: "siete", 
  8: "ocho", 9: "nueve"}
  console.log("----------+++++++");
  for (const clave in numeros) {
    console.log("numero:", clave);
    console.log("valor:", numeros[clave]);
    console.log("-----------------");
}



    




