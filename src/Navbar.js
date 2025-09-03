import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeartPulse } from "lucide-react"; // attractive icon
import "./Navbar.css"; // custom styles

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Add Blood Request", href: "/add-request" }, // New option
    { label: "Register", href: "/register" },
    { label: "Login", href: "/login" }
  ];

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
        {navItems.map((item) => (
          <li key={item.label}>
            <Link to={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
