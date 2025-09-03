import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <HeartPulse size={28} className="logo-icon" />
        <span className="pulse">PULSE</span>
        <span className="hope"> OF HOPE</span>
      </div>

      {/* Hamburger Button (Mobile only) */}
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="navbar-hamburger">&#9776;</span>
      </button>

      {/* Menu Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {/* Close Button (Mobile) */}
        <button
          className="navbar-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation"
        >
          &times;
        </button>

        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)}>Log In</Link></li>
        <li><Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link></li>
        <li><Link to="/request" onClick={() => setMenuOpen(false)}>Blood Request</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
      </ul>
    </nav>
  );
}
