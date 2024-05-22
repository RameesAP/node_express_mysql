import db from "../models/index.js";

const { CarModel } = db;

export const getAllCars = async (req, res) => {
  try {
    const users = await CarModel.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCar = async (req, res) => {
  try {
    const { username, birthday } = req.body;
    const newUser = await CarModel.create({ username, birthday });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
