import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const UserModel = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
});

export default UserModel;
(async () => {
  await UserModel.sync();
})();