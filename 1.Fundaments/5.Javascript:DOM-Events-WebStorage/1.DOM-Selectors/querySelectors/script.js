// trabalhando background do body
let BodyWorks = document.querySelector('#container');
//BodyWorks.style.backgroundColor = 'pink';
BodyWorks.style.border = '2px solid black';

// trabalhando header
let headerTrybe = document.querySelector('#header-container');
headerTrybe.style.backgroundColor = 'Green';

// trabalhando titulos h3 do emergency-tasks
let emergencyTasks = document.querySelectorAll('.emergency-tasks div h3');
for (let index = 0; index < emergencyTasks.length; index += 1) {
  emergencyTasks[index].style.backgroundColor = 'purple';
}

// trabalhando titulos h3 do no-emergency-tasks
let notEmergencyTasks = document.querySelectorAll('.no-emergency-tasks div h3');
for (let index = 0; index < notEmergencyTasks.length; index += 1) {
  notEmergencyTasks[index].style.backgroundColor = 'black';
}

// trabalhando divs do emergency-tasks
let divEmergencyTasks = document.querySelectorAll('.emergency-tasks');
for (let index = 0; index < divEmergencyTasks.length; index += 1) {
  divEmergencyTasks[index].style.backgroundColor = 'salmon';
}

// trabalhando divs do not-emergency-tasks
let divNotEmergencyTasks = document.querySelectorAll('.no-emergency-tasks');
for (let index = 0; index < divNotEmergencyTasks.length; index +=1){
  divNotEmergencyTasks[index].style.backgroundColor = '#EEEE9B';
}
// trabalhando footer-container
let footerContainer = document.querySelector('#footer-container');
footerContainer.style.backgroundColor = 'RGB(1,50,32)'
