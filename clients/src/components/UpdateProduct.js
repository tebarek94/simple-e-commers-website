import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/product/${id}`)
      .then((res) => {
        console.log("Fetched product:", res.data);
        setName(res.data[0].name);
        setDescription(res.data[0].description);
        setPrice(res.data[0].price);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);

    if (image) {
      formData.append("image", image);
    }

    axios
      .put(`http://localhost:5000/api/product/${id}`, formData)
      .then((response) => {
        if (response.data.updated) {
          alert("Product updated successfully!");
          navigate("/view");
        } else {
          alert("Product update failed.");
        }
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        alert("Error updating product. Please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Update Product</h1>
      <div className="form-group">
        <label htmlFor="name">Product Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter product name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Product Image (optional):</label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter product description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price ($):</label>
        <input
          id="price"
          name="price"
          type="number"
          placeholder="Enter price"
          min="0"
          step="0.01"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-button">
        Update
      </button>
    </form>
  );
}

export default UpdateProduct;
