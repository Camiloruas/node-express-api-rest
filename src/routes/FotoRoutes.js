import { Router } from "express";
import multer from "multer";

import fotoController from "../controllers/FotoController";
import multerConfig from "../../config/multerConfig.cjs";
import loginRequired from "../middlewares/loginRequired";

const upload = multer(multerConfig);
const router = new Router();

router.post("/", loginRequired, upload.single("foto"), fotoController.store);

export default router;
