const express = require("express");
const router = express.Router();
const BloodRequest = require("../models/BloodRequest");

// ✅ POST - Create new blood request
router.post("/add", async (req, res) => {
  try {
    const newRequest = new BloodRequest(req.body);
    await newRequest.save();
    res.status(201).json({ message: "Blood request added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET - Get all blood requests
router.get("/all", async (req, res) => {
  try {
    const requests = await BloodRequest.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
