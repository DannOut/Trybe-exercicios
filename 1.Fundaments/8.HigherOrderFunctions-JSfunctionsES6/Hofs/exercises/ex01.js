const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

 // no reduce
const flatten = () => [...arrays[0], ...arrays[1], ...arrays[2]]
console.log(flatten());;

// Reduce

const flatten2 = () => arrays.reduce((acc, value) => acc.concat(value), []);
console.log(flatten2());