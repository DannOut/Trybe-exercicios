/* 2. Retorne os números ímpares

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão:
----------------
"x, y, z, ...n"
---------------- */

let valor = 50;
let array = [];
for (let index = 1; index <= valor; index += 1){
  if (!(index % 2) == 0){
    array.push (index);
  }
}
console.log(array);