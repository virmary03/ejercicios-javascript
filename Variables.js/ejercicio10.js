let numero = prompt("Ingresa un número para ver su tabla de multiplicar:");
numero = Number(numero);  // Convertir a número

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}