'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('animals', { 
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    tutor: {
      type: Sequelize.STRING,  
      allowNull: false,
    },  
    breed: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    sex: {
      type: Sequelize.INTEGER,  
      allowNull: false,
    },
    born_date: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    });
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.dropTable('animals');
  }
};