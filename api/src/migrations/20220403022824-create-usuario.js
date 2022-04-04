'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombres: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      vigencia: {
        type: Sequelize.DATE
      },
      registrado: {
        type: Sequelize.BOOLEAN
      },
      liderId: {
        type: Sequelize.INTEGER
      },
      nivel: {
        type: Sequelize.INTEGER
      },
      rangoId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Rangos',
            key: 'id',
            as: 'rangoId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }
};