import express from "express";
import databaseConnaction from "../../models/databaseConfig";
const router = express.Router();
router.get("/", (req, res) => {
  const GetProductInDB = "SELECT * FROM products";
  databaseConnaction.query(GetProductInDB, (err, result) => {
    if (err) {
      return res.status(404).json({
        massage: "Product Not Found",
      });
    } else {
      return res.status(200).json(result);
    }
  });
});

export default router;
