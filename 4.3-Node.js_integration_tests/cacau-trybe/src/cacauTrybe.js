const fs = require('fs').promises;
const { resolve } = require('path');

const PATH = resolve(__dirname, 'data', 'cacauTrybeFile.json');

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(PATH, 'utf-8');
    return JSON.parse(contentFile)
  } catch (err) {
    return null;
  }
};

const getAllChocolates = async() => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
}

const getChocolateById = async(chocolateId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.find(({ id }) => Number(id) === Number(chocolateId));
}

const getChocolateByBrand = async(brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolateByBrand
}
