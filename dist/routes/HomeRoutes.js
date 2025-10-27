"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); // Importa a função Router do express para criar um novo roteador.
var _HomeController = require('../controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController); // Importa o homeController para ser usado nas rotas.
const router = new (0, _express.Router)(); // Cria uma nova instância do roteador.

router.get("/", _HomeController2.default.index); // Define uma rota GET para a raiz do site que será controlada pelo método index do homeController.

exports. default = router; // Exporta o roteador para ser usado em outros arquivos.
