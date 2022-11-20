'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'Users',
      [
        {
          fullName: 'Leonardo',
          email: 'leo@test.com',
          // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          phoneNum: '55-55-5555-5555',
        },
        {
          fullName: 'JEduardo',
          email: 'edu@test.com',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          phoneNum: '55-55-5555-5555',
        },
      ]
    );
  },

  async down(queryInterface, _Sequelize) {
    queryInterface.bulkDelete('Users', null, {});
  },
};

// src/seeders/[timestamp]-users.js

// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
//     [
//       {
//         fullName: 'Leonardo',
//         email: 'leo@test.com',
//         // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
//         createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
//         updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
//       },
//       {
//         fullName: 'JEduardo',
//         email: 'edu@test.com',
//         createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
//         updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
//       },
//     ], {}),

//   down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
// };