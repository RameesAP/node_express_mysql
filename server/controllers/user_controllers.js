import db from "../models/index.js";

const { UserModel } = db;

export const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, birthday } = req.body;
    const newUser = await UserModel.create({ username, birthday });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
