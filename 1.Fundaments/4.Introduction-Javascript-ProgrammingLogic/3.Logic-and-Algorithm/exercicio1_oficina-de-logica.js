/*1. Encontre o index através do valor de um elemento

Escreva uma algoritmo que recebe 2 parâmetros:
 - Um array
 - O valor de um elemento de tipo primitivo

Imprima no terminal a posição index em que o elemento encontra-se.

Caso não o encontre, imprima:
-----------------------------------
"Elemento não encontrado no array"
----------------------------------- */

let array = [
  5,
  'Ewerton',
  10,
  20,
  'Daniel',
  40,
  'Maycon',
  'Julia',
  'Caio',
  true,
  '',
];

let encontrar = 'josue';
let variavel;
for (index = 0 ; index < array.length; index += 1) {
  if (encontrar === array[index]) {
      variavel = index;
      console.log(variavel);
  }
}
  if (variavel == encontrar){
    console.log("Elemento não encontrado no array");
  } else {
    console.log('a posição é: ',variavel);
  }
  