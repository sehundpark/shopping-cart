import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import cartIcon from "../assets/cart_17658761.png";

export const NavBar = () => {
  const { getTotalItems } = useCart();

  return (
    <nav className="nav-bar">
      <div className="links-container">
        <Link to="/" className="navigation-clicks">
          Sehun Park's E-Commerce Test Site
        </Link>
        <Link to="/shop" className="navigation-clicks">
          Shop
        </Link>
      </div>
      <div className="cart-container">
        <Link to="/cart">
          <img src={cartIcon} className="cart-image" alt="Cart" />
          {getTotalItems() > 0 && (
            <span className="cart-count">{getTotalItems()}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};
