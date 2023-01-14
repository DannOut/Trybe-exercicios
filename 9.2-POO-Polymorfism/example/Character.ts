abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  constructor(private _name: string) {
    super();
  }
  talk() {
    console.log(`${this._name} é Melee`);
  }
  specialMove(): void {
    console.log('Melee Special');
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string) {
    super();
  }
  talk() {
    console.log(`${this._name} é Ranged`);
  }
  specialMove(): void {
    console.log('Ranged Special');
  }
}

function index(character: Character) {
  character.talk();
  character.specialMove();
}

const naruto = new MeleeCharacter('Naruto');
const sakura = new LongRangeCharacter('Temtem');

index(naruto);
index(sakura);
