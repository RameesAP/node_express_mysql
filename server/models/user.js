import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const UserModel = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default UserModel;
