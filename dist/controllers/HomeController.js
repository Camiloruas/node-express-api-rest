"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class AlunoController {
  // Cria a classe AlunoController, que agrupa as ações do controlador da página inicial.
  async index(req, res) {
    const novoAluno = await _Aluno2.default.create({
      nome: "Rafael",
      sobrenome: "Ruas",
      email: "Rafael@gmail.com",
      idade: 10,
      peso: 64,
      altura: 1.6,
    });
    // Define o método index, que é a ação padrão para a rota da página inicial.
    res.json(novoAluno);
  }
}

exports. default = new AlunoController(); // Exporta uma nova instância da classe UserController, tornando-a disponível para outros módulos.
