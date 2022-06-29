const person1 = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};
const { nationality1 } = person1;
console.log(nationality1);



const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian