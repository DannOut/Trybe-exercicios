const limitSquare = document.getElementsByClassName('quadrado');
const containerId = document.querySelector('#container');
const buttonCreateDiv = document.getElementsByClassName('botaoDiv');
const getDivs = document.getElementById('base');
const getTagP = document.getElementsByTagName('p');

function povoateTagP(){
  for (let keys of getTagP){
    keys.className = 'paragrafos'
  }
} povoateTagP ();

function creatingInput() {
  const createInput = document.createElement('input');
  createInput.placeholder = 'Digite uma cor !';
  createInput.id = 'input';
  createInput.style.display = 'block';
  createInput.style.width = '400px';
  containerId.appendChild(createInput);
}
creatingInput();

function creatingButtonColorCreator() {
  const createButton = document.createElement('button');
  createButton.innerText = 'Random Color';
  createButton.className = 'botaoDiv';
  createButton.style.display = 'block';
  createButton.style.alignSelf = 'center';
  createButton.style.padding = '10px';
  createButton.style.marginTop = '5px';
  containerId.appendChild(createButton);
}
creatingButtonColorCreator();

function creatingButtonReset() {
  const createButton = document.createElement('button');
  createButton.innerText = 'Reset';
  createButton.className = 'botao2';
  createButton.style.display = 'block';
  createButton.style.alignSelf = 'center';
  createButton.style.padding = '10px';
  createButton.style.marginTop = '5px';
  containerId.appendChild(createButton);
}
creatingButtonReset();

// cria um quadrado de cor aleatoria dentro da div
buttonCreateDiv[0].addEventListener('click', function (event) {
const createDivs = document.createElement('div');
let bkdRandom = Math.floor(Math.random()*16777215).toString(16);
  createDivs.style.backgroundColor ='#'+bkdRandom;
  createDivs.classList = 'quadrado'; 
  // parar quando chegar a 25
  const getTotalDivs = document.getElementsByClassName('quadrado');
  if (getTotalDivs.length < 25){
    event.target.getButton = getDivs.appendChild(createDivs);
  } else alert('Limite máximo de cores atingido')
})

const input = document.getElementById('input');
input.addEventListener('keydown', function (event) {
  const changeBody = document.getElementsByTagName('body');
  changeBody[0].style.backgroundColor = event.target.value;
});

const getClassP = document.getElementsByClassName('paragrafos')
const getQuadrado = document.getElementsByClassName('quadrado');
getDivs.addEventListener('click', function(event){
let getQuadradoColor = event.target;
getQuadradoColor.classList = 'quadrado pandora';
getQuadradoColor.classList.pandora = getQuadrado;

  console.log(getQuadradoColor);
})

