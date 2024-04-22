function verificarNumero(numero){
    // Escribe un programa que tome un número como entrada y muestre "Es positivo" si el número es mayor que cero,
    // "Es negativo" si es menor que cero y "Es cero" si es igual a cero.
    // Tu código 👇:

    let num = prompt("Ingresa un numero");

    if(num > 0) {
    console.log(`${num} es un numero positivo`);
    }else if (num < 0) {
    console.log(`${num} es un numero negativo`);
    } else {
        console.log("Es cero");
    }
}


function esBisiesto(anio){
    // Escribe un programa que determine si un año es bisiesto o no. (true o false)
    // Un año es bisiesto si es divisible entre 4, excepto aquellos que son divisibles entre 100 pero no entre 400.
    // Tu código 👇:
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(esBisiesto(2000));;
console.log(eBisiesto(1900));


function verificarCalificacion(calificacion){
    // Escribe un programa que determine si un estudiante aprobó o reprobó un examen.
    // El estudiante aprueba si su calificación es mayor o igual a 60.
    // Devolver "Aprobó" o "Reprobó"
    // Tu código 👇:
let nota = prompt("ingresa tu nota del 1 al 100")

if(nota >= 60){
    return "Aprobado";
} else (num < 60) {
    return "Desaprobaste";
}

}

function esMayor(num1, num2, num3){
    // Escribe un programa que determine el mayor de tres números dados.
    // Devolver el numero mayor
    // Tu código 👇:
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(esMayor(10, 5, 8));
console.log(esMayor(11, 8, 6));
console.log(esMayor(11, 11, 11));


function esPrimo(num){
    // Escribe un programa que determine si un número dado es primo.
    // Devolver true o false
    // Tu código 👇:
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % 1 === 0) {
            return false
        }
    }
    return true;

}

console.log(esPrimo(7));
console.log(esPrimo(9));
console.log(esPrimo(15));


module.exports = {
    verificarCalificacion,
    verificarNumero,
    esBisiesto,
    esMayor,
    esPrimo
}