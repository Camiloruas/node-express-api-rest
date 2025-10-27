import User from "../models/User";

class UserController {
  // Cria a classe HomeController, que agrupa as ações do controlador da página inicial.
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      if (e.errors) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }

  //INDEX

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  //SHOW

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  //UPDATE
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          erros: ["Usuarios não existe"],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // DELETE

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          erros: ["id não enviado"],
        });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          erros: ["Usuarios não existe"],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
