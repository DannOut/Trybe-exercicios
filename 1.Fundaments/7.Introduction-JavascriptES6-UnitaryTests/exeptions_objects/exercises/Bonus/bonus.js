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

/* _________________________ */

/* const createReport = (object, professor) => {
  const values = Object.values(object);
  const report = '';
  for (let value in values){
    // console.log(values[value]);
   const professorName = values[value].professor
   if (professorName === professor){
     report = Object.assign({}, {lesson1}, {lesson2}, {lesson3})  
   }
  }
console.log(report);
}
createReport(allLessons, 'Maria Clara') */


const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));