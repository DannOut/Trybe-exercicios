'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('Books', [
      {
        title: 'Naruto',
        author: 'Masashi Kishimoto',
        pageQuantity: 200,
        publisher: 'Shonen Jump',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Bleach',
        author: 'Tite Kubo',
        pageQuantity: 180,
        publisher: 'Shonen Jump',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Christine',
        author: 'Stephen King',
        pageQuantity: 616,
        publisher: 'Simon & Schuster',
        createdAt: new Date('2022-01-28T13:23:32.514Z'),
        updatedAt: new Date('2022-01-28T13:23:32.514Z'),
      },
      {
        title: 'Apanhador de Sonhos',
        author: 'Stephen King',
        pageQuantity: 656,
        publisher: 'Simon & Schuster',
        createdAt: new Date('2022-01-28T04:51:32.514Z'),
        updatedAt: new Date('2022-01-28T04:51:32.514Z'),
      },
      {
        title: 'A Dança da Morte',
        author: 'Stephen King',
        pageQuantity: '1248',
        publisher: 'Simon & Schuster',
        createdAt: new Date('2022-01-28T19:37:32.514Z'),
        updatedAt: new Date('2022-01-28T19:37:32.514Z'),
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    queryInterface.bulkDelete('Books', null, {});
  },
};

// Crie uma migration para adicionar a coluna publisher (editora) na tabela Books. Modifique as camadas de serviço para que esse campo seja utilizado no cadastro e na edição; 