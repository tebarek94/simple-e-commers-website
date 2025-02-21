import React from "react";
import "../assets/CSS/Footer.css";
import logo from "../assets/logo/payment.jpg";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-item">
        <h3>Quick Links</h3>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/products">Latest Products</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="footer-item">
        <h3>Contact Us</h3>
        <p>Phone: +25190909090</p>
        <p>Email: xyz@gmail.com</p>
      </div>
      <div className="footer-item">
        <h3>Follow Us</h3>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
      <div className="footer-item">
        <h3>Payment Methods</h3>
        <img src={logo} alt="Visa" />
        <img src={logo} alt="MasterCard" />
        <img src={logo} alt="PayPal" />
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} XYZ Commerce Company. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
