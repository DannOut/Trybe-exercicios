"use strict";
let employee = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() {
        return this.firstName + ' ' + this.lastName; // usamos o "this" para acessar as propriedades da interface
    },
};
let teacher = {
    firstName: 'John',
    lastName: 'Doe',
    subject: 'Matemática',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    sayHello() {
        return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
    },
};
let plane = {
    wheels: 2,
    color: 'white',
    maxSpeed: 1000,
    flightDestination: 'canada',
};
