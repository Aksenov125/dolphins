'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Likes',
      [
        { user_id: 1, hero_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, hero_id: 1, createdAt: new Date(), updatedAt: new Date() },
        // добавьте больше лайков по необходимости
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {});
  },
};
