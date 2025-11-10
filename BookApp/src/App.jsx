import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./components/login";
import MyCart from "./components/mycart"; // <-- added import

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        {/* Home Page (Books Listing) */}
        <Route
          path="/"
          element={
            <center>
              <div id="adi">
                <Book title="Math" price="400" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLl1PDJCVU4a8YgxQo5FRpbj5cREf8sjx6w&s" />
                <Book title="Physics" price="700" img="https://cdn.iconscout.com/icon/premium/png-256-thumb/physics-book-icon-svg-download-png-1730255.png" />
                <Book title="Chemistry" price="800" img="https://png.pngtree.com/png-clipart/20231015/original/pngtree-chemistry-text-book-picture-image_13167835.png" />
                <Book title="Computer" price="1000" img="https://www.helmandbooks.com/images/IMG_COVERPAGE_20230120_010311.jpg" />
              </div>
            </center>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Cart Page */}
        <Route path="/cart" element={<MyCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
