/* eslint-disable max-lines-per-function */
const jwt = require('jsonwebtoken');
const validateLogin = require('../validations/loginValidation');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const {
    value: { username, password },
    error,
  } = validateLogin.validateBody(req.body);

  if (error) return next(error);
  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password');
    err.statusCode = 401;
    return next(err);
  }
  const admin = username === 'admin' && password === 's3nh4S3gur4???';
  const payload = {
    username,
    admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });
  console.log(token);
  res.status(200).json({ token });
};
