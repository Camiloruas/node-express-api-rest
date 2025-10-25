import multer from "multer";
import { extname, resolve, dirname } from "path"; // Adicione 'dirname' aqui
import { fileURLToPath } from "url"; // Importa a função necessária

// --- INÍCIO DA CORREÇÃO PARA __dirname EM MÓDULOS ES ---

// 1. Obtém o caminho do arquivo atual
const __filename = fileURLToPath(import.meta.url);

// 2. Obtém o caminho do diretório (o novo __dirname)
const __dirname = dirname(__filename);

// --- FIM DA CORREÇÃO ---

// Define a pasta de destino
const ROTA_UPLOAD = resolve(__dirname, "..", "uploads", "images");

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

// Define a configuração de Storage (onde salvar e como nomear)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, ROTA_UPLOAD);
  },
  filename: (req, file, cb) => {
    // 💡 Melhoria: Substituir espaços por '_' no nome do arquivo gerado
    const nomeArquivo = `${Date.now()}_${aleatorio()}${extname(
      file.originalname
    )}`;
    cb(null, nomeArquivo);
  },
});

// 🏆 Exporta o OBJETO DE CONFIGURAÇÃO que será passado para multer() no arquivo de rotas.
export default {
  storage,
  // ✅ POSICIONAMENTO CORRETO: O fileFilter vai aqui, junto com storage
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      // O MulterError exige que o primeiro argumento da callback seja o erro.
      // ❌ Se for erro, o segundo argumento deve ser 'false'
      return cb(
        new multer.MulterError(
          "FILE_TYPE_ERROR",
          "Arquivo precisa ser PNG ou JPG"
        ),
        false
      );
    }
    // ✅ Se não houver erro, o segundo argumento deve ser 'true'
    return cb(null, true);
  },
};
