const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

/* const toObject = (arr) => {
 const [value1, value2, value3] = arr
 return `{name:${value1}, brand:${value2}, year:${value3}}`
} */

const toObject = ([name, brand, year]) => ({ name, brand, year });

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));
