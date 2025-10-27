import Aluno from "../models/Aluno";
import Foto from "../models/Foto";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: [
        "id",
        "nome",
        "sobrenome",
        "email",
        "idade",
        "peso",
        "altura",
      ],
      order: [
        ["id", "DESC"],
        [Foto, "id", "DESC"],
      ],
      include: {
        model: Foto,
        attributes: ["url", "filename"],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      // ⬅️ Mudamos 'error' para 'e'

      // Agora o acesso é feito com 'e'
      if (e.name === "SequelizeUniqueConstraintError" || e.errors) {
        return res.status(400).json({
          erros: e.errors.map((err) => err.message),
        });
      }

      return res.status(500).json({
        erros: ["Ocorreu um erro interno desconhecido."],
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ["Faltando ID"],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        order: [[Foto, "id", "DESC"]],
        include: {
          model: Foto,
          attributes: ["url", "filename"],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          erros: ["Aluno não existe"],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ["Faltando ID"],
        });
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          erros: ["Aluno não existe"],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ["Faltando ID"],
        });
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          erros: ["Aluno não existe"],
        });
      }

      await aluno.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
