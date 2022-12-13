'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'authors', // aqui informamos que a relação será com nossa model 'authors'
          key: 'id', // aqui informamos qual vai ser a coluna que será relacionada (no caso, a coluna 'id')
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      genre_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'genres', // aqui informamos que a relação será com nossa model 'genres'
          key: 'id', // aqui informamos qual vai ser a coluna que será relacionada (no caso, a coluna 'id')
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('books');
  },
};
