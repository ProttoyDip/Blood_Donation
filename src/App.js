// src/App.js
import './App.css';
import Homepage from "./Pages/homepage";
import Login from "./Pages/login";
import Register from "./Pages/register";
import AboutUs from "./Pages/AboutUs";  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import BloodRequestForm from "./Pages/BloodRequestForm";  // ✅ Import
=======
import BloodRequestForm from './Pages/BloodRequestForm';
import Navbar from "./Navbar";
>>>>>>> 8415801271a315c9e7ec1ca4aa6756e4153c89df

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request" element={<BloodRequestForm />} />   {/* ✅ Fixed route */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/add-request" element={<BloodRequestForm />} />
      </Routes>
    </Router>
  );
}

export default App;
