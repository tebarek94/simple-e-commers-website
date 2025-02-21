import express from "express";
import databaseConnaction from "../../models/databaseConfig";
const router = express.Router();

router.get("/product/:id", (req, res) => {
  const { id } = req.params.id;
  const sql = "SELECT * FROM products WHERE id=?";
  databaseConnaction.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(404).json({
        massage: "Product not fonud",
      });
    } else {
      return res.status(200).json({
        result: result,
      });
    }
  });
});

export default router;
