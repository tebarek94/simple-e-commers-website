import React, { useEffect, useState } from "react";
import "../assets/CSS/ProductCard.css";
import axios from "axios";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div
      style={{
        marginTop: "70px",
      }}
    >
      <div className="product-card">
        {products.map((product) => {
          const imageUrl = `http://localhost:5000/uploads/${product.image_file}`;

          return (
            <div key={product.id} className="product">
              <img
                src={imageUrl}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
