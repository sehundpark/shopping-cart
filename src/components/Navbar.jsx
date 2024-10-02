import React from "react";
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import cartIcon from "../assets/cart_17658761.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div>
        <Link to="/" className="navigation-clicks">
          Home
        </Link>
        <Link to="/shop" className="navigation-clicks">
          Shop
        </Link>
      </div>
      <div className="navigation-bar-title">Retail Store</div>
      <div>
        <Link to="/cart">
          <img src={cartIcon} className="navigation-clicks" alt="Cart" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
