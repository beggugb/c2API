'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      raiz: {
        type: Sequelize.INTEGER
      },
      origen: {
        type: Sequelize.INTEGER
      },
      patrocinador: {
        type: Sequelize.INTEGER
      },
      enabled: {
        type: Sequelize.BOOLEAN
      },
      usuarioId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Usuarios',
            key: 'id',
            as: 'usuarioId'
        }
      },
      patrocinadorId: {
        type: Sequelize.INTEGER
      },
      nro: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Reds');
  }
};