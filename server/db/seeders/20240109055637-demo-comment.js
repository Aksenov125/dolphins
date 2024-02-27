'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          user_id: 1,
          hero_id: 1,
          text: 'He is my favorite!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          hero_id: 2,
          text: 'True hero!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // добавьте больше комментариев по необходимости
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
