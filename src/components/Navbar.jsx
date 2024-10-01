import React from "react";
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/shop">Shop</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
