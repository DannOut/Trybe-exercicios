// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
let a = 11;
let b = 21;
let c = 30;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
  console.log(a % 2 == 0 || b % 2 == 0 || c % 2 == 0, '// um dos numeros é pár');
} else console.log((a % 2 == 0 || b % 2 == 0 || c % 2 == 0), '// tem apenas numero impar');
console.log('_______________________________\n' );
//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

let d = 11;
let e = 20;
let f = 31;

if (!(d % 2 == 0 || e % 2 == 0 || f % 2 == 0)) {
  console.log(!(d % 2 == 0 || e % 2 == 0 || f % 2 == 0), '// tem numeros impar');
} else console.log(!(d % 2 == 0 || e % 2 == 0 || f % 2 == 0), '// tem numero par');