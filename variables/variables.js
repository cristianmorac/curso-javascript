/* Variables */

/**
 *? var = variables globales se puede declarar varias veces
 *? let = no deja declarar la variable 2 veces y se declara localmente en funciones o script
 *? const = constantes no se puede modificar
*/

var nombre = "Cristian";
var edad = 30
var mensaje_final = "Lorraine"+" y "+nombre
/* Ver cuadro de texto */
alert(mensaje_final);
var preguntas = prompt("Escriba algo");
/* Ver en consola */
console.log(mensaje_final)

/* Operaciones aritmeticas */
var numero = 100;
var numero2 = 200;
var numero = numero + 10 -5 * 10 / 20;
var peso = 79
var estatura = 1.72
var IMC = peso / estatura
console.log(IMC)
console.log(numero2)
numero2 +=10;
console.log(numero2)
numero2 *=10;
console.log(numero2)
numero2 -=2;
console.log(numero2)
numero2 /= 2;
console.log(numero2)
