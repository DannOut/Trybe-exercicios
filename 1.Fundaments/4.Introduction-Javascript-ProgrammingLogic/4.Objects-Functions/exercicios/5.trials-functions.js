/* 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2. 


*/

//criar uma função
//fazer um loop para percorrer o array
//

function maxRepeatedNumber(array) {
  for (let index = 0; index < array.length; index += 1) {
    //console.log('Corrida: ', index);
    // até aqui, estou apenas correndo dentro do array
    check = 0; // precisa resetar a cada nova corrida
    temp2 = []; // armazena o valor de array[sum]
    if (temp2.length <= temp2.length){
    for (let sum = 0; sum < array.length; sum += 1) {
      //checagem de valores dentro do array
      temp = array[index]; // temporário está guardando o valor de cada corrida.
      if (temp == array[sum]) {
        // incrementando 1 caso ache um novo valor no array
        check += 1;
        temp2.push (array[sum]) // guarda o valor do maior numero repetido do array.
        //console.log (temp2);
      }
    }
   // temp2.reverse(); // 
    console.log('O maior valor: ',temp2[]);
  }
  }


}
maxRepeatedNumber([2, 3, 2, 5, 8, 2, 3]);
