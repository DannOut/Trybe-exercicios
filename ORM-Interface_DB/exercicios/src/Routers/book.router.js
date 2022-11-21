const express = require('express');
const BookController = require('../controllers/book.controller');

const router = express.Router();

router.get('/', BookController.getAll);
router.get('/:id', BookController.getById);

module.exports = router;