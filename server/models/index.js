import sequelize from "../config/database.js";
import UserModel from "./user.js";
import CarModel from './CarModel.js';
import { Sequelize } from "sequelize";

const db = {
  UserModel,
  CarModel,
};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
