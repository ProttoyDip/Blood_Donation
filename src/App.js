import './App.css';
import Homepage from "./Pages/homepage";
import Login from "./Pages/login";
import Register from "./Pages/register";
import AboutUs from "./Pages/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
