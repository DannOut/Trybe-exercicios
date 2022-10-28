// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

// F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
const fs = require('fs').promises;
const path = './simpsons.json';

async function readAllAsyncAwait() {
  const fileContent = await fs.readFile(path, 'utf-8');
  const convert = JSON.parse(fileContent);
  const mapping = convert.map(({ id, name }) => `${id} - ${name}`);

  mapping.forEach((value) => console.log(value));
}

async function getSimpsonById(Sid) {
  const fileContent = await fs.readFile(path, 'utf-8');
  const convert = JSON.parse(fileContent);
  const simpsonChoice = convert.find(({ id }) => Number(id) === Number(Sid));
  if (!simpsonChoice) {
    throw new Error('id não encontrado');
  }
  return simpsonChoice;
}

async function filterSimpsonById() {
  const fileContent = await fs.readFile(path, 'utf-8');
  const convert = JSON.parse(fileContent);
  const simpsonChoice = convert.filter(
    ({ id }) => Number(id) !== 10 && Number(id) !== 6
  );
  await fs.writeFile(path, JSON.stringify(simpsonChoice));
}

async function newFileSimpson() {
  const fileContent = await fs.readFile(path, 'utf-8');
  const convert = JSON.parse(fileContent);
  const simpsonChoice = convert.filter(({ id }) => Number(id) <= 4);
  await fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonChoice));
}

async function newMemberSimpson() {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const convert = JSON.parse(fileContent);
  convert.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(convert));
}

async function changeMemberSimpson() {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const convert = JSON.parse(fileContent);
  const simpsonChoice = convert.filter(({ id }) => Number(id) !== 8);
  simpsonChoice.push({ "id": "5", "name": "Maggie Simpson" });

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonChoice));
}

// A função main é apenas para termos um ponto de entrada centrailizado para nosso script
function main() {
  // readAllAsyncAwait();
  // getSimpsonById(13).then((simpson) => console.log(simpson));
  // filterSimpsonById();
  // newFileSimpson();
  // newMemberSimpson();
  changeMemberSimpson()
}
main();
