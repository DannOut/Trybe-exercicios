import {
  Pizza,
  CommonPizza,
  PizzaVegetarian,
  PizzaSugar,
} from '../interfaces/Pizza';

const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
};

console.log(calabresa);

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
};

console.log(marguerita);

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4,
};

console.log(nutella);

const Pepperoni: CommonPizza = {
  flavor: 'Pepperoni',
  slices: 4,
};

console.log(Pepperoni);

const frango: CommonPizza = {
  flavor: 'Frango',
  slices: 6,
};

console.log(frango);

const saborVegano1: PizzaVegetarian = {
  flavor: 'Cogumelos',
  slices: 4,
};

console.log(saborVegano1);

const saborVegano2: PizzaVegetarian = {
  flavor: 'Marguerita',
  slices: 8,
};

console.log(saborVegano2);

const sugarPizza: PizzaSugar = {
  flavor: 'Goiabada com Queijo',
  slices: 4,
};

console.log(sugarPizza);
