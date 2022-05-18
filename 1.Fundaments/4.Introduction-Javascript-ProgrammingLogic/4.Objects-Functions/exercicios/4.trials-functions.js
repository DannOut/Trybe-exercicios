/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.  */

//criar uma função que receba um array ok
//percorrer todo o array de nomes ok
//percorrer cada palavra do array
//retornar tamanho da palavra do array ok
//armazenar o tamanho da palabra numa variavel ok
// comparar com o valor seguinte ok
//ao final, retornar a maior palabra dentro do array ok

function higherWord(array){
  let higherWord = '';
  for (let index = 0; index < array.length; index +=1){
    if (higherWord.length < array[index].length){
      higherWord = array[index];
    }
  }
console.log(higherWord);
}
higherWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);