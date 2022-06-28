const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {

 return names.reduce((acc, name) => {
    return `${acc} e ${name} //`
  }, 0);
}

console.log(containsA());
