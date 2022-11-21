const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({ order: [['title', 'ASC']] });
  return books;
};

const getById = async (id) => {
  const books = await Book.findByPk(id);
  return books;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll(
    { where: { author } },
    { order: [['title', 'ASC']] }
  );
  return books;
};

const create = async ({ title, author, pageQuantity, publisher }) => {
  const books = await Book.create({ title, author, pageQuantity, publisher });
  return books;
};

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const [books] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } }
  );
  return books;
};

const remove = async (id) => {
  const removed = await Book.destroy({ where: { id } });
  return removed;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};
