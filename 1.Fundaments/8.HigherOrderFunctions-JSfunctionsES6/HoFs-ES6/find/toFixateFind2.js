const names = ['João', 'Irene', 'Fernando', 'Maria'];

/* // não funciona
const findNameWithFiveLetters = () => {
  return names.find((name) => {
    let letters = '';
    return name.length === 5
      ? (letters = name)
      : (letters = 'nenhum nome com 5 letras');
  });
};
console.log(findNameWithFiveLetters()); */

// funciona
const findNameWithFiveLetterss = () => names.find((name) => name.length === 5);
console.log(findNameWithFiveLetterss());
