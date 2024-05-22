import express from "express";
import { getAllCars, createCar } from "../controllers/car_controllers.js";

const router = express.Router();

router.get("/getallcar", getAllCars);
router.post("/create", createCar);

export default router;
