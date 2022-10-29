const { readFile, writeFile } = require('fs').promises;

// auxilia para pegar o caminho do arquivo, o path é do proprio node.js
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'movies.json');

//? Questão 4 - Crie uma função de leitura do JSON com o modulo fs.
const readMoviesFile = async () => {
  const content = JSON.parse(await readFile(filePath));
  return content;
};

//? questão 7 - Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.
const writeMovieFile = async (movie) => {
  const content = JSON.parse(await readFile(filePath));
  const updatedValue = JSON.stringify([
    ...content,
    { id: content.length + 1, ...movie },
  ]);
  await writeFile(filePath, updatedValue, null);
};

//? questão 8 - Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.

const editMovieFile = async (movie) => {
  const updatedValue = JSON.stringify(movie, null, 2);
  // Os dois últimos parâmetros passados no método stringify são opcionais e têm por objetivo melhorar a formatação do arquivo JSON.
  await writeFile(filePath, updatedValue);
};

//? questão 9 -  Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.
const deleteMovieFile = async (movie) => {
  const updatedValue = JSON.stringify(movie, null, 2);
  await writeFile(filePath, updatedValue);
};

//* função main para execução
function main() {
  // readMoviesFile();
  // writeMovieFile();
  // deleteMovieFile
}
main();

module.exports = {
  readMoviesFile,
  writeMovieFile,
  editMovieFile,
  deleteMovieFile,
};
