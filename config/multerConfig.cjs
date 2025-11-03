const multer = require("multer");
const { extname, resolve } = require("path");

const ROTA_UPLOAD = resolve(__dirname, "..", "uploads", "images");

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, ROTA_UPLOAD);
  },
  filename: (req, file, cb) => {
    const nomeArquivo = `${Date.now()}_${aleatorio()}${extname(
      file.originalname
    )}`;
    cb(null, nomeArquivo);
  },
});

module.exports = {
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(
        new multer.MulterError(
          "FILE_TYPE_ERROR",
          "Arquivo precisa ser PNG ou JPG"
        ),
        false
      );
    }
    return cb(null, true);
  },
};