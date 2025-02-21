import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes/productRoutes.js";
import getUsrRoutes from "./routes/userRoutes/SelectUser.js";
import dbCon from "./models/databaseConfig.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();
const app = express();
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use("/api", productRoutes);
app.use("/api/user", getUsrRoutes);

dbCon.connect((err) => {
  if (err) {
    console.log("Database not connected");
  } else {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
});
