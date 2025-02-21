import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";
import ProductViewScreen from "./pages/ProductViewScreen";
import UpdateProduct from "./components/UpdateProduct";
import AdminDshboard from "./pages/AdminDshboard.js";
import NotFound from "./pages/NotFound.js";
import AboutUs from "./pages/AboutUs.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import CompanyContact from "./pages/CompanyContact.js";
import LoginScreen from "./pages/LoginScreen.js";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ProductCard />} />
        <Route path="/add" element={<ProductForm />} />
        <Route path="/admin" element={<AdminDshboard />} />
        <Route path="/view" element={<ProductViewScreen />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sigin" element={<LoginScreen />} />

        <Route path="/contact" element={<CompanyContact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
