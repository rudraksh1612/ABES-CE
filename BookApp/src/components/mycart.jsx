import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./mycart.css";

export default function MyCart() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const raw = localStorage.getItem("cart");
    try {
      setCart(raw ? JSON.parse(raw) : []);
    } catch {
      setCart([]);
    }
  }, []);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (index) => {
    setCart((c) => c.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + (Number(item.price) || 0), 0);

  return (
    <div className="mycart-page">
      <header className="mycart-header">
        <h2>Your Cart</h2>
        <div className="mycart-actions">
          <Link to="/" className="btn-link">Continue Shopping</Link>
          <button className="btn" onClick={clearCart} disabled={cart.length === 0}>
            Clear Cart
          </button>
        </div>
      </header>

      {cart.length === 0 ? (
        <div className="empty">
          <p>Your cart is empty.</p>
          <Link to="/" className="btn">Go to Home</Link>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, idx) => (
              <li key={idx} className="cart-item">
                <img src={item.img || ""} alt={item.title || "book"} />
                <div className="item-info">
                  <h3>{item.title || "Untitled"}</h3>
                  <p>Price: ₹{item.price || "0"}</p>
                  {item.qty && <p>Qty: {item.qty}</p>}
                </div>
                <div className="item-actions">
                  <button className="remove-btn" onClick={() => removeItem(idx)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <footer className="cart-footer">
            <div className="total">Total: <strong>₹{total}</strong></div>
            <div className="checkout">
              <button className="btn" onClick={() => alert("Checkout stub — implement as needed")}>
                Checkout
              </button>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
