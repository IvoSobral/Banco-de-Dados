import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"

const Author = sequelize.define(
  "Author",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING
    }
  }
)

export default Author;