import express from "express";
import databaseConnaction from "../../models/databaseConfig.js";
const router = express.Router();
router.post("/adminInsert", (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.send("Email and Password are required");
  }
  const checkExitsEmail = "SELECT * FROM users WHRER email=?";
  databaseConnaction.query(checkExitsEmail, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server error",
      });
    }
    if (result.length > 0) {
      return res.status(400).json({
        message: "user already exists",
      });
    }
    const UserInsert = "INSERT INTO user (email,password) VALUES(?,?)";
    const Valuse = [email, password];
    databaseConnaction.query(UserInsert, Valuse, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Error inserting product",
        });
      }
      res.status(201).json({
        message: "Product added successfully",
        productId: result.insertId,
      });
    });
  });
});
