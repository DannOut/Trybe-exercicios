let pizzas = {
  sabor: '4 queijos',
  preço: 39.90,
  bordaCatupiry: true
};

for(let key in pizzas){
  console.log(pizzas[key]);
}

let pizzasDoces = ['chocolate','banana','morango']

for (let key in pizzasDoces){
  console.log(key,pizzasDoces[key]);
}

//_________________________________________________________________________
console.log('______________________________________________________________');
//_________________________________________________________________________

let food = ['hamburguer', 'bife', 'acarajé'];
//for-In
for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

//for-Of
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;



let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let index in names){
  console.log('Olá',names[index]);
};


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let index in car){
console.log(index,car[index]);
}