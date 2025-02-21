import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/CSS/ProductView.css";

function ProductViewScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api")
      .then((response) => {
        console.log("Products data:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleProductDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/product/${id}`)
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
        alert("Product deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        alert("Failed to delete the product. Please try again.");
      });
  };

  return (
    <div className="product-view-container">
      <h1 className="product-view-header">Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={`http://localhost:5000/uploads/${product.image_file}`}
              alt={product.name}
              className="product-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-image.jpg";
              }}
            />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">
                ${Number(product.price).toFixed(2)}
              </p>
              <div className="product-actions">
                <Link to={`/update/${product.id}`} className="edit-btn">
                  Edit
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => handleProductDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductViewScreen;
