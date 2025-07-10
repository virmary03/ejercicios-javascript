let contrasena = prompt("Ingresa la contraseña:");

while (contrasena !== "1234") {
  contrasena = prompt("Contraseña incorrecta. Intenta de nuevo:");
}

alert("Contraseña correcta");