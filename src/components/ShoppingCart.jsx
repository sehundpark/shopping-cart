import { useCart } from "../components/CartContext";

export const ShoppingCart = () => {
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
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="cart-item-title">{item.title}</span>
              <span className="cart-item-price">${item.price.toFixed(2)}</span>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateCartItemQuantity(item.id, parseInt(e.target.value, 10))
                }
                min="1"
                max="999"
                className="cart-item-quantity"
              />
              <span className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-item-btn"
              >
                Remove
              </button>
            </div>
          ))}
          <p className="cart-total">Total: ${getTotalPrice().toFixed(2)}</p>
          <div className="shopping-cart-btn-container">
            <button onClick={clearCart} className="clear-cart-btn">
              Clear Cart
            </button>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};
