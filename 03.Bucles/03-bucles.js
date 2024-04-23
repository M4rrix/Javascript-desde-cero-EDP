function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
    //Se convierte la frase a minusculas para hacer la comparacion insensible a mayus y min
    phrase = phrase.toLowerCase();

    //Se define un contador para las vocales
    let count = 0;
    
    //Recorremos las frase con un bluce for
    for (let i = 0; i< phrase.length; i++) {
        //Verificamos si el caracter actual es una vocal
        if (phrase[i] === 'a' || phrase[i] === 'e' || phrase[i] === 'i' || phrase[i] === 'o' || phrase[i] === 'u') {
            //Si es un vocal, se aumenta el contador en 1
            count++;
        }
    }

    //Se devuelve la cantidad total de vocales
    return count;


}


//ejemplo
console.log(cantidadDeVocales("Hola soy una frase, cuantas vocales tengo?"));


function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'dividendo' a partir de un número dado (divisor) utilizando un bucle while
// Tu código:👇
    //Se comienza desde el divisor dado
    let numero = divisor;

    //Utilizamos un bluce while para encontrar el primer numero divisible por el dividiendo
    while(true) {
        //Verificamos si el numero actual es divisible por el diviendo
        if (numero % dividiendo === 0){
            //Si lo es, devolvemos este numero
            return numero;
        }//Si no es divisble, pasamos al siguiente numero
        numero++;
    }

}

console.log(primerDivisible(5, 3)); //devuelve 6


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇

    //Recorremos numero del 1 al 100
    for (let i = 1; i <= 100; i++) {
        //Si encontramos la x, retornamos un msj
        if (i === x) {
            return "El numero" + x + "es:" + i;
        }
    }
//Si no se encuentra el numero x en el rango del 1 al 100, retornmos un mensaje que no se encontro
return "El numero" + x + "no se encontro en el rango del 1 al 100";

}

console.log(encuentraX(7)); 





function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
        //variable para almacenar la suma
        let suma = 0;

        //recorrer del 0 al numero pasado por parametros
        for (let i = 0; i <= num; i++) {
            //sumamos cada numero al total
            suma += i;
        }

        //retornamos la suma
        return suma;
}

console.log(sumandoTodo(5));




function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇

    let decimal = 0;

    //recorremos la cadena binaria de derecha a izquierda
    for (let i = num.length - 1, exp = 0; i >= 0; i--, exp++) {
        //convertimos cada digito de la cadena a un  numero entero y lo sumamos al total,
        //multiplicando por 2 elevado a la potencia correspondiente
        decimal += parseInt(num[i]) * Math.pow(2, exp);
    }

    return decimal;
}

console.log(BinarioADecimal("101")); //Devuelve 5 

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
    //Si el numero es menor o igual 1, no es primo
    if (numero <= 1) {
        return numero + " no es primo";
    }

    //comprobamos si el numero es divisible por algun numero entre 2 y la mitad del número, entonces es primo

    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            //Si es divisible, entonces no es primo
            return numero + " no es primo.";
        }
    }

return numero + " es primo.";

}

console.log(esPrimo(7));
console.log(esPrimo(10));




function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇

    let resultado = ""

    //recorremos la cadena de texto de derecha a izquierda
    for (let i = cadena.length - 1; i >= 0; i--) {
        //concatenamos cada caracter al resultado
        resultado += cadena[i];
    }

        return resultado;

}

console.log(invertirCadena("ïnvertimos esta frase"));


  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}