const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//  adding in object function
const nightAdd = (object, key, value) => (object[key] = value);
nightAdd(lesson2, 'turno', 'noite');

// Question 05
const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });
/* console.log(allLessons); */

// Question 06
  // verificar com a Isa amanha
const allStudents = (object) => {
  let counter = 0;
  const students = Object.values(object);
  for (let i = 0; i < students.length; i += 1) {
    counter = students[i].numeroEstudantes + counter;
  }
/*   console.log(counter); */
};
allStudents(allLessons);

// Question 07

const position = (innerObject, position) => {
const myLessons = allLessons[innerObject];
const key = Object.values(myLessons)[position];
console.log(key);

};
position('lesson1', 0);
