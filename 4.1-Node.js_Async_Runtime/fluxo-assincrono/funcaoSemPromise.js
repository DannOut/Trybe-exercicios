function calcularDivisão(num1, num2) {
  if (num2 == 0) throw new Error('Não pode ser feito uma divisão por zero');
  return num1 / num2;
}

// calcularDivisão(2,0);

try {
  const resultado = calcularDivisão(2, 1);
  // console.log(`resultado: ${resultado}`);
  console.log('resultado: %s', resultado);
  // %s -> outputs string
  // %f -> outputs floating-point value
  // ... https://developer.mozilla.org/en-US/docs/Web/API/console
} catch (e) {
  console.log(e.message);
}

// for (let i = 0; i < 5; i++) {
//   console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
// }
