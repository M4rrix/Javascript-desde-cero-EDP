/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame como se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:

function bienvenida(firstname, lastname) {
    return "Bienvenida " + firstname + "" + lastname;

}

console.log(bienvenida("Maria", "Camaña"));




/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:

function calc(num1, operador, num2) {
   let resultado;

   switch (operador) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        if (num2 !== 0) {
        resultado = num1 / num2;
        }else {
            resultado = "Error: Division por cero"
        }
        break;
    default:
        resultado = "Operador no valido"
}
return resultado;

}

console.log(calc(7, '+', 4));
console.log(calc(7, '-', 4));
console.log(calc(7, '*', 4));
console.log(calc(7, '/', 4));

/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:

function temp = (max, min, porcentajeLluvia) => {
    let mensaje = "";

    if(max < 15) {
        mensaje = "Es recomdable salir con abrigo";
    } else if (max = 26 && min > 17) {
        mensaje = "El dia esta lindo";
    } else if (min > 25) {
        mensaje = "El dia esta caluroso";
    } 

    if (porcentajeLluvia > 50) {
        mensaje += ", recomendable un paraguas";
        
    }
    return mensaje;

}
 
console.log(temp(10, 5, 60));
console.log(temp(11, 3, 9));


/**********************************************************************************/

// Crea una función que reciba una contraseña, esta función tiene que determinar si contiene al menos 8 caracteres la contraseña.
// Si la contraseña contiene 8 caracteres, devolver "La contraseña es segura", en caso contrario devolver "La contraseña es insegura"
// IMPORTANTE -> la funcion debe llamarse 'checkPassword'
// Tu código:


    function checkPassword(contrasena) {
        if(contrasena.length >= 8) {
            return "La contrasena es segura"
        } else {
            return "la contrasena es insegura"
        }

    }

console.log(checkPassword("abdkbv12470"))

/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:

function stringInverso (frase) {
       // Dividir el string en un array de palabras
    let palabras = str.split(" ");
    // Invertir el orden de las palabras en el array
    let palabrasInversas = palabras.reverse();
    // Unir las palabras invertidas en un nuevo string
    let resultado = palabrasInversas.join(" ");
    // Devolver el resultado
    return resultado;
}

// Ejemplo de uso
console.log(stringInverso("Hola mundo")); // Salida: "mundo Hola"



/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    checkPassword,
    stringInverso,
}