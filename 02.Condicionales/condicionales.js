// Ejercicio de Ejemplo:
/* TITULO - NO MODIFICAR*/ document.write('<div class="titulo"><p>Ejercicio de Ejemplo - Resultado:</p></div>')
// En la Escuela de Programación tienen como condicion para poder inscribirse a los cursos, la persona tenga 18 años o más.
// Pidele al usuario que ingrese su edad ( usando prompt() ), y en caso que tenga 18 años o más imprima un mensaje indicandole que puede inscribirse.
// caso contrario se le indica que no puede inscribirse y la razón.
// Tu codigo 👇:
let edadAlumno = prompt("Ingresa tu edad y te diremos si podes ingresar o no")

if (edadAlumno >= 18) {
        document.write("Podes ingresar")
} else {
        document.write("No podes ingresar por tener menos de 18, lo lamento.")
}

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 1 - Calificación | Resultado:</p></div>')
// Ejercicio N° 1:
// Escribe un programa que solicite al usuario ingresar una calificación del 0 al 100 y luego muestre un mensaje según la siguiente escala:
// Calificación de 90 o más: "Excelente"
// Calificación entre 70 y 89: "Bueno"
// Calificación entre 60 y 69: "Suficiente"
// Calificación menor a 60: "Insuficiente"
// Tu codigo 👇:
let calificación = prompt("Ingresa tu calicacion del 0 al 100");

if (calificación >= 90) {
        document.write("Excelente");
} else if (calificación >= 70 && calificación <= 89) {
        document.write("Bueno");
} else if (calificación >= 60 && calificación <= 69) {
        document.write("Suficiente");
} else {
        document.write("Insuficiente");
}

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 2 - Par o Impar | Resultado:</p></div>')
// Ejercicio N° 2:
// Escribe un programa que solicite al usuario ingresar un número entero y luego determine si es par o impar.
// Tu codigo 👇:
let usuario = prompt("Ingresa un numero entero y te diremos si es par o impar");

if (numero % 2 === 0) {
        document.write("El numero ingresado es par");
} else {
        console.log("El numero ingresado es impar");
}

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 3 - Día de la Semana | Resultado:</p></div>')
// Ejercicio N° 3:
// Escribe un programa que solicite al usuario ingresar un número del 1 al 7 representando un día de la semana, y luego imprima el nombre del día correspondiente.
// Por ejemplo, si el usuario ingresa 1, el programa debe imprimir "Lunes".
// Tu codigo 👇:

let usuario = prompt("ingrese un numero de 1 al 7 representando un dia de la semana")

switch(usuario) {
        case 1:
                console.log("lunes")
                break;
        case 2:
                console.log("martes")
                break;
        case 3:
                console.log("miercoles")
                break;
        case 4:
                console.log("jueves")
                break;
        case 5:
                console.log("viernes")
                break;
        case 6:
                console.log("sabado")
                break;
        case 7:
                console.log("domingo")
                break;
}

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 4 - Antigüedad laboral | Resultado:</p></div>')
// Ejercicio N° 4:
// Escribe un programa que solicite al usuario ingresar su antigüedad en años en una empresa y su salario actual.
// Si la antigüedad es mayor o igual a 5 años, y el salario es menor a $500,
// el programa debe imprimir un mensaje que indique que el empleado es elegible para una bonificación del 10% de su salario actual.
// Tu codigo 👇:


//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 5 - Rango de edad | Resultado:</p></div>')
// Ejercicio N° 5:
// Escribe un programa que solicite al usuario ingresar su edad y luego determine en qué rango de edad se encuentra:
// Menor de 18 años: "Menor de edad"
// Entre 18 y 65 años: "Adulto"
// Mayor de 65 años: "Senior"
// Tu codigo 👇:
let usuario = prompt("Ingresa tu edad y te digo en que rango etaria te encontras")

if (usuario < 18) {
        document.write("Sos menor de edad");
} else if (usuario >= 18 && usuario <= 65) {
        document.write("Sos adulto");
} else if (usuario > 65) {
        document.write("Sos un senior")
}

//_________________________________________


// 👇👇 NO MODIFICAR 👇👇

const footer = `

<footer>
        <a href="https://github.com/AvLeo/Javascript-desde-cero-EDP" target="_blank">REPO GITHUB</a>
        <a href="https://leo-a.notion.site/JavaScript-8243598cde1e4cc5aea0fc1eeb7a090f?pvs=74" target="_blank">Notion</a>
</footer>


`

document.write(footer)