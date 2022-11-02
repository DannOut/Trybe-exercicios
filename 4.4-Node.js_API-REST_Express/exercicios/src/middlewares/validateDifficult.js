module.exports = (req, res, next) => {
  const { difficult } = req.body.description;
  const classification = ['Fácil', 'Médio', 'Dificil'];

  if (!classification.includes(difficult))
    return res.status(400).json({
      message: "O campo difficulty deve ser 'Fácil', 'Médio' ou 'Difícil'",
    });

  next();
};
