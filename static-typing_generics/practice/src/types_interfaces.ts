// TYPES E INTERFACES

class Car {
  _brand: string;
  _color: string;
  _doors: number;

  constructor(brand: string, color: string, doors: number) {
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

  turn(direction: string) {
    console.log(`O carro andou ${direction}`);
  }
}

const gol = new Car('Volkswagen', 'prata', 4);


