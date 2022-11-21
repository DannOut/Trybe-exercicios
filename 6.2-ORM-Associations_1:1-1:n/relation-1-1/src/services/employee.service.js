const { Address, Employee } = require('../models');

const getAll = async () => {
  const user = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });
  return user;
};

module.exports = { getAll };
