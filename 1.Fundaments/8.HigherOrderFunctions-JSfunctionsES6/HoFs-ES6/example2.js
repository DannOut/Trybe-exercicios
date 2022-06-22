


const wakeUp = () => 'Acordando!';
const breakfeast = () => 'Bora tomar café';
const sleeping = () => 'Partiu Dormir';

const doingThings = (func) => console.log(func());

// Ao chamar a função doingThings:
doingThings(breakfeast);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!