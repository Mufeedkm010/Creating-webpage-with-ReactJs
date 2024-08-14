import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contactus">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
