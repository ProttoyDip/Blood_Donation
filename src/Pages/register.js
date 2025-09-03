import React, { useState } from "react";
import Navbar from "../Navbar"; 
import "../styles.css"; 

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
      // TODO: API call here
    }
  };

  return (
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
      </div>
    </>
  );
}
