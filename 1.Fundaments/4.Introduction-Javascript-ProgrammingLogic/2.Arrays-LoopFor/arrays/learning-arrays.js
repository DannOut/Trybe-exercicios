let pizza1 = '4 queijos';
let pizza2 = 'calabresa';
let pizza3 = 'marguerita';
let pizza4 = 'Frango';
let pizza5 = 'bacon';
// muito longo, pode se transformar em um array, veja abaixo:

let pizzas = ['4 queijos', 'Frango com catupiry', 'marguerita','frango','chocolate'];

console.log('Menu de sabores', pizzas);

pizzas[5] = 'peito de peru';

console.log(pizzas);

pizzas.push('jaca');

console.log(pizzas, pizzas.length);

console.log (pizzas.sort());
//organiza em alfabética ou crescente

console.log(pizzas[1]);


for (let index = 0; index < pizzas.length;index += 1){
  console.log (pizzas[index]);
}