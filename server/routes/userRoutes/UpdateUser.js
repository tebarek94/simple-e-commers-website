import express from "express";
const router = express.Router();
router.put("/user/:id", (req, res) => {
  const id = req.params.id;
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and Password are required",
    });
  }

  const updateProduct = `
    UPDATE products 
    SET email = ?, password = ?, 
    WHERE id = ?`;

  const values = [email, password, id];

  databaseConnaction.query(updateProduct, values, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Database error while updating product" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({
      message: "usert updated successfully",
      id: id,
      updated: true,
    });
  });
});
