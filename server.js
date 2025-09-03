const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// ✅ app define আগে করো
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes import
const bloodRequestRoutes = require("./routes/bloodRequestRoutes");
const userRoutes = require("./routes/userRoutes");

// ✅ Use routes
app.use("/api/blood", bloodRequestRoutes);
app.use("/api/users", userRoutes);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

// ✅ Root route
app.get("/", (req, res) => {
  res.send("API is working!");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
