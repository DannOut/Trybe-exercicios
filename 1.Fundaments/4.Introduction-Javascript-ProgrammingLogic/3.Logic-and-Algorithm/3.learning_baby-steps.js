/* 3- Considere o array de strings abaixo:
Copiar
let array = ['java', 'javascript', 'python', 'html', 'css'];
Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
 */

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
let menorPalavra = '';

for (let index = 0; index < array.length; index += 1) {
  //console.log(array[index].length);
  if (menorPalavra == '' || maiorPalavra == '') {
    menorPalavra = array[index];
    maiorPalavra = array[index];
  }
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
}
console.log('a menor palavra no array é: ', menorPalavra);
console.log('a maior palavra no array é: ', maiorPalavra);
