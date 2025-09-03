import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import Navbar from "../Navbar";
import "../styles.css";

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
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="show-pass-btn"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
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
    </>
  );
}
