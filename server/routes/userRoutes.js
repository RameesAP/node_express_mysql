import express from "express";
import { getAllUser, createUser } from "../controllers/user_controllers.js";

const router = express.Router();

router.get("/getalluser", getAllUser);
router.post("/create", createUser);

export default router;
