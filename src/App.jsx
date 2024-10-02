import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import { CartProvider } from "./components/CartContext";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
