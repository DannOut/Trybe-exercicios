const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 60,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// gerador de dano aleatório
const randomDmg = (minDmg, maxDmg) => {
  return Math.round(Math.random() * (maxDmg - minDmg) + minDmg);
};

// dano do dragon aleatório Q01
const dragonDMG = (minDmg) => {
  const strengthDragon = dragon.strength;
  dragon['damage'] = randomDmg(minDmg, strengthDragon);
  return dragon.damage;
};

// dano do warrior aleatório Q02
const warriorDMG = () => {
  const strengthWarrior = warrior.strength;
  const maxDmgWarrior = strengthWarrior * warrior.weaponDmg;
  warrior['damage'] = randomDmg(strengthWarrior, maxDmgWarrior);
  return warrior.damage;
};

//dano mage
const mageDmg = () => {
  const intMinDmg = mage.intelligence;
  const intMaxDmg = intMinDmg * 2;
  let manaTotal = mage['mana'];
  mage['damage'] = randomDmg(intMinDmg, intMaxDmg);

  if (manaTotal < 15) {
    mage['damage'] = 'não possui mana suficiente';
    manaTotal -= 0;
  } else {
    manaTotal -= 15;
    mage['mana'] = manaTotal;
  }
  return { damage: mage['damage'], mana: mage['mana'] };
};

const gameActions = {
  warriorTurn: (callback) => {
    let dmgDoneWarrior = callback();
    dragon['healthPoints'] -= dmgDoneWarrior;
  },
  mageTurn: (callback) => {
    let receiveMage = callback();
    let dmgDoneMage = receiveMage.damage;
    dragon['healthPoints'] -= dmgDoneMage;
  },
  dragonTurn: (callback) => {
    let dmgDragon = callback(25); // 15 é o dano minimo do dragão
    warrior['healthPoints'] = warrior['healthPoints'] - dmgDragon;
    mage['healthPoints'] = mage['healthPoints'] - dmgDragon;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDMG);
gameActions.mageTurn(mageDmg);
gameActions.dragonTurn(dragonDMG);
console.log(gameActions.turnResults());
