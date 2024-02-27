'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Jane Doe',
          password: await bcrypt.hash('password123', 10),
          img: 12345,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'John Smith',
          password: await bcrypt.hash('password123', 10),
          img: 67890,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // добавьте больше пользователей по необходимости
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
