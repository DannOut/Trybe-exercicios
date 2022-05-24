function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Windows ONLOAD
window.onload = function () {
  createHolidayButton('Feriados');
  displayHolidays();
  createFridayButtom('Sexta-Feira');
  displayFriday(dezFridays);
  daysMouseOver();
  daysMouseOut();
  newTaskSpan('Aprender Events');
  changeTaskColor('green');
  setTaskClass();
  setDayColor();
};

const buttonContainer = document.querySelector('.btn-holiday');

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

let daily = document.querySelector('#days'); // UL com id days
//console.log(daily);
//EXERCICIO 1
function preencherDays() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let liDeDays = document.createElement('li');
    liDeDays.className = 'day';
    liDeDays.innerText = dezDaysList[index];
    daily.appendChild(liDeDays);
  }
}

function holidaySaints() {
  let liDeDays = document.querySelectorAll('.day');
  for (let keys of liDeDays) {
    if (keys.innerText === '24') {
      keys.className = 'day holiday';
    }
    if (keys.innerText === '31') {
      keys.className = 'day holiday';
    }
  }
}
function friday() {
  let liDeDays = document.querySelectorAll('.day');
  for (let keys of liDeDays) {
    if (keys.innerText === '4') {
      keys.className = 'day friday';
    }
    if (keys.innerText === '11') {
      keys.className = 'day friday';
    }
    if (keys.innerText === '18') {
      keys.className = 'day friday';
    }
    if (keys.innerText === '25') {
      keys.className = 'day holiday friday';
    }
  }
}
preencherDays();
holidaySaints();
friday();

//EXERCICIO 2
function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';
  newButton.id = newButtonID;
  newButton.innerText = buttonName;
  buttonContainer.appendChild(newButton);
}
//EXERCICIO 3
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday'); // pegou o botão pelo id #
  let getHolidays = document.querySelectorAll('.holiday'); // pegou para trabalhar apenas os feriados
  let backgroundColor = 'rgb(238,238,238)'; // cor inicial que vai ser usado para resetar, caso clique de novo
  let setNewColor = 'yellow'; // cores para o feriado para marcar com uma cor os dias de feriado

  getHolidayButton.addEventListener('click', function () {
    // adicionou um evento e chamamos uma função anônima
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}
//EXERCICIO 4
function createFridayButtom(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';
  newButton.id = newButtonID;
  newButton.innerText = buttonName;
  buttonContainer.appendChild(newButton);
}
//EXERCICIO 5
function displayFriday(fridayArrays) {
  let getFridayButton = document.querySelector('#btn-friday'); //peguei o botão
  let fridays = document.querySelectorAll('.friday'); //peguei as sexta feira
  let newFridayText = 'Sexta!!';

  getFridayButton.addEventListener('click', function () {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
      } else {
        fridays[index].innerHTML = fridayArrays[index];
      }
    }
  });
}
let dezFridays = [4, 11, 18, 25];

//EXERCICIO 6
function daysMouseOver() {
  let allDays = document.querySelector('#days');

  allDays.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}

function daysMouseOut() {
  let allDays = document.querySelector('#days');

  allDays.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

//EXERCICIO 7

function newTaskSpan(task) {
  let taskContainer = document.querySelector('.my-tasks');
  let createTask = document.createElement('span');

  createTask.innerHTML = task;
  taskContainer.appendChild(createTask);
}

//EXERCICIO 8

function changeTaskColor(color) {
  let taskContainer = document.querySelector('.my-tasks');
  let createDiv = document.createElement('div');

  createDiv.className = 'task';
  createDiv.style.backgroundColor = color;

  taskContainer.appendChild(createDiv);
}
//EXERCICIO 9

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function (event) {
    if (selectedTask.length === 0) {
      //como a classe não existe, colocamos igual a 0 para atribuir ela, e no else, como ela existe, ela volta a ser o que era antes
      //console.log(selectedTask);
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

//EXERCICIO 10

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};
