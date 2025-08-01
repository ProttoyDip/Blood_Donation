import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveLayout from "./responsiveLayout";
import { gsap } from "gsap";

const themeRed = "#ef2b2d";

const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: 18,
  fontWeight: 500,
  marginRight: 24,
  transition: "color 0.2s, font-weight 0.2s"
};

const navLinkActiveStyle = {
  fontWeight: 700,
  textDecoration: "underline"
};

// Make sure to use named export if you are importing as { Login } elsewhere,
// or default export if you are importing as Login elsewhere.
// The following is a default export, so in your App.js or Router use:
// import Login from "./Pages/login";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeNav, setActiveNav] = useState("login");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

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

  const handleLogin = (e) => {
    e.preventDefault();
    let emailValid = !!email && email.includes("@");
    let passwordValid = !!password && password.length >= 8;
    setInvalidEmail(!emailValid);
    setInvalidPassword(!passwordValid);

    if (!emailValid || !passwordValid) return;

    setLoading(true);

    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2000);
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
      {/* Main Content */}
      <div style={{
        display: "flex",
        maxWidth: 1200,
        margin: "40px auto 0 auto",
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 32px 0 rgba(0,0,0,0.04)",
        padding: "60px 0 80px 0",
        minHeight: 400,
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center"
      }}>
        {/* App Logo above social login */}
        <div style={{
          width: "100%",
          textAlign: "center",
          marginBottom: 24
        }}>
          <img
            src={process.env.PUBLIC_URL + "/pulseofhope-logo.png"}
            alt="App Logo"
            style={{ width: 80, height: 80, marginBottom: 16, objectFit: "contain" }}
          />
        </div>
        {/* Left: Social Login */}
        <div style={{
          flex: 1,
          minWidth: 280,
          padding: "0 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Login with<br />Social Platforms</h2>
          <div style={{ fontSize: 16, color: "#444", marginTop: 24 }}>
            <div style={{ display: "flex", gap: 16 }}>
              <button
                style={{
                  background: "#DB4437",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "10px 16px",
                  cursor: "pointer",
                  fontWeight: 500,
                  transition: "font-weight 0.2s"
                }}
                onMouseDown={e => e.currentTarget.style.fontWeight = "700"}
                onMouseUp={e => e.currentTarget.style.fontWeight = "500"}
                onBlur={e => e.currentTarget.style.fontWeight = "500"}
              >
                Google
              </button>
              <button
                style={{
                  background: "#4267B2",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "10px 16px",
                  cursor: "pointer",
                  fontWeight: 500,
                  transition: "font-weight 0.2s"
                }}
                onMouseDown={e => e.currentTarget.style.fontWeight = "700"}
                onMouseUp={e => e.currentTarget.style.fontWeight = "500"}
                onBlur={e => e.currentTarget.style.fontWeight = "500"}
              >
                Facebook
              </button>
              <button
                style={{
                  background: "#333",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "10px 16px",
                  cursor: "pointer",
                  fontWeight: 500,
                  transition: "font-weight 0.2s"
                }}
                onMouseDown={e => e.currentTarget.style.fontWeight = "700"}
                onMouseUp={e => e.currentTarget.style.fontWeight = "500"}
                onBlur={e => e.currentTarget.style.fontWeight = "500"}
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
        {/* Right: Email/Password Login */}
        <div style={{
          flex: 1,
          minWidth: 280,
          padding: "0 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>Login</h2>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 16, fontWeight: 500, marginBottom: 8, color: "#222" }}>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  fontSize: 16,
                  border: "1px solid #bbb",
                  borderRadius: 6,
                  outline: "none",
                  marginBottom: 0,
                  background: "#fff"
                }}
              />
              {invalidEmail && (
                <div style={{ color: themeRed, marginTop: 6, fontSize: 14 }}>
                  Please enter a valid email address.
                </div>
              )}
            </div>
            <div style={{ marginBottom: 20, position: "relative" }}>
              <label style={{ display: "block", fontSize: 16, fontWeight: 500, marginBottom: 8, color: "#222" }}>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  fontSize: 16,
                  border: "1px solid #bbb",
                  borderRadius: 6,
                  outline: "none",
                  marginBottom: 0,
                  background: "#fff"
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: themeRed,
                  fontSize: 14
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              {invalidPassword && (
                <div style={{ color: themeRed, marginTop: 6, fontSize: 14 }}>
                  Password must be at least 8 characters.
                </div>
              )}
            </div>
            <div style={{
              marginBottom: 20,
              display: "flex",
              alignItems: "center"
            }}>
              <input type="checkbox" id="remember" style={{ marginRight: 8 }} />
              <label htmlFor="remember" style={{ fontSize: 14 }}>
                Remember Me
              </label>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px 32px",
                background: themeRed,
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                boxShadow: "0 8px 32px 0 rgba(239,43,45,0.18)",
                cursor: "pointer",
                marginTop: 8,
                transition: "background 0.2s"
              }}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
            <div style={{ marginTop: 16, textAlign: "center" }}>
              <a
                href="/forgot-password"
                style={{
                  color: themeRed,
                  textDecoration: "underline",
                  fontSize: 14,
                }}
              >
                Forgot your password?
              </a>
            </div>
            <div style={{ marginTop: 16, textAlign: "center" }}>
              <a
                href="/register"
                style={{
                  color: themeRed,
                  textDecoration: "underline",
                  fontSize: 14,
                }}
              >
                Create an account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}