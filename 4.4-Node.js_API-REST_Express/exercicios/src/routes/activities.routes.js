const express = require('express');
const router = express.Router();
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateRating = require('../middlewares/validateRating');
const validateDifficult = require('../middlewares/validateDifficult');
const auth = require('../middlewares/auth');

router.post(
  '/activities',
  auth,
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficult,
  (_req, res) => {
    res.status(201).json({ message: 'Atividade registrada com sucesso!' });
  }
);

module.exports = router;
