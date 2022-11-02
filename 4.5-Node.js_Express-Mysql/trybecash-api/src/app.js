const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(morgan('combined'));
app.use(cors());

module.exports = app;