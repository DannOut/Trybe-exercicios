// usamos a palavra reservada class para definir uma classe
class Person {
  name: string;
  birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
  age: number;
  // aprenderemos mais sobre o construtor na próxima seção
  // considere-o como uma função utilizada para construir um objeto a partir da classe,
  // nele recebemos todos os dados necessários para construir um objeto de pessoa
  constructor(name: string, birthDate: Date, age: number) {
    // usamos o this para acessar as propriedades da instância da classe,
    // ele representa a própria instância que estamos criando
    // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
    this.name = name;
    this.birthDate = birthDate;
    this.age = age;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`);
  }

  walk(): void {
    console.log(`${this.name} está andando.`);
  }
}

// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person('Jane Doe', new Date('1986-01-01'), 27);
const person2 = new Person('Jon Doe', new Date('1980-08-05'), 42);

console.log(person1);
person1.speak();

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "age": 27
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "age": 42
// }
// "Jon Doe está andando."

//* Também é possível dizer que uma das propriedades da nossa classe Person não é obrigatória para criarmos um objeto pessoa. Podemos usar o caractere ? para marcar uma propriedade como opcional, o que faz com seu tipo seja um union type entre o tipo original e undefined. Se quiséssemos dizer que a idade não é obrigatória nossa classe ficaria assim:

class Person2 {
  name: string;
  birthDate: Date;
  age?: number;

  constructor(name: string, birthDate: Date, age?: number) {
    this.name = name;
    this.birthDate = birthDate;
    this.age = age;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`);
  }

  walk(): void {
    console.log(`${this.name} está andando.`);
  }
}

//* A criação das nossas instâncias de Person poderiam ou não serem criadas com a idade.

const person3 = new Person2('Jane Doe', new Date('1986-01-01'));
const person4 = new Person2('Jon Doe', new Date('1980-08-05'), 31);

console.log(person3);
person1.speak();

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z"
// }
// "Jane Doe está falando."

console.log(person4);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "age": 31
// }
// "Jon Doe está andando."

//* E poderíamos adicionar essa informação depois da criação:

const person5 = new Person2('Jane Doe', new Date('1986-01-01'));

console.log(person5);
person5.speak();

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z"
// }
// "Jane Doe está falando."

person5.age = 23;
console.log(person5);

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "age": 23
// }

//TODO  Exercícios

/**
 *?  Crie uma classe cujo objeto represente um Cachorro.
 *?  Crie uma classe cujo objeto represente uma Casa.
 *?  Crie uma classe cujo objeto represente um Voo.
 */

interface Dog {
  _name: string;
  _color: string;
  _vaccinated: boolean;
  _age: number;
}

class Dog {
  constructor(name: string, color: string, age: number) {
    this._name = name;
    this._color = color;
    this._age = age;
  }

  latir() {
    console.log(`CATCHORRO ${this._name} tem ${this._age} anos !`);
  }

  vacinado(isVaccinated: boolean) {
    if (isVaccinated) return console.log(`CATCHORRO ${this._name} é vacinado!`);
    console.log(`CATCHORRO ${this._name} não é vacinado !`);
  }
}

const dogTiao = new Dog('Tião', 'moreno claro', 78);

dogTiao.vacinado(false);

class House {
  _address: string;
  _number: number;
  _hasTwoFloors: boolean;

  constructor(address: string, number: number, hasTwoFloors: boolean) {
    this._address = address;
    this._number = number;
    this._hasTwoFloors = hasTwoFloors;
  }
}

interface Flight {
  _planeName: string;
  _planeCompany: string;
  _destination: number[];
}

class Flight {
  constructor(planeName: string, planeCompany: string, destination: number[]) {
    this._destination = destination;
    this._planeCompany = planeCompany;
    this._planeName = planeName;
  }
}

const flight = new Flight('narutoSa', 'Shipuu', [12, 12, 12, 12, 12]);
