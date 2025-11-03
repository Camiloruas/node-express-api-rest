import dotenv from "dotenv";
import { resolve, dirname } from "path";

dotenv.config();

import express from "express"; // Importa o framework Express, que facilita a criação de servidores e rotas.
import homeRoutes from "./routes/HomeRoutes";
import userRoutes from "./routes/UserRoutes";
import tokenRoutes from "./routes/TokenRoutes";
import alunoRoutes from "./routes/AlunoRoutes";
import fotoRoutes from "./routes/FotoRoutes";

// Importa as rotas da página inicial.
import "./database";
class App {
  // Cria a classe App, que encapsula a configuração do nosso aplicativo Express.
  constructor() {
    // O construtor é chamado quando uma nova instância da classe é criada.
    this.app = express(); // Cria uma instância do Express e a armazena na propriedade 'app'.
    this.middleware(); // Chama o método 'middleware' para configurar os middlewares da aplicação.
    this.routes(); // Chama o método 'routes' para configurar as rotas da aplicação.
  }
  middleware() {
    // Este método configura os middlewares que serão usados em todas as rotas.
    this.app.use(express.urlencoded({ extended: true })); // Configura o middleware para analisar corpos de requisição com URL encoded (formulários HTML). 'extended: true' permite objetos aninhados.
    this.app.use(express.json()); // Configura o middleware para analisar corpos de requisição com formato JSON.
    this.app.use(express.static(resolve(__dirname, "uploads")));

    // const staticFilesPath = resolve(process.cwd(), "uploads", "images");
    // console.log('Serving static files from:', staticFilesPath);
    // this.app.use("/images/", express.static(staticFilesPath)
    // );
  }

  routes() {
    // Este método configura as rotas da aplicação.
    this.app.use("/", homeRoutes); // Monta as rotas importadas de 'homeRoutes' no caminho raiz ('/').
    this.app.use("/users/", userRoutes); // Monta as rotas importadas de 'homeRoutes' no caminho raiz ('/').
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

export default new App().app; // Exporta a instância do aplicativo Express, que será usada para iniciar o servidor.
