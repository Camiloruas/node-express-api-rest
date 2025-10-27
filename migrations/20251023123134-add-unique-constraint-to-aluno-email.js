module.exports = {
  up: async (queryInterface, Sequelize) => {
    // ⬇️ Mude 'Alunos' para 'alunos' (minúsculo) ⬇️
    await queryInterface.addConstraint("alunos", {
      fields: ["email"],
      type: "unique",
      name: "aluno_email_unique_constraint",
    });
  },

  down: async (queryInterface, Sequelize) => {
    // ⬇️ Mude 'Alunos' para 'alunos' (minúsculo) ⬇️
    await queryInterface.removeConstraint(
      "alunos",
      "aluno_email_unique_constraint"
    );
  },
};
