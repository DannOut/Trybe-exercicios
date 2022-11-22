const { Address, Employee } = require('../models');

const getAll = async () => {
  const user = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });
  return user;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    // include: [
    // { model: Address, as: 'addresses', attributes: { exclude: ['number'] } },
    // ]
  });
  return employee;
};

module.exports = { getAll, getById };
