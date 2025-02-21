import React from "react";
import Header from "../components/Header";
import ProductViewScreen from "./ProductViewScreen";
import Footer from "../components/Footer";
import "../assets/CSS/AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Header />
      <div className="admin-container">
        <h1 className="admin-title">Admin Management Panel</h1>
        <div className="admin-content">
          <div className="admin-sidebar">
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/view">View Products</a>
              </li>
              <li>
                <a href="/add-product">Add Product</a>
              </li>
              <li>
                <a href="/orders">Manage Orders</a>
              </li>
              <li>
                <a href="/users">Manage Users</a>
              </li>
              <li>
                <a href="/settings">Settings</a>
              </li>
            </ul>
          </div>
          <div className="admin-main">
            <ProductViewScreen />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
