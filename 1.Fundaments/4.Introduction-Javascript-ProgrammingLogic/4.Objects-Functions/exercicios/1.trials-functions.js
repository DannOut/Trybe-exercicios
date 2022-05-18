/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome('arara');
Retorno esperado: true
verificaPalindrome('desenvolvimento');
Retorno esperado: false */

function palindromo(palavra) {
  // dividir a palavra em varios pedaços //FEITO
  //percorrer toda a palavra //feito
  // comparar a palavra inicial com a palavra final //feito
  // se verdadeiro true, se falso false //feito
  let separador = palavra.split('');
  let comparador = false;

  for (let index = 1; index <= separador.length; index += 1) {
    if (separador[index - 1] == separador[separador.length - index]) {
      comparador = true;
    } else {
      comparador = false;
      break;
    }
  }
  console.log(comparador);
}
palindromo('arara');
