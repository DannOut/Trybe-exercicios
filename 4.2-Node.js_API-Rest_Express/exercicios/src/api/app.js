const express = require('express');
const { readMoviesFile, writeMovieFile } = require('../utils/handleJson');

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
  if (!searchId) res.status(404).json({ message: 'Movie not found!'})
  res.status(200).json({ movie: searchId });
})


//? questão 7 - Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.
app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  await writeMovieFile({ movie, price })
  res.status(201).json({ message: 'Movie Created' });

})

module.exports = app

// app.post('/teams', (req, res) => {
//   const newTeam = { ...req.body };
//   teams.push(newTeam);
//   res.status(201).json({ team: newTeam });
// });