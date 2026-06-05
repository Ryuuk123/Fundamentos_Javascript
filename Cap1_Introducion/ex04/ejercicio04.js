let nombre, edad, direccion, movil, email; //  se pueden crear varias variables del mismo tipo.

// prompt es una  palabra reservada en JavaScript que despliega una funcion y sale un mensaje de tipo alert para el usuario.

nombre = prompt("Ingrese su nombre completo"); // pedir datos al usuario
document.write("Su nombre completo es: " + nombre + "<br>"); // muestra el mensaje en la pagina web
console.log("bienvenido: ", nombre);

edad = prompt("Ingrese su edad"); // pedir datos al usuario
document.write("Tu edad es:", edad, "<br>"); 
console.log("Tu edad es: ", edad); //muestra el mensaje en la consola del navegador

direccion = prompt("Ingrese su direccion"); // pedir datos al usuario
document.write("Tu direccion es: ", direccion, "<br>"); 
console.log("Tu direccion es: ", direccion); 

movil = prompt("Ingrese su numero de celular"); // pedir datos al usuario
document.write("Tu numero de celular es: ", movil, "<br>"); 
console.log("Tu numero de celular es: ", movil);

email = prompt("Ingrese su correo electronico"); // pedir datos al usuario
document.write("Tu correo electronico es: ", email, "<br>"); 
console.log("Tu correo electronico es: ", email);