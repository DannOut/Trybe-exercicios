const readline = require('readline-sync');

// console.log('Hello World!');

const name = readline.question('Qual é seu nome? ');
const age = readline.questionInt('QUal sua idade? ');

console.log(`Hello ${name}! You are ${age} Years old!`);