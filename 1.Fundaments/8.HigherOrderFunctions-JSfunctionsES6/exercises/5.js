const myList = [1, 2, 3];

// escreva swap abaixo, max: 1 linha código e 1 chamar função

// Resolvendo com função
const swap = ([a, b, c]) => console.log([c, b, a]);
swap(myList)

// resolvendo sem função
const [a, b, c] = myList;
console.log([c, b, a]);
