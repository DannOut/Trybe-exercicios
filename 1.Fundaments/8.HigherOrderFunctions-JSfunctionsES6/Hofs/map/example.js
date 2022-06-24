const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

/* ---------------------------------------------------------------------------- */

const personsMap = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNamesasVar = persons.map((person) => `${person.firstName} ${person.lastName}`);
console.log(fullNamesasVar);

const fullNamesMap = () => personsMap.map((person) => `${person.firstName} ${person.lastName}`);
console.log(fullNamesMap()); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]