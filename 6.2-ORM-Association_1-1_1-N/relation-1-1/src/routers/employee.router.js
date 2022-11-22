const express =require('express');
const employeeController = require('../controllers/employee.controller');

const router = express.Router();

router.get('/', employeeController.getAll);
router.get('/:id', employeeController.getById);

module.exports = router;