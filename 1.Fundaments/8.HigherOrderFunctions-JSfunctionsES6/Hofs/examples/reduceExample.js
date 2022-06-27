const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbersNoRed = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbersNoRed += numbers[index];
}
console.log(sumNumbersNoRed); // 113


const sumNumbersWithRed = numbers.reduce((result, number) =>  result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbersWithRed); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113