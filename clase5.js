//Funciones Simples

/** 1. Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.*/

function pulgadas(num) {
  return num * 2.54;
}
console.log("1. Al converitir 10 pulgadas a centimetros es: " + pulgadas(10));

/** 2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com.*/

function texto(url) {
  return `http://www.${url}.com`;
}
console.log("2. Al converitir miweb en una URL es: " + texto("miweb"));

/** 3. CCrear una función que recibe un string y devuelve la misma frase pero con
admiración*/

const admira = (frase) => {
  return frase + "!!!";
};
console.log("3. Frase 'Soy Crack' en admiraciòn es: " + admira("Soy Crack"));

/** 4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos*/
const edadPerro = (edad) => {
  return edad * 7;
};
console.log("4. En 5 años humanos un perro tiene: " + edadPerro(5) + " años.");

/** 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro*/
const hora = (sueldo) => {
  let dia = sueldo / 30;
  let hora = dia / 8;
  return hora.toFixed(2);
};
console.log("5. La hora de un salario de 2000 es: " + hora(2000));

/** 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores. */
const calculadorIMC = (altura, peso) => {
  return (peso / Math.pow(altura, 2)).toFixed(2);
};
console.log(
  "6. El IMC para una persona que mide 1.86 y pesa 80kg, su IMC es: " +
    calculadorIMC(1.86, 80)
);

/** 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne. */

const mayuscula = (mayuscula) => {
  return mayuscula.toUpperCase();
};
console.log("7. La palabra hola en mayuscula es: " + mayuscula("hola"));

/** 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro */
const tipo = (variable) => {
  return typeof variable;
};
console.log("8. El tipo de dato de la variable 8000 es: " + tipo(8000));

/** 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia */
const circunferencia = (radio) => {
  return (2 * Math.PI * radio).toFixed(2);
};
console.log(
  "9. La circunferencia de un circulo de radio 54 es: " + circunferencia(54)
);
