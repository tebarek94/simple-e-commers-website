import React from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/Header.css";
import logo from "../assets/logo/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="ShopEase Logo" />
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/list" className="nav-item">
          Shop
        </Link>
        <Link to="/about" className="nav-item">
          About Us
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
        <Link to="/cart" className="nav-item">
          Cart
        </Link>
        <Link to="/sigin" className="nav-item">
          Sign In
        </Link>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button className="search-btn">Search</button>
      </div>
    </header>
  );
};

export default Header;
