import Foto from "../models/Foto";
import Aluno from "../models/Aluno";

class FotoController {
  async store(req, res) {
    try {
      // 1. O middleware na rota JÁ processou o upload. Os dados estão prontos em req.file e req.body.
      if (!req.file) {
        return res.status(400).json({ erros: ["Nenhum arquivo enviado."] });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;

      // 2. Validações
      if (!aluno_id) {
        return res.status(400).json({ erros: ["ID do aluno não fornecido."] });
      }

      const aluno = await Aluno.findByPk(aluno_id);
      if (!aluno) {
        return res.status(400).json({ erros: ["Aluno não encontrado."] });
      }

      // 3. Cria o registro no banco de dados
      const foto = await Foto.create({ originalname, filename, aluno_id });

      return res.json(foto);
    } catch (e) {
      // Em caso de erro (ex: falha no banco), retorna um erro 400.
      return res.status(400).json({
        erros: ["Erro ao salvar a foto. Verifique os dados enviados."],
      });
    }
  }
}

export default new FotoController();
