import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "crud_react",
  "root",
  "password",
  {
    host: "localhost",
    dialect: "mysql",
    port: 8889,
  }
);      

export default sequelize;