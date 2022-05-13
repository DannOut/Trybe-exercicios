let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café
console.log('__________________________');
let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro
console.log('__________________________');

let indexOfTask = tasksList.indexOf('Reunião'); //procurar o índice de um item no Array.
console.log(indexOfTask);

console.log('__________________________');

tasksList.push('fazer exercicios da trybe'); //adiciona uma nova tarefa
console.log(tasksList);
console.log('__________________________');

tasksList.pop(); // remove a última tarefa
console.log(tasksList);
console.log('__________________________');

tasksList.shift(); // remove a primeira tarefa
console.log(tasksList);

console.log("__________________________")

//exercicios exemplos:

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu1[1] ;

console.log(menuServices);
console.log("__________________________")

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio') ;

console.log(indexOfPortfolio);
console.log("__________________________")

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push ('Contato');
console.log(menu3);