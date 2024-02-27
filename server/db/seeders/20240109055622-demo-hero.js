'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Heros',
      [
        {
          user_id: 1,
          name: 'Batman',
          description: 'The Dark Knight',
          film: 'Batman Begins',
          img: 'https://upload.wikimedia.org/wikipedia/ru/a/a2/Batman_Jim_Lee.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          name: 'Superman',
          description: 'Man of Steel',
          film: 'Man of Steel',
          img: 'https://upload.wikimedia.org/wikipedia/ru/archive/d/d6/20220808193319%21Superman_Man_of_Steel.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          name: 'Peppa',
          description: 'The killer svin',
          film: 'Shashlik na da4e',
          img: 'https://image.api.playstation.com/vulcan/ap/rnd/202109/1317/IcU25Bk1mxc4tSHwMpEXbjQB.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          name: 'Mikelangelo',
          description: 'love pizza',
          film: 'TMNT',
          img: 'https://mir-s3-cdn-cf.behance.net/projects/404/441515150536715.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          name: 'CatDog',
          description: 'Kak ono kakaet?',
          film: 'KotoPsina',
          img: 'https://facts.net/wp-content/uploads/2023/09/13-facts-about-catdog-catdog-1694412504.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          name: 'Kik buttowski',
          description: 'Eto voobshe kto?',
          film: 'Gde moi utinnie istorii?',
          img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8651088_b_v8_aa.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Heroes', null, {});
  },
};
