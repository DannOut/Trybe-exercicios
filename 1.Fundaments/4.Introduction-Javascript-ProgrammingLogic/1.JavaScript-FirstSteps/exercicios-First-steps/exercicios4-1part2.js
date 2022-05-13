const a = 10;
const b = 20;
const c = 30;
const d = 1;
//comparação dois numeros
//exercicio 1
console.log('exercicios 1');
if (a > b) {
  console.log(a, 'é maior');
} else if (a == b) {
  console.log('os dois tem o mesmo valor');
} else console.log(b, 'é maior');
//exercicios 2
console.log('-------------------');
console.log('exercicios 2');
if (a >= b && a >= c) {
  console.log(a, 'é maior');
} else if (b >= a && b >= c) {
  console.log(b, 'é maior');
} else if (c >= a && c >= b) {
  console.log(c, 'é maior');
} else console.log('eles tem o mesmo tamanho');
//exercicio 3
console.log('-------------------');
console.log('exercicios 3');
if (d > 0){
  console.log ('positivo')
} else if (d < 0){
  console.log ('negativo')
} else console.log ('zero')