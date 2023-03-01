import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"

const Book = sequelize.define(
  "Books",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genres: {
      type: DataTypes.STRING
    }
  }
)

export default Book;