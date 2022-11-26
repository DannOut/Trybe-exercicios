const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  //  primeiramente resgatamos o token no header
  const token = req.headers.authorization;

  //  verificamos se o token existe ou não
  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  // Caso o token exista, precisamos verificar se ele é válido.
  try {
    /* Pedimos para que a biblioteca de JWT valide o token */
    const payload = jwt.verify(token, JWT_SECRET);
    /* Caso não ocorra nenhum erro, significa que o token é válido e podemos continuar */

    /* Armazenamos os dados da pessoa no objeto de request */
    req.user = payload;

    return next();
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};
