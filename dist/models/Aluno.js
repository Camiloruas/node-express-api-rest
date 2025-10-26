"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _sequelize = require("sequelize");
var _sequelize2 = _interopRequireDefault(_sequelize);

class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Nome precisa ter entre 3 e 255 caracteres.",
            },
          },
        },
        sobrenome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Sobrenome precisa ter entre 3 e 255 caracteres.",
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
          set(value) {
            this.setDataValue("email", value.toLowerCase()); // Salva sempre em minúsculas
          },
          defaultValue: "",
          unique: {
            msg: "E-mail já existe",
          },
          validate: {
            isEmail: {
              msg: "E-mail Inválido",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: null,
          validate: {
            isInt: {
              msg: "Idade precisa ser um número inteiro",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: null,
          validate: {
            isFloat: {
              msg: "O peso precisa ser um número inteiro ou de ponto flutuante",
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: null,
          validate: {
            isFloat: {
              msg: "Altura precisa ser um número inteiro ou de ponto flutuante",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "aluno_id" });
  }
}
exports.default = Aluno;
