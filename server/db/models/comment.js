'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Hero }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Hero, { foreignKey: 'hero_id' });
    }
  }
  Comment.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      hero_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Heroes',
          key: 'id',
        },
      },
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
