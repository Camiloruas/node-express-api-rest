import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Nome precisa ter entre 3 e 255 caracteres.",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Sobrenome precisa ter entre 3 e 255 caracteres.",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
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
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Idade precisa ser um numero inteiro",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "O peso precisa ser um numero inteiro ou de ponto flutuante",
            },
          },
        },
        altura: {
          // <-- ABRINDO O OBJETO CORRETAMENTE
          type: Sequelize.FLOAT, // <-- TIPO DENTRO DO OBJETO
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Altura precisa ser um numero inteiro ou de ponto flutuante",
            },
          },
        }, // <-- FECHANDO O OBJETO CORRETAMENTE
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
