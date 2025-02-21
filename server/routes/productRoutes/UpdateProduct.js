import express from "express";
const router = express.Router();
router.put("/product/:id", (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;
  const image_file = req.file;

  if (!name || !image_file || !price || !description) {
    return res.status(400).json({
      message: "Name, price, image, and description are required",
    });
  }

  const updateProduct = `
    UPDATE products 
    SET name = ?, image_file = ?, price = ?, description = ? 
    WHERE id = ?`;

  const values = [name, image_file.file, price, description, id];

  databaseConnaction.query(updateProduct, values, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Database error while updating product" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product updated successfully",
      id: id,
      updated: true,
    });
  });
});

export default router;
