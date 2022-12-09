// ./main.ts

import connection2 from './model/connection';

const main = async () => {
  const result = await connection2.execute('SELECT * FROM books');
  const [rows] = result;
  console.log(rows);
};

main();
