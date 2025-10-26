// --- /home/camiloruas/api/src/controllers/HomeController.js ---

// Remova o import desnecessário, pois esta rota não deve acessar o DB.
// import Aluno from "../models/Aluno";

// Corrigido para o nome da classe ser HomeController.
class HomeController {
  // O método index na rota raiz (/) deve apenas verificar o status do servidor.
  async index(req, res) {
    // ⬇️ CORREÇÃO PRINCIPAL: REMOÇÃO DA CRIAÇÃO DO ALUNO ⬇️
    /*
    const novoAluno = await Aluno.create({
      nome: "Rafael",
      sobrenome: "Ruas",
      email: "Rafael@gmail.com",
      idade: 10,
      peso: 64,
      altura: 1.6,
    });
    // res.json(novoAluno);
    */

    // Define o método index para retornar apenas uma mensagem de status/sucesso.
    res.json({
      mensagem: "API REST Node.js em execução!",
      status: "OK",
    });
  }
}

// Corrigido para exportar a instância da HomeController
export default new HomeController();
