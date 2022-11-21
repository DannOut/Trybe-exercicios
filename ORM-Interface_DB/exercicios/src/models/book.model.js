const BookModel = (Sequelize, Datatypes) => {
  const book = Sequelize.define('Book', {
    title: Datatypes.STRING,
    author: Datatypes.STRING,
    pageQuantity: Datatypes.INTEGER,
    createdAt: Datatypes.DATE,
    updatedAt: Datatypes.DATE,
  })
  return book;
}

module.exports = BookModel;