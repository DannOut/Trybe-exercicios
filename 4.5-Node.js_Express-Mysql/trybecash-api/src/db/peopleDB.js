const connection = require('./connection');

const insert = (person) =>
  connection.execute(
    `INSERT INTO people (first_name, last_name, email, phone) 
      VALUES (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone]
  );

const findAll = () => {
  //! por que o result do video está com desestrutura em array
  const result = connection.execute(`SELECT * FROM people`);
  return result;
};

const findById = (id) => {
  return connection.execute(`SELECT * FROM people WHERE id = ?`, [id]);
};

const update = (person, id) => {
  const result = connection.execute(
    `UPDATE people SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ? `,
    [person.firstName, person.lastName, person.email, person.phone, id]
  );
  console.log(result);
  return result;
};

const remove = (id) => {
  const teste = connection.execute(`DELETE FROM people WHERE id = ?`, [id])
  return teste
};

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove
};
