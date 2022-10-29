const express = require('express');
const {
  readMoviesFile,
  writeMovieFile,
  editMovieFile,
  deleteMovieFile,
} = require('../utils/handleJson');

const app = express();
app.use(express.json());

/**
 ** Informational responses (100 – 199)
 ** Successful responses (200 – 299)
 ** Redirection messages (300 – 399)
 ** Client error responses (400 – 499)
 ** Server error responses (500 – 599)
 */

//? Questão 1 - Qual a função do código de status 400 e 422 ?
//* 400 -> Bad Request - Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.
//* 422 -> A requisição está bem formada mas inabilitada para ser seguida devido a erros semânticos.

//? Questão 2 - Qual a função do código de status 401 ?
//* erro "Unauthorized" - Client mus authenticate itself to get the requested response // Client Error

//? Questão 3 - Crie um servidor Node.js utilizando o framework Express.
//* FEITO

//?Questão 5 - Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.
// app é minha variavel que tem o express que recebe dois parametros
app.get('/movies/:id', async (req, res) => {
  const movieId = req.params.id;
  const allMovies = await readMoviesFile();
  const searchId = allMovies.find(({ id }) => Number(id) === Number(movieId));
  if (!searchId) res.status(404).json({ message: 'Movie not found!' });
  res.status(200).json({ movie: searchId });
});

//?Questão 6 - Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.
app.get('/movies', async (req, res) => {
  const allMovies = await readMoviesFile();
  res.status(200).json({ movie: allMovies });
});

//? questão 7 - Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.
app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  await writeMovieFile({ movie, price });
  res.status(201).json({ message: 'Movie Created' });
});

//? questão 8 - Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.
app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readMoviesFile();
    const index = movies.findIndex((element) => element.id === Number(id));
    movies[index] = { id: Number(id), movie, price };
    await editMovieFile(movies);
    res.status(200).json(movies[index]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

//? questão 9 -  Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.
app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readMoviesFile();
    const index = movies.findIndex((element) => element.id === Number(id));
    res.status(200).json(`O item foi removido com sucesso !`);
    movies.splice(index, 1);
    await deleteMovieFile(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;
