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
const nightAdd = (object, key, value) =>  object[key] = value

/* Question 01 */
//  adding lesson2
nightAdd(lesson2, 'turno', 'noite');
//  checking if its correct
console.log(lesson2);
/* ______________________________________ */

/* Question 02 */
//  listing keys
const listKeys = (keys) => Object.keys(keys)
//  checking if its correct
console.log(listKeys(lesson1));
/* ______________________________________ */

/* Question 03 */
//  checking length of an object
const lengthFunc = (keys) => Object.keys(keys).length
//  checking if its correct
console.log(lengthFunc(lesson1));
/* ______________________________________ */

/* Question 04 */
// listing values in objects
const valuesObj = (values) => Object.values(values)
//  checking if its correct
console.log(valuesObj(lesson1));

