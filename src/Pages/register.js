import React, { useState, useEffect, useRef } from "react";
import ResponsiveLayout from "./responsiveLayout";

const themeRed = "#ef2b2d";

export default function Register() {
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8 || password.length > 12) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    // ...submit logic...
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Search Donors", href: "/donors" },
    { label: "Add Blood Request", href: "/add-request" },
    { label: "Register", href: "/register" },
    { label: "Login", href: "/login" }
  ];

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fde2e2 0%, #ef2b2d 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0",
      }}
    >
      {/* Navigation Bar */}
      <div style={{ background: themeRed, color: "#fff", minHeight: 80, width: "100%", position: "relative" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", height: 80, justifyContent: "space-between", position: "relative" }}>
          {/* Logo text */}
          <div style={{
            fontSize: 36,
            fontWeight: 700,
            marginRight: 40,
            letterSpacing: 2,
            fontFamily: "'Poppins', sans-serif",
            textTransform: "uppercase",
            color: "#fff",
            display: "flex",
            alignItems: "center"
          }}>
            <span style={{
              color: "#fff",
              fontWeight: 900,
              fontSize: 38,
              letterSpacing: 3,
              textShadow: "0 2px 8px rgba(239,43,45,0.10)",
              fontFamily: "'Poppins', sans-serif"
            }}>
              Pulse
            </span>
            <span style={{
              color: "#fff",
              fontWeight: 400,
              fontSize: 28,
              marginLeft: 8,
              letterSpacing: 2,
              opacity: 0.85,
              fontStyle: "italic",
              fontFamily: "'Poppins', sans-serif"
            }}>
              of Hope
            </span>
          </div>
          {/* Hamburger menu icon */}
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: 38,
              cursor: "pointer",
              zIndex: 102,
              padding: 8,
              display: "flex",
              alignItems: "center"
            }}
          >
            <span style={{
              transition: "transform 0.3s",
              transform: menuOpen ? "rotate(90deg)" : "none"
            }}>☰</span>
          </button>
          {/* Slide-down menu */}
          <div
            ref={menuRef}
            style={{
              position: "absolute",
              top: 80,
              left: 0,
              width: "100%",
              background: themeRed,
              boxShadow: menuOpen ? "0 8px 32px 0 rgba(239,43,45,0.18)" : "none",
              zIndex: 101,
              display: menuOpen ? "flex" : "none",
              flexDirection: "column",
              alignItems: "center",
              transition: "max-height 0.3s, opacity 0.3s",
              maxHeight: menuOpen ? "400px" : "0",
              opacity: menuOpen ? 1 : 0,
              overflow: "hidden"
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 22,
                  fontWeight: 500,
                  padding: "18px 0",
                  width: "100%",
                  textAlign: "center",
                  transition: "background 0.2s, color 0.2s",
                  background: "none"
                }}
                onClick={() => setMenuOpen(false)}
                onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                onMouseOut={e => e.currentTarget.style.background = "none"}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Banner */}
      <div style={{
        background: "#fde2e2",
        padding: "60px 0 80px 0",
        marginBottom: -60,
        boxShadow: "0 8px 32px 0 rgba(239,43,45,0.08)",
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{ fontSize: 38, fontWeight: 700, margin: 0 }}>Register with Pulse of Hope</h1>
          <p style={{ fontSize: 16, marginTop: 16, color: "#222" }}>
            Register with us to avail all the features.
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div style={{
        display: "flex",
        maxWidth: 1200,
        margin: "60px auto 0 auto",
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 32px 0 rgba(0,0,0,0.04)",
        padding: "60px 0 80px 0",
        minHeight: 400
      }}>
        {/* Left: Social Register */}
        <div style={{ flex: 1, padding: "0 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Register with<br />Social Platforms</h2>
          <div style={{ fontSize: 16, color: "#444", marginTop: 24 }}>
            {/* Social login buttons can go here */}
          </div>
        </div>
        {/* Right: Register with Mobile */}
        <div style={{ flex: 1, padding: "0 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Register with<br />Mobile</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Mobile</label>
              <input type="text" placeholder="Mobile" style={inputStyle} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Email</label>
              <input type="email" placeholder="Email" style={inputStyle} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                placeholder="Password (8-12 characters)"
                style={inputStyle}
                value={password}
                onChange={e => setPassword(e.target.value)}
                minLength={8}
                maxLength={12}
              />
            </div>
            <button type="submit" style={registerBtnStyle}>Register</button>
            {invalid && (
              <div style={{ color: themeRed, marginTop: 12, fontWeight: 500, textAlign: "center" }}>
                Password must be 8-12 characters
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  fontSize: 16,
  fontWeight: 500,
  marginBottom: 8,
  color: "#222"
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  fontSize: 16,
  border: "1px solid #bbb",
  borderRadius: 6,
  outline: "none",
  marginBottom: 0,
  background: "#fff"
};

const registerBtnStyle = {
  background: themeRed,
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "10px 32px",
  fontSize: 16,
  fontWeight: 600,
  boxShadow: "0 8px 32px 0 rgba(239,43,45,0.18)",
  cursor: "pointer",
  marginTop: 8,
  transition: "background 0.2s"
};