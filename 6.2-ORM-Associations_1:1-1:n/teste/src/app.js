const express = require('express');

const app = express();
app.use(express.json());

app.use('/employee');

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

