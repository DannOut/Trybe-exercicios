const BookService = require('../services/book.service');

const error500Message = 'Deu ruim';

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

const getById = async(req, res) => {
  try {
    const { id } = req.params;
    const books = await BookService.getById(id);
    return res.status(200).json(books);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
}

module.exports = {
  getAll,
  getById,
}
