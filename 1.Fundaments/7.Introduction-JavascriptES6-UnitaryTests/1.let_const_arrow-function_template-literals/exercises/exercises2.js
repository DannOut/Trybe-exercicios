/* // Exercises 1 // */

// recursividade numa linha só
const recursive = (a) => (a === 0 ? 1 : a * recursive(a - 1));
console.log(recursive(4));

//_________________________________________//

// Exercises 2

const longestWord = (text) => {
  const splited = text.split(' ');
  let highest = '';
  for (let i = 0; i < splited.length; i += 1) {
    (splited[i] > splited[i + 1] ? highest = splited[i + 1]: highest = splited[i]);
  }
  console.log(highest);
};
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'); // retorna 'aconteceu'
