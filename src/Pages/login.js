import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import Navbar from "../Navbar";
import "../styles.css";

<<<<<<< HEAD
=======
const themeRed = "#ef2b2d";

// Make sure to use named export if you are importing as { Login } elsewhere,
// or default export if you are importing as Login elsewhere.
// The following is a default export, so in your App.js or Router use:
// import Login from "./Pages/login";
>>>>>>> 8415801271a315c9e7ec1ca4aa6756e4153c89df
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let emailValid = !!email && email.includes("@");
    let passwordValid = !!password && password.length >= 8;
    setInvalidEmail(!emailValid);
    setInvalidPassword(!passwordValid);

    if (!emailValid || !passwordValid) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2000);
  };

<<<<<<< HEAD
  return (
    <>
      <Navbar />
      <div className="login-page page-container">
        <div className="form-card">
          <h2 className="form-title">Log In</h2>

          <form onSubmit={handleLogin} className="form">
            {/* Email */}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
            {invalidEmail && (
              <span className="error-text">Please enter a valid email address.</span>
            )}

            {/* Password */}
            <div className="password-wrapper">
=======
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Search Donors", href: "/donors" },
    { label: "Add Blood Request", href: "/add-request" },
    { label: "Register", href: "/register" },
    { label: "Login", href: "/login" }
  ];

  // Add eye icon SVGs
  const EyeIcon = ({ open }) => (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: open
          ? "linear-gradient(135deg, #ef2b2d 60%, #ff6a00 100%)"
          : "linear-gradient(135deg, #bbb 60%, #ef2b2d 100%)",
        boxShadow: open
          ? "0 0 8px 2px #ef2b2d88, 0 0 0 4px #fff"
          : "0 0 6px 1px #bbb8",
        transition: "background 0.3s, box-shadow 0.3s",
        cursor: "pointer",
        border: open ? "2px solid #fff" : "2px solid #eee"
      }}
      tabIndex={0}
      aria-label={open ? "Hide password" : "Show password"}
    >
      {open ? (
        // Eye open SVG
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <ellipse cx="10" cy="10" rx="7" ry="5" stroke="#fff" strokeWidth="2" />
          <circle cx="10" cy="10" r="2.5" fill="#fff" />
        </svg>
      ) : (
        // Eye closed SVG
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <ellipse cx="10" cy="10" rx="7" ry="5" stroke="#fff" strokeWidth="2" />
          <line x1="5" y1="15" x2="15" y2="5" stroke="#fff" strokeWidth="2" />
        </svg>
      )}
    </span>
  );

  // Define a consistent style for input fields and buttons
  const inputColStyle = {
    width: "100%",
    maxWidth: 360,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  const inputStyle = {
    width: "100%",
    maxWidth: 360,
    padding: "12px 48px 12px 16px",
    fontSize: 16,
    border: "1px solid #bbb",
    borderRadius: 8,
    outline: "none",
    marginBottom: 0,
    background: "#fff",
    transition: "box-shadow 0.2s",
    boxSizing: "border-box"
  };
  const labelStyle = {
    display: "block",
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 8,
    color: "#222",
    width: "100%",
    textAlign: "left"
  };
  const buttonStyle = {
    width: "100%",
    maxWidth: 360,
    padding: "12px 32px",
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
  };

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
            <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
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
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, textAlign: "center" }}>Login</h2>
          <form onSubmit={handleLogin} style={inputColStyle}>
            <div style={{ marginBottom: 20, width: "100%" }}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ ...inputStyle, paddingRight: 16 }}
              />
              {invalidEmail && (
                <div style={{ color: themeRed, marginTop: 6, fontSize: 14 }}>
                  Please enter a valid email address.
                </div>
              )}
            </div>
            <div style={{ marginBottom: 20, width: "100%", position: "relative" }}>
              <label style={labelStyle}>Password</label>
>>>>>>> 8415801271a315c9e7ec1ca4aa6756e4153c89df
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
<<<<<<< HEAD
                className="form-input"
=======
                style={inputStyle}
>>>>>>> 8415801271a315c9e7ec1ca4aa6756e4153c89df
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
<<<<<<< HEAD
                className="show-pass-btn"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
=======
                style={{
                  position: "absolute",
                  right: 10,
                  top: 38,
                  background: "none",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  cursor: "pointer",
                  outline: "none",
                  zIndex: 2,
                  transition: "box-shadow 0.2s"
                }}
                tabIndex={0}
                aria-label={showPassword ? "Hide password" : "Show password"}
                onMouseOver={e => {
                  e.currentTarget.firstChild.style.boxShadow =
                    "0 0 12px 2px #ff6a00cc, 0 0 0 4px #fff";
                }}
                onMouseOut={e => {
                  e.currentTarget.firstChild.style.boxShadow =
                    showPassword
                      ? "0 0 8px 2px #ef2b2d88, 0 0 0 4px #fff"
                      : "0 0 6px 1px #bbb8";
                }}
              >
                <EyeIcon open={showPassword} />
>>>>>>> 8415801271a315c9e7ec1ca4aa6756e4153c89df
              </button>
            </div>
<<<<<<< HEAD
            {invalidPassword && (
              <span className="error-text">Password must be at least 8 characters.</span>
            )}

            {/* Remember Me */}
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>

            {/* Submit */}
            <button type="submit" className="login-btn">
              {loading ? "Logging in..." : "Log In"}
            </button>
=======
            <div style={{
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              width: "100%"
            }}>
              <input type="checkbox" id="remember" style={{ marginRight: 8 }} />
              <label htmlFor="remember" style={{ fontSize: 14 }}>
                Remember Me
              </label>
            </div>
            <button
              type="submit"
              style={buttonStyle}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
            <div style={{ marginTop: 16, textAlign: "center", width: "100%" }}>
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
            <div style={{ marginTop: 16, textAlign: "center", width: "100%" }}>
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
>>>>>>> 8415801271a315c9e7ec1ca4aa6756e4153c89df
          </form>

          {/* Links */}
          <div className="login-links">
            <a href="/forgot-password">Forgot your password?</a>
            <a href="/register">Create an account</a>
          </div>

          {/* Social login */}
          <div className="social-login">
            <p>Or log in with</p>
            <div className="social-buttons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{ background: "#3b5998" }}
              >
                <FaFacebookF size={16} /> Facebook
              </a>
              <a
                href="https://github.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{ background: "#24292e" }}
              >
                <FaGithub size={16} /> GitHub
              </a>
              <a
                href="https://accounts.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{ background: "#db4437" }}
              >
                <FaGoogle size={16} /> Google
              </a>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </>
  );
}
=======
      {/* Responsive style for eye icon and input alignment */}
      <style>
        {`
        @media (max-width: 900px) {
          form, .input-col {
            max-width: 98vw !important;
            min-width: 0 !important;
          }
        }
        @media (max-width: 600px) {
          form, .input-col {
            max-width: 100vw !important;
            min-width: 0 !important;
            padding: 0 8vw !important;
          }
          input[type="password"], input[type="text"], input[type="email"] {
            font-size: 15px !important;
            padding-right: 44px !important;
            min-width: 0 !important;
            max-width: 100% !important;
          }
          button[type="submit"] {
            min-width: 0 !important;
            max-width: 100% !important;
          }
        }
        `}
      </style>
    </div>
  );
}

>>>>>>> 8415801271a315c9e7ec1ca4aa6756e4153c89df
