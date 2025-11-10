import React, { useState } from 'react';
import './book.css';

function Book(props) {
  const [count, setCount] = useState(0);

  // Function to add the book to localStorage cart
  const addToCart = () => {
    if (count <= 0) {
      alert('Please select at least 1 quantity before adding to cart.');
      return;
    }

    // Get the existing cart (or empty array)
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Create a new cart item object
    const newItem = {
      title: props.title,
      price: props.price,
      img: props.img,
      qty: count,
    };

    // Check if the same book already exists in the cart
    const existingIndex = existingCart.findIndex(
      (item) => item.title === props.title
    );

    if (existingIndex !== -1) {
      // If book already exists, update quantity
      existingCart[existingIndex].qty += count;
    } else {
      // Otherwise, add new item
      existingCart.push(newItem);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));

    alert(`${props.title} added to cart!`);
    setCount(0); // reset quantity after adding
  };

  return (
    <div id="book">
      <img src={props.img} alt={props.title} height={170} width={170} />
      <h1>Title: {props.title}</h1>
      <h2>Price: ₹{props.price}</h2>

      <div className="quantity-control">
        <button
          onClick={() =>
            setCount((c) => {
              if (c <= 0) {
                alert('Cannot go below 0');
                return c;
              }
              return c - 1;
            })
          }
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() =>
            setCount((c) => {
              if (c >= 10) {
                alert('Maximum of 10 exceeded');
                return c;
              }
              return c + 1;
            })
          }
        >
          +
        </button>
      </div>

      {/* Add to Cart button */}
      <button className="add-to-cart-btn" onClick={addToCart}>
        🛒 Add to Cart
      </button>
    </div>
  );
}

export default Book;
