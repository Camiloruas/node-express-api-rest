"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllerjs = require('../controllers/UserController.js'); var _UserControllerjs2 = _interopRequireDefault(_UserControllerjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const router = new (0, _express.Router)();

//Não deveria existir, sómente para efeito de aprendizagem , pois permite que um susario tem acesso a todos os usuarios, num sistema isso não pode ser possivel ea não ser que seja o administrador do sistema
router.get("/", _UserControllerjs2.default.index); // lista todos os usuario do sistema
//router.get("/:id", userController.show); // lista Usuário

//
router.post("/", _UserControllerjs2.default.store);
router.put("/", _loginRequiredjs2.default, _UserControllerjs2.default.update);
router.delete("/", _loginRequiredjs2.default, _UserControllerjs2.default.delete);

exports. default = router;

/*
Indx --> lista todos os usuarios --> GET
store/create --> cria um novo usuarios --> POST
Delete --> apaga um usuarios --> DELETE
show --> mostra usuarios -->  GET
update --> atualiza um usuario -- > PATCH ou PUT
*/
