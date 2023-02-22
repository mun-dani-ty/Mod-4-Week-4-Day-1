'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Musicians', 'bandId', {
      allowNull: false, type: Sequelize.INTEGER, references: {
        model: 'Bands',
        key: 'id',
        onDelete: 'cascade'
      },
    });



  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Musicians', 'bandId');
  }
};
