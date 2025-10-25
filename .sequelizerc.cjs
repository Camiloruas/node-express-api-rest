// .sequelizerc

// Sintaxe ES Module (Moderna)
import { resolve } from "path";

module.exports = {
  // CORREÇÃO: Adicionando __dirname (o caminho da raiz do projeto)
  config: resolve(__dirname, "src", "config", "database.js"),
  "models-path": resolve(__dirname, "src", "models"),
  "migrations-path": resolve(__dirname, "src", "databse", "migrations"),
  "seeders-path": resolve(__dirname, "src", "database", "seeders"),
};
