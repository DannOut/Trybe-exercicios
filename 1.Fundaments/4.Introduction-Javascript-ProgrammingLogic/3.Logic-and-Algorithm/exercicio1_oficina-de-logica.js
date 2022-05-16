/*1. Encontre o index através do valor de um elemento

Escreva uma algoritmo que recebe 2 parâmetros:
 - Um array
 - O valor de um elemento de tipo primitivo

Imprima no terminal a posição index em que o elemento encontra-se.

Caso não o encontre, imprima:
-----------------------------------
"Elemento não encontrado no array"
----------------------------------- */

let array = [0,'daniel',true,'ok',15];

let value = 'daniel';
let check =false;
for (let index = 0; index < array.length; index +=1){

  //console.log (index);
  if (value == array[index]){
    console.log (typeof array[index],',', array[index]);
    check = true;
    break
}
}

if (check != true){
  console.log('Elemento não encontrado no array');
}