/* const sum = (value1, value2) => value1 + value2;

console.log(sum(2, 3)); */

/* const sum = (value1, value2) => value1 + value2;

console.log(sum(2, '3')); // resultado: 23 */

/* const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum(2, '3')); */

/* const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3'));
 */
// Analisando linha 20
// throw é uma palavra reservado que ser para lançar uma exceção criado pelo programador (eu), é uma forma de customizar o erro

// operador new serve para criar um objeto personalizado ou nativo do JavaScript.

//Error é um objeto nativo do JavaScript que representa um erro. Quando você o chama com o operador new, você cria uma cópia deste objeto, que será lançada como uma exceção no seu código.

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3'));