// Faça uma lista com as suas frutas favoritas
const specialFruit = ['kiwi', 'morango', 'cú'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pente', 'naruto', 'faca'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));