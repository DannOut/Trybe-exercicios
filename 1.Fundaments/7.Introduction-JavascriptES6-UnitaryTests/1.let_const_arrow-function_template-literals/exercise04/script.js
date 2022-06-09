// Q04 parte 1
const changeX = (textInput, textString) => {
const splited = textString.split(' ');
for (let i = 0; i < splited.length; i += 1) {
  splited[i] === 'x' ? splited[i] = textInput : splited[i];
}
// console.log(splited.join(' '));
return splited.join(' ');
}
changeX ('naruto', 'era uma vez o x para matar x casar com x !');

const stringArray = ['Naruto', 'Michael Jordan', 'Romário', 'Bin laden', 'Silvester Stalone']

const organized = () => stringArray.sort();
console.log(organized());