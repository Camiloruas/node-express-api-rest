import { Router } from "express"; // Importa a função Router do express para criar um novo roteador.
import alunoController from "../controllers/AlunoController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get("/", alunoController.index);
router.post("/", loginRequired, alunoController.store);
router.get("/:id", alunoController.show);
router.put("/:id", loginRequired, alunoController.update);
router.delete("/:id", loginRequired, alunoController.delete);

export default router; // Exporta o roteador para ser usado em outros arquivos.
