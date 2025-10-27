/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adiciona a restrição de chave estrangeira se ela ainda não existir
    await queryInterface.addConstraint('fotos', {
      fields: ['aluno_id'],
      type: 'foreign key',
      name: 'FK_FOTOS_ALUNO_ID', // Nome da restrição
      references: {
        table: 'alunos',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface) {
    // Remove a restrição em caso de rollback
    await queryInterface.removeConstraint('fotos', 'FK_FOTOS_ALUNO_ID');
  },
};
