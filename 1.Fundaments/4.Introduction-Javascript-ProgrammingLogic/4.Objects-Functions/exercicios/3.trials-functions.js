/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.
 */

function lowerValues(array) {
  //console.log (array.length);
  teste = 0;

  for (let index = 0; index < array.length ; index += 1) {
    //console.log(index);
    if (teste >= array[index]){
      teste = array[index]
     // console.log (teste);
    } 
    
  }
  console.log ('Resultado: '+teste);
}

lowerValues([2, 4, 6, 7, 10, 0, -3]);