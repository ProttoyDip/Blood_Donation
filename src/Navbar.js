import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // custom styles

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="pulse">PULSE</span>
        <span className="hope"> OF HOPE</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      {/* Hamburger menu (for mobile) */}
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
