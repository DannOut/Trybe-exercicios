const fs = require('fs').promises;
const { resolve } = require('path');

const PATH = resolve(__dirname, 'data', 'cacauTrybeFile.json');

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(PATH, 'utf-8');
    return JSON.parse(contentFile);
  } catch (err) {
    return null;
  }
};

const writeCacauTrybeFile = async (contentToWrite) => {
  try {
    const contentFile = await fs.writeFile(PATH, JSON.stringify(contentToWrite));
    return contentFile;
  } catch (err) {
    console.error('Erro ao salvar o arquivo', err.message);
    return null;
  }
}

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (chocolateId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.find(
    ({ id }) => Number(id) === Number(chocolateId)
  );
};

const getChocolateByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter(
    (chocolate) => chocolate.brandId === brandId
  );
};

const getChocolateByName = async (query) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
};

const putUpdateChocolate = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateToUpdate = cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);

  if (chocolateToUpdate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolate) => {
        if (chocolate.id === id) return { ...chocolate, ...update };
        return chocolate;
      });
    await writeCacauTrybeFile(cacauTrybe);
    return { ...chocolateToUpdate, ...update };
  }


  return false;
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolateByBrand,
  getChocolateByName,
  putUpdateChocolate,
};
