const userBookService = require('../services/userBook.service');

const getUsersBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const userbook = await userBookService.getUsersBooksById(Number(id));
    if (!userbook) return res.status(404).json({ message: 'not found' });
    res.status(200).json(userbook);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Deu ruim tio' });
  }
};

module.exports = {
  getUsersBooksById,
};
