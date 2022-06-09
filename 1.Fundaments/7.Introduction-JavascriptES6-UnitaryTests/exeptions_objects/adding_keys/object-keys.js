const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

/* for (const keys in coolestTvShow){
  console.log(`${keys}: ${coolestTvShow[keys]}`);
} */

// console.log(Object.keys(coolestTvShow))

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// Como eu fiz
const checkSkills = (student) => {
  for (keys in student){
    console.log(`${keys}, Nível:${student[keys]}`);
  }
}
console.log('Estudante 1');
checkSkills(student1)
console.log('Estudante 2');
checkSkills(student2)


//como o Course fez
const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};
console.log('Estudante 1');
listSkills(student1);
console.log('Estudante 2');
listSkills(student2);