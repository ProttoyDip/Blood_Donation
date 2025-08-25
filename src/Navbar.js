import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react"; // attractive icon
import "./Navbar.css"; // custom styles

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <HeartPulse size={32} color="#e63946" className="logo-icon" />
        <span className="pulse">PULSE</span>
        <span className="hope"> OF HOPE</span>
      </div>
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="navbar-hamburger">&#9776;</span>
      </button>
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <button
          className="navbar-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation"
        >
          &times;
        </button>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
}
