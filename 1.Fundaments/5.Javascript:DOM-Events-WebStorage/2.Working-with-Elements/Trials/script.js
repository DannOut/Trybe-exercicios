//PARENT NODE
let iAmHere = document.getElementById('elementoOndeVoceEsta');
//console.log(iAmHere.innerHTML); //começei aqui
iAmHere.parentNode.style.background = 'pink';

document.getElementById('primeiroFilhoDoFilho').innerText = 'Daniel';

document.getElementById('pai').firstElementChild.innerText = 'desentes';

iAmHere.previousElementSibling.style =
  'background-color: red;font-size:20px;color:white';

console.log(iAmHere.parentNode.innerText);

iAmHere.parentNode.style.background = 'green';

iAmHere.nextElementSibling.style.background = 'orange';
console.log(iAmHere.nextElementSibling);

console.log(
  document.getElementById('pai').lastElementChild.previousElementSibling
); //demorei a entender
//verificar na monitoria

// CREATING ELEMENTS

let tentandoEntender = 'será que sou irmão de elementoOndeVoceEsta ?';
let tentandoEntender2 = 'será que sou Filho de elementoOndeVoceEsta ?';
let tentandoEndender3 = 'FILHO DO PRIMEIRO FILHO?';

let father = document.querySelector('#elementoOndeVoceEsta').parentElement;
let childFather = document.createElement('section');
childFather.innerText = tentandoEntender;
father.appendChild(childFather);

let son = document.querySelector('#elementoOndeVoceEsta');
let MySon = document.createElement('section');
MySon.innerText = tentandoEntender2;
son.appendChild(MySon);

let firstGrankid = document.querySelector('#primeiroFilhoDoFilho');
let grandSonKid = document.createElement('p');
grandSonKid.innerText = tentandoEndender3;
firstGrankid.appendChild(grandSonKid);

let lastAcess = document.getElementsByTagName('p')[0];

console.log(lastAcess.parentElement.parentElement.nextSibling.nextSibling);

// document.querySelector('#quartoEUltimoFilho').remove();
// document.querySelector('#primeiroFilho').remove();

let elements = ( document.querySelectorAll('section'));


for (let index = 0; index < elements.length -1; index +=1){
//console.log(elements.length);
if ((elements[index]) !== (elements[index].id('#pai'))){
  elements.remove()
}}