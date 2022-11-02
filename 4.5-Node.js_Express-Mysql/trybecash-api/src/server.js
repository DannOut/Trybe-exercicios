const app = require('./app');
const connection = require('./db/connection');

const port = 3000;

app.listen(port, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${port}`);

  //depois de testado com npm start, esse arquivo deve ser removido, já que está funcionando
  // const [result] = await connection.execute('SELECT 1');
  // if (result) {
  //   console.log('MySQL connection OK');
  // }
});
