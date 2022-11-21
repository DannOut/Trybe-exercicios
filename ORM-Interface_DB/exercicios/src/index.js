const express = require('express');
const app = express();
const BookRouter = require('./Routers/book.router');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', BookRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));