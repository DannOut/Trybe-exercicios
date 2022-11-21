const BookService = require('../services/book.service');

const error500Message = 'Algo deu errado';

const getAll = async (req, res) => {
  try {
    const { author } = req.query;

    if (author) {
      const books = await BookService.getByAuthor(author);
      return res.status(200).json(books);
    } else {
      const books = await BookService.getAll();
      return res.status(200).json(books);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await BookService.getById(id);
    if (!books) return res.status(404).json('Book not found');
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const books = await BookService.create({ title, author, pageQuantity, publisher });
    return res.status(201).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

const update = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const { id } = req.params;
    const books = await BookService.update(id, { title, author, pageQuantity, publisher });
    if (!books) return res.status(404).json({ message: 'Book not found' });
    res.status(201).json({ message: 'Book updated' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await BookService.remove(Number(id));
    if (!books) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book removed' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
