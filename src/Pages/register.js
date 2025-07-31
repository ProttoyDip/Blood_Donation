import React from "react";

const themeRed = "#ef2b2d";

// Make sure to use named export if you are importing as { Login } elsewhere,
// or default export if you are importing as Login elsewhere.
// The following is a default export, so in your App.js or Router use:
// import Login from "./Pages/login";
export default function Login() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif", minHeight: "100vh", background: "#fff" }}>
      {/* Header */}
      <div style={{ background: themeRed, color: "#fff", padding: "0 0 0 0", minHeight: 80 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", height: 80 }}>
          {/* Logo */}
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
              textShadow: "0 2px 8px rgba(239,43,45,0.10)"
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
              fontStyle: "italic"
            }}>
              of Hope
            </span>
          </div>
          {/* Nav */}
          <div style={{ display: "flex", gap: 30, flex: 1 }}>
            <a href="/" style={navLinkStyle}>Home</a>
            <a href="/about" style={navLinkStyle}>About Us</a>
            <a href="/donors" style={navLinkStyle}>Search Donors</a>
            <a href="/add-request" style={navLinkStyle}>Add Blood Request</a>
            <a href="/register" style={navLinkStyle}>Register</a>
            <a href="/login" style={{ ...navLinkStyle, fontWeight: 700 }}>Login</a>
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
          <h1 style={{ fontSize: 48, fontWeight: 700, margin: 0 }}>Login with Pulse of Hope</h1>
          <p style={{ fontSize: 20, marginTop: 16, color: "#222" }}>
            Login with us to avail all the features.
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div style={{
        display: "flex",
        maxWidth: 1200,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 32px 0 rgba(0,0,0,0.04)",
        marginTop: 0,
        padding: "60px 0 80px 0"
      }}>
        {/* Left: Social Login */}
        <div style={{ flex: 1, padding: "0 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 600, marginBottom: 8 }}>Login with<br />Social Platforms</h2>
          {/* You can replace above with actual social login buttons */}
        </div>
        {/* Right: Email/Password Login */}
        <div style={{ flex: 1, padding: "0 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 600, marginBottom: 24 }}>Login</h2>
          <form>
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Email</label>
              <input type="email" placeholder="Email" style={inputStyle} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Password</label>
              <input type="password" placeholder="Password" style={inputStyle} />
            </div>
            <div style={{ marginBottom: 24, display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="remember" style={{ marginRight: 8 }} />
              <label htmlFor="remember" style={{ fontSize: 16, color: "#222" }}>Remember Me</label>
            </div>
            {/* <button type="submit" style={loginBtnStyle}>Log In</button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: 18,
  fontWeight: 500,
  marginRight: 24,
  transition: "color 0.2s"
};

const labelStyle = {
  display: "block",
  fontSize: 18,
  fontWeight: 500,
  marginBottom: 8,
  color: "#222"
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  fontSize: 18,
  border: "1px solid #bbb",
  borderRadius: 6,
  outline: "none",
  marginBottom: 0,
  background: "#fff"
};

const loginBtnStyle = {
  background: themeRed,
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "12px 36px",
  fontSize: 20,
  fontWeight: 600,
  boxShadow: "0 8px 32px 0 rgba(239,43,45,0.18)",
  cursor: "pointer",
  marginTop: 8,
  transition: "background 0.2s"
};