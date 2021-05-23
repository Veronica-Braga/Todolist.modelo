'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AtividadeUsuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_Atividade: {
        field:"idAtividade",
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model: "Atividade",
          key: "id"
        }
      },
      Id_Usuario: {
        field:"idUsuario",
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model: "Usuarios",
          key: "id"
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
    await queryInterface.dropTable('AtividadeUsuarios');
  }
};