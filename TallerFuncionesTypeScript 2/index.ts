// Función con parámetro opcional, por defecto y obligatorio
function ejemploFuncion(obligatorio: number, opcional: string = "valor por defecto", booleano?: boolean) {
    console.log("Parámetro obligatorio:", obligatorio);
    console.log("Parámetro opcional:", opcional);
    console.log("Parámetro booleano:", booleano);
  }
  
  // Llamado a la función
  ejemploFuncion(10, "opcional", true);
  
  // Variable tipo función que suma dos números
  const sumar = function (a: number, b: number): number {
    return a + b;
  };
  
  // Llamado a la función
  console.log("Resultado de la suma:", sumar(5, 3));
  
  // setTimeOut para implementar un callback que se llame después de 5 segundos
  setTimeout(() => {
    console.log("HOLA ADSI");
  }, 5000);
  
  // Función flecha sin argumentos
  const saludar = (): void => {
    console.log("Hola ADSI");
  };
  
  // Llamado a la función
  saludar();
  
  // Función flecha con parámetro de edad
  const calcularEdad = (edad: number): string => "La edad es: " + edad;
  
  // Llamado a la función
  console.log(calcularEdad(25));
  
  // Función flecha que retorna el producto de dos números
  const multiplicar = (num1: number, num2: number): number => num1 * num2;
  
  // Llamado a la función
  console.log("Resultado de la multiplicación:", multiplicar(5, 4));
  
  // Función flecha que retorna el módulo de dos números
  const calcularModulo = (num1: number, num2: number): number => {
    let modulo = num1 % num2;
    return modulo;
  };
  
  // Llamado a la función
  console.log("Resultado del módulo:", calcularModulo(10, 3));
  
