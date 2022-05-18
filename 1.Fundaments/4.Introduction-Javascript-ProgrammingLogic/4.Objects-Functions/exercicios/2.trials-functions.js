/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4. */

//arrayTest = [2, 3, 6, 7, 10, 1];

//criar uma função que receba um array 
// criar uma estutura de repetição que percorra o array
//RETORNAR O INDICE DE MAIOR VALOR

function lowerValues(array) {
  //console.log (array.length);
  teste = 0;

  for (let index = 0; index < array.length ; index += 1) {
    //console.log(index);
    if (teste <= array[index]){
      teste = array[index]
     // console.log (teste);
    } 
    
  }
  console.log ('Resultado: '+teste);
}

lowerValues([2, 3, 6, 7, 10, 1]);
