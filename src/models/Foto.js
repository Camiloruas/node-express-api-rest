import Sequelize, { Model } from "sequelize";
import appConfig from "../../config/appConfig";

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo não pode ficar vazio.",
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo não pode Ficar vazio",
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue("filename")}`;
          },
        },
        // >>> ADIÇÃO CRÍTICA DO CAMPO aluno_id <<<
        aluno_id: {
          type: Sequelize.INTEGER,
          allowNull: false, // Garante que a foto SEMPRE terá um aluno associado
          validate: {
            notEmpty: {
              msg: "O aluno_id não pode estar vazio.",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "fotos",
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "aluno_id" });
  }
}
