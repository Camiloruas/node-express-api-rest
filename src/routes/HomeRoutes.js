import { Router } from "express"; // Importa a função Router do express para criar um novo roteador.
import homeController from "../controllers/HomeController"; // Importa o homeController para ser usado nas rotas.
const router = new Router(); // Cria uma nova instância do roteador.

router.get("/", homeController.index); // Define uma rota GET para a raiz do site que será controlada pelo método index do homeController.

export default router; // Exporta o roteador para ser usado em outros arquivos.
