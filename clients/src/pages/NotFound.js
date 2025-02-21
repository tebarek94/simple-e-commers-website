import React from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/NotFound.css"; // Make sure to link the CSS file

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Oops! The page you are looking for doesn't exist.
        </p>
        <Link to="/" className="not-found-btn">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
