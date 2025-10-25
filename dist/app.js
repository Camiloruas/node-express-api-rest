"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

var _express = require('express'); var _express2 = _interopRequireDefault(_express); // Importa o framework Express, que facilita a criação de servidores e rotas.
var _HomeRoutes = require('./routes/HomeRoutes'); var _HomeRoutes2 = _interopRequireDefault(_HomeRoutes);
var _UserRoutes = require('./routes/UserRoutes'); var _UserRoutes2 = _interopRequireDefault(_UserRoutes);
var _TokenRoutes = require('./routes/TokenRoutes'); var _TokenRoutes2 = _interopRequireDefault(_TokenRoutes);
var _AlunoRoutes = require('./routes/AlunoRoutes'); var _AlunoRoutes2 = _interopRequireDefault(_AlunoRoutes);
var _FotoRoutes = require('./routes/FotoRoutes'); var _FotoRoutes2 = _interopRequireDefault(_FotoRoutes);

// Importa as rotas da página inicial.
require('./database');
class App {
  // Cria a classe App, que encapsula a configuração do nosso aplicativo Express.
  constructor() {
    // O construtor é chamado quando uma nova instância da classe é criada.
    this.app = _express2.default.call(void 0, ); // Cria uma instância do Express e a armazena na propriedade 'app'.
    this.middleware(); // Chama o método 'middleware' para configurar os middlewares da aplicação.
    this.routes(); // Chama o método 'routes' para configurar as rotas da aplicação.
  }
  middleware() {
    // Este método configura os middlewares que serão usados em todas as rotas.
    this.app.use(_express2.default.urlencoded({ extended: true })); // Configura o middleware para analisar corpos de requisição com URL encoded (formulários HTML). 'extended: true' permite objetos aninhados.
    this.app.use(_express2.default.json()); // Configura o middleware para analisar corpos de requisição com formato JSON.
    this.app.use(
      "/images/",
      _express2.default.static(_path.resolve.call(void 0, __dirname, "uploads", "images"))
    );
  }

  routes() {
    // Este método configura as rotas da aplicação.
    this.app.use("/", _HomeRoutes2.default); // Monta as rotas importadas de 'homeRoutes' no caminho raiz ('/').
    this.app.use("/users/", _UserRoutes2.default); // Monta as rotas importadas de 'homeRoutes' no caminho raiz ('/').
    this.app.use("/tokens/", _TokenRoutes2.default);
    this.app.use("/alunos/", _AlunoRoutes2.default);
    this.app.use("/fotos/", _FotoRoutes2.default);
  }
}

exports. default = new App().app; // Exporta a instância do aplicativo Express, que será usada para iniciar o servidor.
