const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const peopleRoutes = require('./routes/people.routes');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// Routes Definition
app.use('/people', peopleRoutes);

// Error Routes
app.use((err, _req, res, next) => {
  res.status(err.status).json({
    message: err.message,
  });
  next();
});

module.exports = app;
