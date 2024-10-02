import React from "react";
import { useCart } from "./CartContext";

const ShoppingCart = () => {
  const { cartItems, updateCartItemQuantity, getTotalPrice } = useCart();

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price.toFixed(2)} x
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateCartItemQuantity(
                      item.id,
                      parseInt(e.target.value, 10)
                    )
                  }
                  min="0"
                  style={{
                    width: "50px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                />
                = ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p>
            <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
          </p>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
