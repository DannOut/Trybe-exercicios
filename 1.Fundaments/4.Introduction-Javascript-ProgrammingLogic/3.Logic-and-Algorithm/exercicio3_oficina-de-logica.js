/* 3. Números divisíveis por 3

Escreva um algoritmo que cria uma sequência numérica de inteiros de razão 1, o algoritmo deve receber antes de
 criar o valor inicial e final.

Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

Se houver 50 ou mais:
---------------------------------------
"Há 50 ou mais números diviseis por 3"
---------------------------------------

Caso o contrário:
--------------------------
"Sequência muito pequena."
-------------------------- */

let array =[];
let contador = 0

for (let index = 0; index < 100; index += 1){
  array[index] = Math.round((Math.random()*101) + (Math.random()*101));
}
//console.log(array);
console.log('_____________________');
 for (index = 0; index < 300; index += 1 ){
  if (array[index] % 3 == 0){
    contador += 1
  }
 }
 if (contador >= 50){
console.log('Há 50 ou mais números diviseis por 3: ',contador);
 } else console.log('Sequência muito pequena. Total de numeros impares é: ',contador);

