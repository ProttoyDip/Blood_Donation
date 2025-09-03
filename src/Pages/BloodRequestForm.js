import React from 'react';
import '../BloodRequest.css';

const BloodRequestForm = () => {
  return (
    <div className="blood-request-container">
      <form className="blood-request-form">
        <h2>Blood Request Form</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Blood Group" required />
        <input type="number" placeholder="Contact Number" required />
        <select required>
          <option value="">Select City</option>
          <option value="City1">City1</option>
          <option value="City2">City2</option>
        </select>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default BloodRequestForm;
