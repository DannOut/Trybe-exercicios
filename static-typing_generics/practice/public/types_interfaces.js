"use strict";
// TYPES E INTERFACES
class Car {
    constructor(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    honk() {
        console.log('A bozina foi ativada!');
    }
    turnOn() {
        console.log('O carro foi Ligado');
    }
    turnOff() {
        console.log('O carro foi desligado');
    }
    speedUp() {
        console.log('Aumentou a velocidade');
    }
    speedDown() {
        console.log('Diminuiu a velocidade');
    }
    stop() {
        console.log('O carro parou');
    }
    turn(direction) {
        console.log(`O carro andou ${direction}`);
    }
}
const gol = new Car('Volkswagen', 'prata', 4);
