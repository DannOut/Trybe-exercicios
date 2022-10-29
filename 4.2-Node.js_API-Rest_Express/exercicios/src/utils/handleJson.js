const { readFile, writeFile } = require('fs').promises;

// auxilia para pegar o caminho do arquivo, o path é do proprio node.js
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'movies.json');

//? Questão 4 - Crie uma função de leitura do JSON com o modulo fs.
const readMoviesFile = async () => {
  const content = JSON.parse(await readFile(filePath));
  return content;
};


//? questão 7
const writeMovieFile = async (movie) => {
  const content = JSON.parse(await readFile(filePath));
  const updatedValue = JSON.stringify([...content, { id: content.length + 1, ...movie }])
  await writeFile(filePath, updatedValue, null)
}

//* função main para execução
// function main() {
  // readMoviesFile();
  // writeMovieFile();
// }
// main();

module.exports = {
  readMoviesFile,
  writeMovieFile,
};
