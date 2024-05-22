import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const CarModel = sequelize.define("cars", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default CarModel;