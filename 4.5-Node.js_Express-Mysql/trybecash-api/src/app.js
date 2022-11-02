const express = require('express');
// const morgan = require('morgan');
const cors = require('cors');
const peopleRoutes = require('./routes/people.routes'); 


const app = express();

app.use(express.json())
// app.use(morgan('short'));
app.use(cors());


// Routes Definition
app.use('/people', peopleRoutes);


module.exports = app;