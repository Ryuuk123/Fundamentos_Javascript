/*
var se utiliza para declarar variables globales o locales, y se puede reasignar su valor posteriormente.
let se utiliza para declarar variables que pueden ser reasignadas, pero no pueden ser redeclaradas dentro del mismo ámbito.
const se utiliza para declarar constantes, es decir, variables cuyo valor no puede ser reasignado después de su inicialización.

*/

var nombre;  // declarar una variable con var
nombre = "Juan"; // asignar un valor a la variable nombre

var apellido = "Pérez"; // declarar y asignar un valor a la variable  en una sola linea

console.log(nombre); // imprimir el valor de la variable nombre
console.log(apellido); // imprimir el valor de la variable apellido

let edad = 30; // declarar y asignar una variable con let
console.log(edad); // imprimir el valor de la variable edad

edad = 31; // reasignar un nuevo valor a la variable edad
console.log(edad); // imprimir el nuevo valor de la variable edad



const PI = 3.1416; // declarar y asignar una constante con const
console.log(PI); // imprimir el valor de la constante PI