import express from "express";
import databaseConnaction from "../../models/databaseConfig.js";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  const selectProduct = "SELECT * FROM products";

  databaseConnaction.query(selectProduct, (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({
        message: "Server error, could not fetch products",
        error: err.message,
      });
    }
    res.status(200).json(result);
  });
});

router.get("/product/:id", (req, res) => {
  const { id } = req.params;
  const updateProduct = "SELECT * FROM products WHERE id = ?";

  databaseConnaction.query(updateProduct, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json(result);
  });
});

router.put("/product/:id", upload.single("image"), (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;
  const image_file = req.file ? req.file.filename : null;

  if (!name || !price || !description) {
    return res.status(400).json({
      message: "Name, price, and description are required",
    });
  }

  let updateProduct = `
    UPDATE products 
    SET name = ?, price = ?, description = ? 
    WHERE id = ?`;
  let values = [name, price, description, id];

  if (image_file) {
    updateProduct = `
      UPDATE products 
      SET name = ?, image_file = ?, price = ?, description = ? 
      WHERE id = ?`;
    values = [name, image_file, price, description, id];
  }

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

router.post("/product", upload.single("image_file"), (req, res) => {
  const { name, description, price } = req.body;
  const image_file = req.file;

  if (!name || !image_file || !description || !price) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const checkProductInserted = "SELECT * FROM products WHERE name=?";
  databaseConnaction.query(checkProductInserted, [name], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server error",
      });
    }

    if (result.length > 0) {
      return res.status(400).json({
        message: "Product already exists",
      });
    }

    const insertProduct =
      "INSERT INTO products (name, image_file, description, price) VALUES(?,?,?,?)";
    const VALUES = [name, image_file.filename, description, price];

    databaseConnaction.query(insertProduct, VALUES, (err, result) => {
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

router.delete("/product/:id", (req, res) => {
  const id = req.params.id;
  const deleteProductDb = "DELETE FROM products WHERE id = ?";

  databaseConnaction.query(deleteProductDb, [id], (err, result) => {
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
