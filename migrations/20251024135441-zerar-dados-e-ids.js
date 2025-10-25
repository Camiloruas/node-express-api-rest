"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        // 1. Desabilita as checagens de chaves estrangeiras
        queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0", {
          transaction: t,
        }),

        // 2. Executa o TRUNCATE TABLE (limpa e reseta o ID)
        queryInterface.sequelize.query("TRUNCATE TABLE `fotos`", {
          transaction: t,
        }),
        queryInterface.sequelize.query("TRUNCATE TABLE `alunos`", {
          transaction: t,
        }),
        queryInterface.sequelize.query("TRUNCATE TABLE `users`", {
          transaction: t,
        }),

        // 3. Habilita as checagens de chaves estrangeiras novamente
        queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1", {
          transaction: t,
        }),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    // Reverter essa operação de limpeza não é comum.
    return Promise.resolve();
  },
};
