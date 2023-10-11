module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'professores',
    'idade',
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'email',
    },
  ),

  down: () => {},
};
