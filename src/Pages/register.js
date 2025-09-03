import React, { useState } from "react";
<<<<<<< HEAD
import Navbar from "../Navbar"; 
import "../styles.css"; 
=======

const themeRed = "#ef2b2d";
>>>>>>> 8415801271a315c9e7ec1ca4aa6756e4153c89df

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bloodGroup: "",
    district: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const districts = [
    "Bagerhat", "Bandarban", "Barguna", "Barisal", "Bhola", "Bogra", "Brahmanbaria",
    "Chandpur", "Chapai Nawabganj", "Chattogram", "Chuadanga", "Comilla", "Cox's Bazar",
    "Dhaka", "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj",
    "Habiganj", "Jamalpur", "Jashore", "Jhalokathi", "Jhenaidah", "Joypurhat",
    "Khagrachari", "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur",
    "Lalmonirhat", "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar",
    "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi",
    "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh",
    "Patualkhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur",
    "Satkhira", "Shariatpur", "Sherpur", "Sirajganj", "Sunamganj", "Sylhet",
    "Tangail", "Thakurgaon"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

<<<<<<< HEAD
=======
    // Basic validation
>>>>>>> 8415801271a315c9e7ec1ca4aa6756e4153c89df
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone Number is required.";
    if (!formData.bloodGroup) newErrors.bloodGroup = "Blood Group is required.";
    if (!formData.district) newErrors.district = "District is required.";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
<<<<<<< HEAD
      // TODO: API call here
=======
      // Add API call or further processing here
>>>>>>> 8415801271a315c9e7ec1ca4aa6756e4153c89df
    }
  };

  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div className="register-page page-container">   {/* ✅ updated wrapper */}
        <div className="form-card">
          <h2 className="form-title">Donor Registration</h2>

          <form onSubmit={handleSubmit} className="form">
            <input 
              type="text" name="fullName" placeholder="Full Name"
              value={formData.fullName} onChange={handleChange} className="form-input" 
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}

            <input 
              type="email" name="email" placeholder="Email Address"
              value={formData.email} onChange={handleChange} className="form-input" 
            />
            {errors.email && <span className="error-text">{errors.email}</span>}

            <input 
              type="text" name="phone" placeholder="Phone Number"
              value={formData.phone} onChange={handleChange} className="form-input" 
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}

            <select 
              name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="form-input"
            >
              <option value="" disabled>Select Blood Group</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
            {errors.bloodGroup && <span className="error-text">{errors.bloodGroup}</span>}

            <select 
              name="district" value={formData.district} onChange={handleChange} className="form-input"
            >
              <option value="" disabled>Select District</option>
              {districts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            {errors.district && <span className="error-text">{errors.district}</span>}

            <input 
              type="date" name="dateOfBirth"
              value={formData.dateOfBirth} onChange={handleChange} className="form-input" 
            />
            {errors.dateOfBirth && <span className="error-text">{errors.dateOfBirth}</span>}

            {/* Gender */}
            <div className="form-radio">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g}>
                  <input 
                    type="radio" name="gender" value={g}
                    checked={formData.gender === g} onChange={handleChange} 
                  /> {g}
                </label>
              ))}
            </div>
            {errors.gender && <span className="error-text">{errors.gender}</span>}

            <input 
              type="password" name="password" placeholder="Password"
              value={formData.password} onChange={handleChange} className="form-input" 
            />
            {errors.password && <span className="error-text">{errors.password}</span>}

            <input 
              type="password" name="confirmPassword" placeholder="Confirm Password"
              value={formData.confirmPassword} onChange={handleChange} className="form-input" 
            />
            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}

            <button type="submit" className="submit-btn">Register</button>
          </form>
        </div>
=======
    <div style={{
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(135deg, #fde2e2 0%, #ef2b2d 100%)",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background Design */}
      <div style={{
        position: "absolute",
        top: "-50px",
        left: "-50px",
        width: "200px",
        height: "200px",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        zIndex: 0
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "-80px",
        right: "-80px",
        width: "300px",
        height: "300px",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        zIndex: 0
      }}></div>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "500px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "50%",
        zIndex: 0
      }}></div>
      {/* Registration Form */}
      <div style={{
        maxWidth: 800,
        margin: "40px auto",
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 32px 0 rgba(0,0,0,0.1)",
        padding: "40px 32px",
        position: "relative",
        zIndex: 1
      }}>
        <h1 style={{ textAlign: "center", color: themeRed, marginBottom: 24 }}>Register as a Donor</h1>
        <p style={{ textAlign: "center", marginBottom: 32, color: "#555" }}>
          Please fill out the form below to join as a donor. All fields are required. Ensure the information provided is accurate to help us connect you with those in need.
        </p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h3>Full Name</h3>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}

          <h3>Email Address</h3>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.email && <span style={errorStyle}>{errors.email}</span>}

          <h3>Phone Number</h3>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.phone && <span style={errorStyle}>{errors.phone}</span>}

          <h3>Blood Group</h3>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="" disabled>Select Blood Group</option>
            {bloodGroups.map((group) => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
          {errors.bloodGroup && <span style={errorStyle}>{errors.bloodGroup}</span>}

          <h3>District</h3>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="" disabled>Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
          {errors.district && <span style={errorStyle}>{errors.district}</span>}

          <h3>Date of Birth</h3>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.dateOfBirth && <span style={errorStyle}>{errors.dateOfBirth}</span>}

          <h3>Gender</h3>
          <div style={{ display: "flex", gap: 16 }}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              /> Other
            </label>
          </div>
          {errors.gender && <span style={errorStyle}>{errors.gender}</span>}

          <h3>Password</h3>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.password && <span style={errorStyle}>{errors.password}</span>}

          <h3>Confirm Password</h3>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.confirmPassword && <span style={errorStyle}>{errors.confirmPassword}</span>}

          <button type="submit" style={submitBtnStyle}>Register</button>
        </form>
>>>>>>> 8415801271a315c9e7ec1ca4aa6756e4153c89df
      </div>
    </>
  );
}
<<<<<<< HEAD
=======

const inputStyle = {
  padding: "12px 16px",
  fontSize: 16,
  border: "1px solid #ccc",
  borderRadius: 6,
  outline: "none",
  width: "100%",
  boxSizing: "border-box"
};

const errorStyle = {
  color: themeRed,
  fontSize: 14,
  marginTop: -8,
  marginBottom: 8
};

const submitBtnStyle = {
  background: themeRed,
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "12px 16px",
  fontSize: 16,
  fontWeight: 600,
  cursor: "pointer",
  transition: "background 0.2s",
  boxShadow: "0 4px 16px 0 rgba(239,43,45,0.18)"
};
>>>>>>> 8415801271a315c9e7ec1ca4aa6756e4153c89df
