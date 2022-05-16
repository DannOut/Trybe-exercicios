/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
Copiar
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
 */

let number = 5;

for (let index = number -1 ; index >=1; index -=1){ // o pulo do gato ta no fato do index ser igual ao number - 1 para conseguir realizar a multiplicação fatorial.
  number = number * index;

}
console.log(number);