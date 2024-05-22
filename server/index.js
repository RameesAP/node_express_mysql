import express from "express";
import sequelize from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

//import routes
import userRoutes from "./routes/userRoutes.js";
import carRoutes from "./routes/carRoutes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/cars", carRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
