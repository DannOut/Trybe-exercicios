const express = require('express');
const router = express.Router();
const generateToken = require('../util/generateToken');

router.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].includes(undefined))
    return res.status(401).json({ message: 'Campos ausentes!' });
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = router;
