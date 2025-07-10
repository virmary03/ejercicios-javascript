// Ejercicio 1: Calcular edad
let anioNacimiento = prompt("¿En qué año naciste?");
let anioActual = new Date().getFullYear(); 
let edad = anioActual - Number(anioNacimiento);

console.log("Tienes " + edad + " años.");