/* 

&& AND
|| OR
!  NOT

*/

// AND &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição');
} else console.log('Acho que houve um engano com meu pedido');

console.log('_______________AND____________-');

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

const condition3 = true;
const condition4 = true;

console.log(condition3 && condition4);

console.log('_______________AND____________-');


const currentHour = 23;
let message = '';

if (currentHour >= 22) {
  message = 'não devíamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
  message = ' Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo para o café da tarde ?';
} else if ( currentHour >= 11 && currentHour <=14){
  message = 'Hora do almoço!!!'
} else message = 'hmm.., cheiro de café recém passado!'

console.log (message);

console.log('______________OR_____________-');

/* OR || */

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}
console.log('______________OR_____________-');

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log('______________OR_____________-');

let weekDay = 'terça-feira'

if (weekDay == 'segunda-feira' || weekDay =='terça-feira' ||weekDay == 'quarta-feira'||weekDay =='quinta-feira'||weekDay =='sexta-feira'){
  console.log ('Oba, mais um dia de aprendizado na Trybe >:D');
}else
  console.log('FINALMENTE, descanso merecido UwU');


  console.log('______________NOT_____________-');

/* NOT || */

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);
//podemos usar os valores para strings
const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false
// para numeros
console.log(!42); // false
console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
//valores nulos
console.log (!null); //true 
//valores indefinidos
console.log (!!undefined); //true 