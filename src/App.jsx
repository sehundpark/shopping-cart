import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import { CartProvider, useCart } from "./components/CartContext";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ShoppingCart from "./components/ShoppingCart";
import SlidingNotification from "./components/SlidingNotification";

// New component to wrap the app content
const AppContent = () => {
  const { notification, clearNotification } = useCart();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      {notification && (
        <SlidingNotification
          message={notification}
          onClose={clearNotification}
        />
      )}
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
