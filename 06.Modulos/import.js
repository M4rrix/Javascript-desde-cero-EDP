//Importar la carpeta
const calculadora = require('./calculadora');

//Agregamos numeros para poder hacer las operaciones
const num1 = 10;
const num2 = 5;

console.log("Suma:", calculadora.suma(num1, num2));
console.log("Resta:", calculadora.resta(num1, num2));
console.log("Multiplicación:", calculadora.multiplicacion(num1, num2));

try {
    console.log("División:", calculadora.division(num1, num2));
} catch (error) {
    console.log(error.message);
}