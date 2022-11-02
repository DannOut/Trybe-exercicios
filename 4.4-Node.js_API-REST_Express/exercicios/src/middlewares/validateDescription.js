const validateDescription = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json({ message: `O campo ${value} é obrigatório` });
  }
};

module.exports = (req, res, next) => {
  const { description } = req.body;

  validateDescription(description, res, 'description');
  validateDescription(description.createdAt, res, 'createAt');
  validateDescription(description.rating, res, 'rating');
  validateDescription(description.difficulty, res, 'difficult');

  next();
};
