const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const activities = require('./routes/activities.routes');

const app = express();
// criador de logs
app.use(morgan('dev'));

// tradutor de json
app.use(express.json());

// as rotas vão ser carregadas nessa ordem
app.use(activities);

module.exports = app;
