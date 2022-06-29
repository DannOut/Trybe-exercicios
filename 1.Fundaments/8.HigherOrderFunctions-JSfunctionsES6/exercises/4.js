const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
// fazendo funcionar sem object destructuring
/* const personFilter = () => {
 return people.filter((person) => {
    if (
      person.bornIn > 1900 &&
      person.bornIn <= 2000 &&
      person.nationality === 'Australian'
    ) {
      return person;
    }
  });
};
console.log(personFilter()); */

// refatorando a questão para funcionar com object destructuring

const personFilter = (arr) => {
  return arr
    .filter(({ bornIn, nationality }) => {
      if (bornIn > 1900 && bornIn <= 2000 && nationality === 'Australian')
        return arr;
    })
    .map((arr) => arr.name);
};
console.log(personFilter(people));
