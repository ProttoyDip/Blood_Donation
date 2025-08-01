import React, { useEffect, useState } from "react";

// Mobile-first responsive layout using flexible units and media queries
export default function ResponsiveLayout({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [navOpen, setNavOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState(window.location.pathname);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.maxWidth = "100vw";
    document.documentElement.style.maxWidth = "100vw";
    document.body.style.position = "relative";
    document.documentElement.style.position = "relative";

    const handleResize = () => {
      setWidth(window.innerWidth);
      setNavOpen(false);
    };
    window.addEventListener("resize", handleResize);

    // Listen for route changes
    const handleRoute = () => setActiveRoute(window.location.pathname);
    window.addEventListener("popstate", handleRoute);

    return () => {
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
      document.body.style.maxWidth = "";
      document.documentElement.style.maxWidth = "";
      document.body.style.position = "";
      document.documentElement.style.position = "";
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("popstate", handleRoute);
    };
  }, []);

  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;
  const isDesktop = width > 1024;

  // Navigation items
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
      className="responsive-root"
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#fff",
        fontFamily: "Poppins, sans-serif",
        boxSizing: "border-box",
        overflowX: "hidden",
        position: "relative",
        maxWidth: "100vw"
      }}
    >
      {/* Responsive Navigation Bar */}
      <nav
        style={{
          background: "#ef2b2d",
          color: "#fff",
          minHeight: 64,
          width: "100%",
          position: "relative",
          zIndex: 100,
          boxSizing: "border-box",
          maxWidth: "100vw"
        }}
      >
        <div style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          height: 64,
          padding: isMobile ? "0 2vw" : "0 4vw",
          justifyContent: "space-between",
          position: "relative"
        }}>
          {/* Logo */}
          <div style={{
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: 2,
            fontFamily: "'Poppins', sans-serif",
            color: "#fff",
            display: "flex",
            alignItems: "center"
          }}>
            <span style={{
              color: "#fff",
              fontWeight: 900,
              fontSize: 32,
              letterSpacing: 3,
              textShadow: "0 2px 8px rgba(239,43,45,0.10)"
            }}>
              Pulse
            </span>
            <span style={{
              color: "#fff",
              fontWeight: 400,
              fontSize: 22,
              marginLeft: 8,
              letterSpacing: 2,
              opacity: 0.85,
              fontStyle: "italic"
            }}>
              of Hope
            </span>
          </div>
          {/* Hamburger Icon */}
          {isMobile && (
            <button
              aria-label="Open navigation"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                zIndex: 101,
                padding: 8,
                marginLeft: 12,
                display: "flex",
                alignItems: "center"
              }}
            >
              <span style={{
                display: "inline-block",
                width: 28,
                height: 28,
                position: "relative"
              }}>
                {/* Hamburger icon animation */}
                <span style={{
                  position: "absolute",
                  top: 7,
                  left: 0,
                  width: "100%",
                  height: 3,
                  background: "#fff",
                  borderRadius: 2,
                  transition: "transform 0.3s",
                  transform: navOpen ? "rotate(45deg) translateY(8px)" : "none"
                }} />
                <span style={{
                  position: "absolute",
                  top: 14,
                  left: 0,
                  width: "100%",
                  height: 3,
                  background: "#fff",
                  borderRadius: 2,
                  opacity: navOpen ? 0 : 1,
                  transition: "opacity 0.3s"
                }} />
                <span style={{
                  position: "absolute",
                  top: 21,
                  left: 0,
                  width: "100%",
                  height: 3,
                  background: "#fff",
                  borderRadius: 2,
                  transition: "transform 0.3s",
                  transform: navOpen ? "rotate(-45deg) translateY(-8px)" : "none"
                }} />
              </span>
            </button>
          )}
          {/* Option Bar (Slide-in Menu) */}
          {isMobile ? (
            <div
              className="mobile-nav"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "100vh",
                width: "100vw",
                background: "#ef2b2d",
                zIndex: 200,
                boxShadow: "0 8px 32px 0 rgba(239,43,45,0.18)",
                display: navOpen ? "flex" : "none",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "80px 0 0 0",
                transition: "transform 0.4s cubic-bezier(.4,1.4,.6,1)",
                transform: navOpen ? "translateX(0)" : "translateX(-100vw)",
                overflowX: "hidden"
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    color: "#fff",
                    textDecoration: activeRoute === item.href ? "underline" : "none",
                    fontSize: 22,
                    fontWeight: activeRoute === item.href ? 700 : 500,
                    margin: "12px 0",
                    width: "100%",
                    padding: "12px 24px",
                    borderRadius: 0,
                    background: "none",
                    transition: "color 0.2s, font-weight 0.2s"
                  }}
                  onClick={() => {
                    setNavOpen(false);
                    setActiveRoute(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : (
            <div
              className="desktop-nav"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                maxWidth: "100vw",
                overflowX: "hidden"
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    color: "#fff",
                    textDecoration: activeRoute === item.href ? "underline" : "none",
                    fontSize: 18,
                    fontWeight: activeRoute === item.href ? 700 : 500,
                    margin: "0 24px 0 0",
                    padding: "8px 0",
                    borderRadius: 0,
                    background: "none",
                    transition: "color 0.2s, font-weight 0.2s"
                  }}
                  onClick={() => setActiveRoute(item.href)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
      {/* Main Content Wrapper */}
      <div
        style={{
          maxWidth: isDesktop ? "1400px" : "100vw",
          margin: isDesktop ? "0 auto" : "0",
          padding: isMobile ? "0" : isTablet ? "0 4vw" : "0 6vw",
          boxSizing: "border-box",
          width: "100vw",
          minWidth: 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: isMobile ? "100vw" : "100%",
            maxWidth: isDesktop ? "1200px" : "100vw",
            minWidth: 0,
            margin: 0,
            padding: isMobile ? "0" : "0",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {children}
        </div>
      </div>
      {/* Responsive CSS for all devices */}
      <style>
        {`
          html, body, #root, .responsive-root {
            width: 100vw !important;
            min-width: 0 !important;
            max-width: 100vw !important;
            overflow-x: hidden !important;
            position: relative !important;
            box-sizing: border-box !important;
          }
          .responsive-root {
            box-sizing: border-box;
          }
          img, video {
            max-width: 100%;
            height: auto;
            display: block;
          }
          /* Mobile-first base styles */
          html { font-size: 15px; }
          .responsive-root > div {
            padding: 0;
            width: 100vw !important;
            max-width: 100vw !important;
            min-width: 0 !important;
            margin: 0 !important;
            box-sizing: border-box !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .responsive-root > div > div {
            width: 100vw !important;
            max-width: 100vw !important;
            min-width: 0 !important;
            margin: 0 !important;
            box-sizing: border-box !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          /* 320px - 768px: Mobile */
          @media (max-width: 768px) {
            html { font-size: 14px; }
            .responsive-root > div,
            .responsive-root > div > div {
              padding: 0 !important;
              width: 100vw !important;
              max-width: 100vw !important;
              min-width: 0 !important;
              margin: 0 !important;
              box-sizing: border-box !important;
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
            }
            .responsive-root [style*="display: flex"] {
              flex-direction: column !important;
              flex-wrap: wrap !important;
              align-items: stretch !important;
              min-width: 0 !important;
              width: 100vw !important;
              box-sizing: border-box !important;
            }
            .responsive-root button,
            .responsive-root input,
            .responsive-root select {
              width: 100% !important;
              min-width: 0 !important;
              box-sizing: border-box !important;
              font-size: 1em !important;
            }
            .mobile-nav {
              display: flex !important;
              flex-direction: column !important;
              position: absolute !important;
              top: 64px !important;
              left: 0 !important;
              width: 100vw !important;
              background: #ef2b2d !important;
              z-index: 100 !important;
              box-shadow: 0 8px 32px 0 rgba(239,43,45,0.18) !important;
              padding: 16px 0 !important;
              align-items: flex-start !important;
              max-width: 100vw !important;
              overflow-x: hidden !important;
            }
          }
          /* 769px - 1024px: Tablet */
          @media (min-width: 769px) and (max-width: 1024px) {
            html { font-size: 15px; }
            .responsive-root > div,
            .responsive-root > div > div {
              padding: 0 4vw !important;
              width: 100vw !important;
              max-width: 100vw !important;
              min-width: 0 !important;
              margin: 0 !important;
              box-sizing: border-box !important;
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
            }
          }
          /* 1025px - 1280px: Small Desktop */
          @media (min-width: 1025px) and (max-width: 1280px) {
            html { font-size: 16px; }
            .responsive-root > div,
            .responsive-root > div > div {
              padding: 0 6vw !important;
              width: 100vw !important;
              max-width: 100vw !important;
              min-width: 0 !important;
              margin: 0 !important;
              box-sizing: border-box !important;
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
            }
          }
          /* 1281px+: Large Desktop */
          @media (min-width: 1281px) {
            html { font-size: 17px; }
            .responsive-root > div,
            .responsive-root > div > div {
              padding: 0 8vw !important;
              max-width: 1400px !important;
              margin: 0 auto !important;
              width: 100vw !important;
              min-width: 0 !important;
              box-sizing: border-box !important;
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
            }
          }
        `}
      </style>
    </div>
  );
}

// Add this to your public/index.html head if not present:
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
