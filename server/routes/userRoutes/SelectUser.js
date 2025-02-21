import express from "express";
import databaseConnaction from "../../models/databaseConfig.js";
const router = express.Router();
router.get("/", (req, res) => {
  const selectUser = "SELECT * FROM users";
  databaseConnaction.query(selectUser, (err, result) => {
    if (err) {
      return res.status(404).json({
        massage: "user Not found",
      });
    } else {
      return res.status(200).json(result);
    }
  });
});

export default router;
