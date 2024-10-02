import React, { useState } from "react";
import { useCart } from "./CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 0 : Math.max(0, value));
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      setQuantity(1); // Reset quantity after adding to cart
    }
  };

  return (
    <div className="product-card">
      <h3 className="product-title">{product.title}</h3>
      <div className="product-image-container">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
      </div>
      <p>${product.price.toFixed(2)}</p>
      <div className="quantity-control">
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="0"
        />
      </div>
      <button
        className="add-to-cart-button"
        onClick={handleAddToCart}
        disabled={quantity === 0}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
