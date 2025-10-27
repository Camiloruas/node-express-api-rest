import { Router } from "express";
import userController from "../controllers/UserController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

//Não deveria existir, sómente para efeito de aprendizagem , pois permite que um susario tem acesso a todos os usuarios, num sistema isso não pode ser possivel ea não ser que seja o administrador do sistema
router.get("/", userController.index); // lista todos os usuario do sistema
//router.get("/:id", userController.show); // lista Usuário

//
router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
Indx --> lista todos os usuarios --> GET
store/create --> cria um novo usuarios --> POST
Delete --> apaga um usuarios --> DELETE
show --> mostra usuarios -->  GET
update --> atualiza um usuario -- > PATCH ou PUT
*/
