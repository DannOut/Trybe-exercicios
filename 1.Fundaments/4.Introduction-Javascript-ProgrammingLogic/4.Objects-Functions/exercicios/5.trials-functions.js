/* 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2. 


*/

//criar uma função
//fazer um loop para percorrer o array
//encontrar a quantidade de vezes que o numero se repete dentro do array

function maxRepeatedNumber(array) {
  let guardHigherNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    let checker = 0;
    let count = 0;
    for (let i = 0; i < array.length; i += 1) {
      checker = array[index];
      if (checker == array[i]) {
        count += 1;
      }
    }
    if (guardHigherNumber < count) {
      guardHigherNumber = array[index];
    }
  }
  console.log(guardHigherNumber);
}
maxRepeatedNumber([2, 3, 2, 5, 8, 2, 3]);
