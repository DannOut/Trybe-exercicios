const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((arr) => name === arr);
//Adicione seu código aqui;

console.log(hasName(names, 'Cláudia'));

function hasNames(arr, name) {
  return arr.some((arr) => {
    return name === arr;
  });
}
//Adicione seu código aqui;

console.log(hasNames(names, 'Bruna'));
