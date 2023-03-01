import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  {
    dialect: "sqlite",
    store: "./db.sqlite",
    logging: console.log,
  }
)

export default sequelize;