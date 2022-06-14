'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('users', { 
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
    email: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    password_hash: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    user_type: {
      type: Sequelize.INTEGER,  
      allowNull: false,
    },
    last_login: {
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
     return await queryInterface.dropTable('users');
  }
};