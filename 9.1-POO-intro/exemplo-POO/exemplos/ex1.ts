class Person {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/

class Dog {
  name: string;
  race: string;
  age: number;

  constructor(name: string, race: string, age: number) {
    console.log(`Creating new dog ${name}`);
    this.name = name;
    this.race = race;
    this.age = age;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

const dog1 = new Dog('Naruto', 'Poodle', 31);
console.log(dog1.age, dog1.name, dog1.race);
dog1.bark();
