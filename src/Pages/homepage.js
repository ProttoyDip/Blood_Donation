import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ResponsiveLayout from "./responsiveLayout";
import Navbar from "../Navbar"; 
import "../styles.css";


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
  fontWeight: 700
};

const bannerBg =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"; 

function useInView(threshold = 0.15) {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Homepage() {
  const searchDonorsRef = useRef(null); 

  const scrollToSearchDonors = () => {
    if (searchDonorsRef.current) {
      searchDonorsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  const [smsRef, smsInView] = useInView();
  const [searchRef, searchInView] = useInView();
  const [networkRef, networkInView] = useInView();
  const [tutorialRef, tutorialInView] = useInView();
  const [tutorial2Ref, tutorial2InView] = useInView();


  const isMobile = window.innerWidth <= 900;

 
  const [activeNav, setActiveNav] = useState("home");
  const location = useLocation();

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

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#fff", minHeight: "100vh", overflowY: "auto" }}>
    
      <Navbar />
      <div
        style={{
          position: "relative",
          background: `url(${bannerBg}) center/cover no-repeat`,
          minHeight: 420,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}>
      <div style={{ position: "relative", zIndex: 3, maxWidth: 700, margin: "0 auto" }}>
           <h1 style={{
            fontSize: 38,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 12,
            textShadow: "0 2px 8px rgba(0,0,0,0.18)"
          }}>
            SMS-based platform to connect<br />blood searchers with donors
          </h1>
          <p style={{
            fontSize: 20,
            color: "#fff",
            marginBottom: 32,
            textShadow: "0 2px 8px rgba(0,0,0,0.12)"
          }}>
            Pulse of Hope is a real-time free platform to help blood searchers connect voluntary blood donors around Bangladesh.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, alignItems: "center", marginTop: 24 }}>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button style={{ ...bannerBtnRed, minWidth: 170, textAlign: "center" }}>Join as a Donor</button>
            </Link>
            <button
              onClick={scrollToSearchDonors}
              style={{ ...bannerBtnWhite, minWidth: 170, textAlign: "center" }}
            >
              Search Donors
            </button>
          </div>
        </div>
       
        <svg viewBox="0 0 1440 100" style={{ position: "absolute", bottom: -1, left: 0, width: "100%", height: 80, zIndex: 2 }}>
          <path fill="#fff" d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,101.3C672,96,768,96,864,101.3C960,107,1056,117,1152,117.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div style={{
        background: "#fff",
        maxWidth: 1200,
        margin: "0 auto",
        marginTop: 0,
        borderRadius: 16,
        boxShadow: "0 4px 32px 0 rgba(0,0,0,0.04)",
        padding: "48px 32px 32px 32px",
        display: "flex",
        gap: 40,
        position: "relative",
        top: -40
      }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>What is Pulse of Hope?</h2>
          <p style={{ fontSize: 18, color: "#444" }}>
            Pulse of Hope is an automated blood service that connects blood searchers with voluntary donors in a moment through SMS. Pulse of Hope is always a free service for all.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Why is Pulse of Hope?</h2>
          <ul style={{ fontSize: 18, color: "#444", listStyle: "none", padding: 0, margin: 0 }}>
            <li>• 100% Automated</li>
            <li>• Always free</li>
            <li>• 24×7 service</li>
            <li>• All data is secured</li>
          </ul>
         <Link to="/about" style={{ textDecoration: "none" }}>
  <button style={learnMoreBtn}>Learn More</button>
        </Link>

        </div>
      </div>

    
      {isMobile ? (
        <>
          <div
            ref={tutorialRef}
            style={{
              opacity: tutorialInView ? 1 : 0,
              transform: tutorialInView ? "translateY(0)" : "translateY(60px)",
              transition: "all 0.8s cubic-bezier(.4,1.4,.6,1) 0.1s",
              background: "#fff",
              maxWidth: 600,
              margin: "32px auto 0 auto",
              borderRadius: 16,
              boxShadow: "0 4px 32px 0 rgba(0,0,0,0.04)",
              padding: "32px 24px",
              fontSize: 18,
              color: "#222"
            }}
          >
            <b>How to request blood?</b>
            <div style={{ marginTop: 12 }}>
              Send SMS in the format: <span style={{ color: themeRed, fontWeight: 600 }}>need group district unit date</span>
              <br />
              Example: <span style={{ color: themeRed }}>need B+ Dhaka 2 24-3-2022</span>
            </div>
          </div>
          <div
            ref={tutorial2Ref}
            style={{
              opacity: tutorial2InView ? 1 : 0,
              transform: tutorial2InView ? "translateY(0)" : "translateY(60px)",
              transition: "all 0.8s cubic-bezier(.4,1.4,.6,1) 0.2s",
              background: "#fff",
              maxWidth: 600,
              margin: "24px auto 0 auto",
              borderRadius: 16,
              boxShadow: "0 4px 32px 0 rgba(0,0,0,0.04)",
              padding: "32px 24px",
              fontSize: 18,
              color: "#222"
            }}
          >
            <b>How to become a donor?</b>
            <div style={{ marginTop: 12 }}>
              Register as a donor and help save lives. You can join as a donor by clicking the button above.
            </div>
          </div>
        </>
      ) : null}

    
      <div
        ref={smsRef}
        style={{
          width: "100%",
          background: "#fff",
          marginTop: 40,
          marginBottom: 0,
          opacity: smsInView ? 1 : 0,
          transform: smsInView ? "translateY(0)" : "translateY(60px)",
          transition: "all 0.8s cubic-bezier(.4,1.4,.6,1) 0.1s",
          overflowX: "hidden"
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "40px 0 0 0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 60,
            flexWrap: "wrap"
          }}
          className="sms-flex-container"
        >
          <div style={{ minWidth: 220, flex: 1 }}>
            <button
              style={{
                background: themeRed,
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "8px 24px",
                fontWeight: 600,
                fontSize: 16,
                marginBottom: 18,
                cursor: "pointer",
                boxShadow: "0 2px 8px 0 rgba(239,43,45,0.10)",
                width: "100%",
                maxWidth: 350
              }}
              className="sms-request-btn"
            >
              To place a blood request <span style={{ fontSize: 14 }}>▼</span>
            </button>
            <div
              style={{
                background: "#fff",
                borderRadius: 8,
                boxShadow: "0 2px 16px 0 rgba(0,0,0,0.06)",
                padding: 24,
                minWidth: 220,
                maxWidth: 350,
                marginTop: 10,
                width: "100%",
                boxSizing: "border-box"
              }}
              className="sms-card"
            >
              <div style={{ fontWeight: 700, color: themeRed, fontSize: 22, marginBottom: 4 }}>NEED</div>
              <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>To contact donors when you need blood</div>
              <table style={{ width: "100%", fontSize: 14, color: "#222", marginBottom: 8 }}>
                <thead>
                  <tr style={{ fontWeight: 600 }}>
                    <td>FORMAT</td>
                    <td>need</td>
                    <td>group</td>
                    <td>district</td>
                    <td>unit</td>
                    <td>date</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EXAMPLE</td>
                    <td>need</td>
                    <td>B+</td>
                    <td>Noakhali</td>
                    <td>2</td>
                    <td>24-3-2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
         
          <div
            style={{
              position: "relative",
              marginTop: 20,
              marginLeft: 20,
              minWidth: 180,
              maxWidth: 220,
              flex: 1,
              display: "flex",
              justifyContent: "center"
            }}
            className="sms-oval-container"
          >
            <div
              style={{
                border: `5px solid ${themeRed}`,
                borderRadius: "50%",
                padding: "32px 32px",
                color: "#222",
                fontSize: 18,
                fontWeight: 500,
                background: "#fff",
                position: "relative",
                width: 180,
                height: 110,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                boxSizing: "border-box",
                margin: "0 auto"
              }}
              className="sms-oval"
            >
              <span>
                need B+<br />
                Noakhali 2 24-3-2022
              </span>
              <div
                style={{
                  position: "absolute",
                  right: -32,
                  bottom: 20,
                  width: 0,
                  height: 0,
                  borderTop: "20px solid transparent",
                  borderBottom: "20px solid transparent",
                  borderLeft: `32px solid ${themeRed}`,
                  transform: "rotate(-20deg)"
                }}
                className="sms-arrow"
              />
            </div>
          </div>
        </div>
        <style>
          {`
            @media (max-width: 768px) {
              .sms-flex-container {
                flex-direction: column !important;
                gap: 24px !important;
                align-items: stretch !important;
                padding: 0 2vw !important;
              }
              .sms-request-btn {
                width: 100% !important;
                font-size: 1em !important;
                margin-bottom: 16px !important;
              }
              .sms-card {
                min-width: 0 !important;
                max-width: 100% !important;
                padding: 16px !important;
                font-size: 0.95em !important;
              }
              .sms-oval-container {
                margin-left: 0 !important;
                margin-top: 12px !important;
                max-width: 100vw !important;
                justify-content: center !important;
              }
              .sms-oval {
                width: 90vw !important;
                max-width: 320px !important;
                height: 80px !important;
                padding: 18px 10px !important;
                font-size: 1em !important;
              }
              .sms-arrow {
                right: -18px !important;
                bottom: 12px !important;
                border-top: 12px solid transparent !important;
                border-bottom: 12px solid transparent !important;
                border-left: 18px solid ${themeRed} !important;
              }
            }
            @media (max-width: 480px) {
              .sms-oval {
                width: 90vw !important;
                max-width: 220px !important;
                height: 60px !important;
                padding: 10px 4px !important;
                font-size: 0.9em !important;
              }
              .sms-arrow {
                right: -12px !important;
                bottom: 8px !important;
                border-top: 8px solid transparent !important;
                border-bottom: 8px solid transparent !important;
                border-left: 12px solid ${themeRed} !important;
              }
              .sms-card {
                font-size: 0.9em !important;
                padding: 10px !important;
              }
            }
          `}
        </style>
      </div>
      <div
        ref={searchDonorsRef} 
        data-search-donors 
        style={{
          width: "100%",
          background: "#fcfcfc",
          marginTop: 60,
          padding: "60px 0 40px 0",
          borderTop: "1px solid #f3f3f3",
          borderRadius: "0 0 16px 16px"
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontWeight: 700, fontSize: 26, marginBottom: 32 }}>Search Donors</h2>
          <form style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            {/* Blood Group */}
            <select style={searchInputStyle} defaultValue="">
              <option value="" disabled>Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
            <select style={searchInputStyle} defaultValue="">
              <option value="" disabled>Select District</option>
              <option>Bagerhat</option>
              <option>Bandarban</option>
              <option>Barguna</option>
              <option>Barisal</option>
              <option>Bhola</option>
              <option>Bogra</option>
              <option>Brahmanbaria</option>
              <option>Chandpur</option>
              <option>Chapai Nawabganj</option>
              <option>Chattogram</option>
              <option>Chuadanga</option>
              <option>Comilla</option>
              <option>Cox's Bazar</option>
              <option>Dhaka</option>
              <option>Dinajpur</option>
              <option>Faridpur</option>
              <option>Feni</option>
              <option>Gaibandha</option>
              <option>Gazipur</option>
              <option>Gopalganj</option>
              <option>Habiganj</option>
              <option>Jamalpur</option>
              <option>Jashore</option>
              <option>Jhalokathi</option>
              <option>Jhenaidah</option>
              <option>Joypurhat</option>
              <option>Khagrachari</option>
              <option>Khulna</option>
              <option>Kishoreganj</option>
              <option>Kurigram</option>
              <option>Kushtia</option>
              <option>Lakshmipur</option>
              <option>Lalmonirhat</option>
              <option>Madaripur</option>
              <option>Magura</option>
              <option>Manikganj</option>
              <option>Meherpur</option>
              <option>Moulvibazar</option>
              <option>Munshiganj</option>
              <option>Mymensingh</option>
              <option>Naogaon</option>
              <option>Narail</option>
              <option>Narayanganj</option>
              <option>Narsingdi</option>
              <option>Natore</option>
              <option>Netrokona</option>
              <option>Nilphamari</option>
              <option>Noakhali</option>
              <option>Pabna</option>
              <option>Panchagarh</option>
              <option>Patualkhali</option>
              <option>Pirojpur</option>
              <option>Rajbari</option>
              <option>Rajshahi</option>
              <option>Rangamati</option>
              <option>Rangpur</option>
              <option>Satkhira</option>
              <option>Shariatpur</option>
              <option>Sherpur</option>
              <option>Sirajganj</option>
              <option>Sunamganj</option>
              <option>Sylhet</option>
              <option>Tangail</option>
              <option>Thakurgaon</option>
            </select>
            <input
              type="date"
              style={searchInputStyle}
              min={new Date().toISOString().split("T")[0]}
              placeholder="dd/mm/yyyy"
            />
            <select style={searchInputStyle} defaultValue="all">
              <option value="all">All</option>
              <option value="eligible">Eligible</option>
            </select>
            <button type="submit" style={searchBtnStyle}>Search</button>
          </form>
        </div>
      </div>
      <div style={{
        width: "100%",
        background: "#fff",
        padding: "60px 0 40px 0",
        borderRadius: "0 0 16px 16px"
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontWeight: 700, fontSize: 26, marginBottom: 32 }}>We're a network of</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: 80, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 38, color: themeRed, marginBottom: 8 }}>
                <span role="img" aria-label="donors">👥</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 22 }}>864 Donors</div>
            </div>
            <>
              <div>
                <div style={{ fontSize: 38, color: themeRed, marginBottom: 8 }}>
                  <span role="img" aria-label="districts">📍</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 22 }}>64 Districts</div>
              </div>
              <div>
                <div style={{ fontSize: 38, color: themeRed, marginBottom: 8 }}>
                  <span role="img" aria-label="groups">🗂️</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 22 }}>8 Blood Groups</div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

