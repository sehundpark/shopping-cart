import React from "react";
import { useCart } from "../components/CartContext";

const ShoppingCart = () => {
  const {
    cartItems,
    updateCartItemQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
  } = useCart();

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.title}</span>
                <span>${item.price.toFixed(2)} x</span>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateCartItemQuantity(
                      item.id,
                      parseInt(e.target.value, 10)
                    )
                  }
                  min="1"
                />
                <span>= ${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>
            <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
          </p>
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
