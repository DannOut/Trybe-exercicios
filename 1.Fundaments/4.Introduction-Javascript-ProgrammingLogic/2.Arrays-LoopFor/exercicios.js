let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let values of numbers) {
  console.log(values);
}
console.log('_________________');
console.log('_________________');

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma = numbers[index] + soma;
}
console.log('o total é :' + soma);

console.log('_________________');
console.log('_________________');

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = 0;
for (let index = 0; index < numbers.length; index += 1) {
  media = numbers[index] + media;
}
console.log(media);
console.log(numbers.length);
media = media / numbers.length;
console.log('a média aritimética é:' + media);
//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
  console.log('\nvalor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}
console.log('_________________');
console.log('_________________');
//🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let info = 0;
for (let maior = 0; maior < numbers.length; maior += 1) {
  if (numbers[maior] >= info) {
    info = numbers[maior];
  }
}
console.log('o maior valor do array é: ' + info);
console.log('_________________');
console.log('_________________');
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
numbers = [4, 6, 8, 14, 70, 8, 100, 2, 32, 20];
let impar = [];
let par = [];
for (let value = 0; value < numbers.length; value += 1) {
  if (!(numbers[value] % 2 == 0)) {
    impar.push(numbers[value]);
  } else {
    par.push(numbers[value]);
  }
}
if (impar.length == 0) {
  console.log('nenhum valor impar encontrado');
} else {
  console.log('os valores impares são: ', impar);
}
console.log('os valores pares são: ', par);
console.log('_________________');
console.log('_________________');

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

numbers = [4, 2, 8, 14, 70, 8, 100, 1, 32, 20];

menor = numbers[0];
for (index = 1; index < numbers.length; index += 1){
  if (menor > numbers[index]){
    menor = numbers[index];
  }
}
console.log (numbers[0])
console.log (menor)

console.log('_________________');
console.log('_________________');

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let life =[];

for (index = 0; index <= 25; index += 1){
  life.push ( (index + 3) + index * 2);
}
console.log(life);

console.log('_________________');
console.log('_________________');

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let newlife =[]
for ( index = 0; index < life.length; index += 1){
  newlife.push (life[index] / 2)

}
console.log (`os numeros do array divididos por 2 são: ${newlife}`);