const bannerBtnRed = {
  background: themeRed,
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "12px 32px",
  fontSize: 18,
  fontWeight: 600,
  boxShadow: "0 4px 16px 0 rgba(239,43,45,0.18)",
  cursor: "pointer",
  transition: "background 0.2s"
}

const bannerBtnWhite = {
  background: "#fff",
  color: "#222",
  border: "none",
  borderRadius: 8,
  padding: "12px 32px",
  fontSize: 18,
  fontWeight: 600,
  boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
  cursor: "pointer",
  transition: "background 0.2s"
}

const learnMoreBtn = {
  background: themeRed,
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "10px 28px",
  fontSize: 18,
  fontWeight: 600,
  boxShadow: "0 4px 16px 0 rgba(239,43,45,0.18)",
  cursor: "pointer",
  marginTop: 24,
  transition: "background 0.2s"
}

const searchInputStyle = {
  padding: "10px 16px",
  fontSize: 16,
  border: "1px solid #bbb",
  borderRadius: 6,
  outline: "none",
  minWidth: 160,
  background: "#fff"
};

const searchBtnStyle = {
  background: themeRed,
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "10px 32px",
  fontSize: 16,
  fontWeight: 600,
  boxShadow: "0 4px 16px 0 rgba(239,43,45,0.18)",
  cursor: "pointer",
  transition: "background 0.2s"
};
