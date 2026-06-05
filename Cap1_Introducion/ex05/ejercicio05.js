//operaciones matematicas

let a, b;
let c, d;

let suma, resta, multiplicacion, division;

// obtener datos a travesdel usuario

a = prompt("Ingrese un numero");
b = prompt("Ingrese otro numero");

// resultado de las operaciones

suma = a + b; // Aqui la operacion da un error debido a que se concatenan los datos
document.write("El resultado de la suma es: ", suma, "<br>");
console.log("El resultado de la suma es: ", suma);

resta = a -b;
document.write("El resultado de la resta es: ", resta, "<br>");
console.log("El resultado de la resta es: ", resta);

multiplicacion = a * b;
document.write("El resultado de la multiplicacion es: ", multiplicacion, "<br>");
console.log("El resultado de la multiplicacion es: ", multiplicacion);

division = a / b;
document.write("El resultado de la division es: ", division, "<br>");
console.log("El resultado de la division es: ", division);

residuo = a % b;
document.write("El resultado del residuo es: ", residuo, "<br>");
console.log("El resultado del residuo es: ", residuo);

potencia = a ** b;
document.write("El resultado de la potencia es: ", potencia, "<br>");
console.log("El resultado de la potencia es: ", potencia);

// Obtener datos a traves del usuario
c = parseInt(prompt("Ingrese un numero entero"));
d = parseInt(prompt("Ingrese otro numero entero"));

suma = c + d;
resta = c - d;
multiplicacion = c * d;
division = c / d;
residuo = c % d;
potencia = c ** d;

document.writeln("Las operaciones resultantes son: ",
"Suma: ", suma, "<br>",
"Resta: ", resta, "<br>",
"Multiplicacion: ", multiplicacion, "<br>",
"Division: ", division, "<br>",
"Residuo: ", residuo, "<br>",
"Potencia: ", potencia, "<br>"
    
    
);


console.log("Las operaciones resultantes son: ",
"suma: ", suma,
"Resta: ", resta,
"Multiplicacion: ", multiplicacion,
"Division: ", division,
"Residuo: ", residuo,
"Potencia: ", potencia
    
    
    );


