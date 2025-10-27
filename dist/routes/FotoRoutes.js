"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _FotoController = require('../controllers/FotoController'); var _FotoController2 = _interopRequireDefault(_FotoController);
var _multerConfig = require('../../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const upload = _multer2.default.call(void 0, _multerConfig2.default);
const router = new (0, _express.Router)();

router.post("/", _loginRequired2.default, upload.single("foto"), _FotoController2.default.store);

exports. default = router;
