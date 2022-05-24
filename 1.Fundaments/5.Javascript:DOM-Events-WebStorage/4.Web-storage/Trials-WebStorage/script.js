function creatingInput() {
  const containerId = document.querySelector('#container');
  const createInput = document.createElement('input');
  createInput.placeholder = 'enter some text';
  createInput.style.display = 'block';
  createInput.style.width = '400px';
  containerId.appendChild(createInput);
}
creatingInput();

function creatingButton() {
  const containerId = document.querySelector('#container');
  const createButton = document.createElement('button');
  createButton.innerText = 'Aperte aqui!';
  createButton.className = 'botao'
  createButton.style.display = 'block';
  createButton.style.padding = '10px';
  createButton.style.marginTop = '5px';
  containerId.appendChild(createButton);
}
creatingButton();

 let array = [1,2,3,4,5,6,7,8,9,10];

 
 function creatingDivs(event)



