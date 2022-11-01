const fs = require('fs/promises');
const { resolve } = require('path');
const AUTH_DATA_PATH = resolve(__dirname, '..', '..', 'data', 'authdata.json');

// como vamos ler arquivos assincronamente, precisamos do async
async function apiCredentials(req, res, next) {
  // pega o token do cabeçalho, se houver
  const token = req.header('X-API-TOKEN');
  // lê o conteúdo do `./authdata.json` (relativo à raiz do projeto)
  const authData = await fs.readFile(AUTH_DATA_PATH, { encoding: 'utf-8' });

  // readFile nos deu uma string, agora vamos carregar um objeto a partir dela
  const authorized = JSON.parse(authData);

  if (token in authorized) {
    req.teams =authorized[token]
    next(); // pode continuar
  } else {
    res.sendStatus(401); // não autorizado
  }
}

module.exports = {
  apiCredentials,
};
