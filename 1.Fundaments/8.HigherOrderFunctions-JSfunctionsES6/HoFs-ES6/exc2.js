// minha função com 1 parãmetro
const lottery = (gameNumber) => {
  const randomNumber = Math.ceil(Math.random() * 6);
  winner = () =>
    gameNumber === randomNumber
      ? 'Parabéns você ganhou!'
      : 'Tente novamente';
  return winner();
};

console.log(lottery(3));

/* -------------------------------------------------------------------------- */
// Gabarito curso
const numberChecker = (myChoosed, numberSorted) => myChoosed === numberSorted;

const lottery2 = (myNumber, functionToReturn) => {
  const randomNumber = Math.ceil(Math.random() * 6);
  return functionToReturn(myNumber, randomNumber)
    ? 'Parabéns você ganhou!'
    : 'Tente novamente';
};

console.log(lottery2(3, numberChecker));
