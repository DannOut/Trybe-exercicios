/* 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2. 


*/

//criar uma função
//fazer um loop para percorrer o array
//encontrar a quantidade de vezes que o numero se repete dentro do array


function maxRepeatedNumber(array) {
  for (let index = 0; index < array.length; index += 1) {
    check = 0;
    //console.log ('valor do indice: ',index);
    for (let run = 0; run < array.length; run +=1){
     // console.log ('corridas no array numero ',index, ' : ',run)
     if (array[index] == array[run]){
       check +=1
       
     }
     
    }
    console.log(check);
}}
maxRepeatedNumber([2, 3, 2, 5, 8, 2, 3]);
