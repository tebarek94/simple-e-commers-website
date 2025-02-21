import express from "express";
import databaseConnaction from "../../models/databaseConfig.js";
const router = express.Router();
router.delete("/product/:id", (req, res) => {
  const id = req.params.id;
  const deleteProduct = "DELETE FROM products WHERE id = ?";
  databaseConnaction.query(deleteProduct, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server error",
      });
    }
    res.status(200).json({
      message: "Product deleted successfully",
      id: id,
    });
  });
});

export default router;
