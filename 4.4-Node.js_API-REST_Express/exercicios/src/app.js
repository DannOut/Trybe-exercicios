const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const activities = require('./routes/activities.routes');
const signup = require('./routes/signup.routes');

const app = express();
// criador de logs
app.use(morgan('dev'));

// tradutor de json
app.use(express.json());

// as rotas vão ser carregadas nessa ordem
app.use(activities);
app.use(signup);

module.exports = app;

// Email;
// Senha;
// Primeiro nome;
// Telefone;
