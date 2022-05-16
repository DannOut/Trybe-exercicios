/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
Copiar
let word = 'tryber'; */

let word = 'daniel';
let count = '';

for (let index = word.length -1; index >= 0; index -= 1) {
  //word.lenght, pois a posição é SEMPRE o valor o length menos 1. pois posição começa no 0 e o length começa no 1.
  count += (word[index]);
}
console.log(count);
