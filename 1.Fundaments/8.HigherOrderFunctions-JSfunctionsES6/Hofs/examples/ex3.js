/* const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 100);
console.log(bigger); // 85 */

const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const naruto = (acc, num) => acc + num;
const sumNumbers = numbers2.reduce(naruto); 

console.log(sumNumbers); // 113
