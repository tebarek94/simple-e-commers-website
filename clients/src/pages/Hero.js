import React from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/Hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to ShopEase</h1>
        <p className="hero-subtitle">
          Your one-stop destination for the best products at the best prices.
        </p>
        <Link to="/view" className="hero-btn">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
