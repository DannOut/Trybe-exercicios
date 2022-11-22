const EmployeeService = require('../services/employee.service');

const getAll = async (_req, res) => {
  try {
    const employee = await EmployeeService.getAll();
    return res.status(200).json(employee);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Error' });
  }
};

module.exports = {
  getAll,
};
