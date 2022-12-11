interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: 'John',
  lastName: 'Doe',
  fullName(): string {
    return this.firstName + ' ' + this.lastName; // usamos o "this" para acessar as propriedades da interface
  },
};

// employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"

//* Uma interface também pode estender de uma outra, o que permite que copiemos as propriedades de uma interface em outra, proporcionando mais flexibilidade na maneira de separará-las em componentes reutilizáveis. Podemos estender uma interface, usando a palavra reservada extends:

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  subject: 'Matemática',
  fullName(): string {
    return this.firstName + ' ' + this.lastName;
  },
  sayHello(): string {
    return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  },
};

//  Exercícios

//         Crie uma interface cujo objeto represente um Automóvel.
//         Crie uma interface cujo objeto represente um Felino.
//         Crie uma interface cujo objeto represente uma Aeronave.

interface Auto {
  wheels: number;
  color: string;
  maxSpeed: number;
}

interface Cat {
  _name: string;
  _color: string;
  _vaccinated: boolean;
  _age: number;
}

interface Plane extends Auto {
  flightDestination: string;
}

let plane: Plane = {
  wheels: 2,
  color: 'white',
  maxSpeed: 1000,
  flightDestination: 'canada',
};
