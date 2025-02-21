import express from "express";
import multer from "multer";
import databaseConnaction from "../../models/databaseConfig.js";
const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./imageupload/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/product", upload.single("image_file"), (req, res) => {
  const { name, destination, price } = req.body;
  const image_file = req.file;
  if (!name || !image_file || !description || !price) {
    return res.status(400).json({
      massage: "All fields are required",
    });
  }
  const CheckProduct = "SELECT * FROM products WHERE id =?";
  databaseConnaction.query(CheckProduct, [id], (err, result) => {
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
      "INSERT INTO products (name,image_file,description,price) VALUES (?,?,?,?)";
    const values = [name, image_file, description, price];
    databaseConnaction.query(insertProduct, values, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Error inserting product",
        });
      }
      return res.status(201).json({
        message: "Product added successfully",
        productId: result.insertId,
      });
    });
  });
});

export default router;
