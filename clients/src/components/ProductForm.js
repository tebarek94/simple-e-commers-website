import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/CSS/ProductForm.css";

function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    if (imageFile) {
      data.append("image_file", imageFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/product",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product created:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error creating product:", error);
      if (error.response && error.response.data) {
        setError(
          error.response.data.message ||
            "Failed to create product. Please try again."
        );
      } else {
        setError("Product with this name already exists");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Product</h1>

      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label htmlFor="name">Product Name:</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
          type="text"
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Product Image:</label>
        <input
          id="image"
          name="image_file"
          onChange={handleFileChange}
          required
          type="file"
          accept="image/*"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter product description"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price ($):</label>
        <input
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          type="number"
          placeholder="Enter price"
          min="0"
          step="0.01"
          required
        />
      </div>

      <button type="submit" className="submit-button">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
