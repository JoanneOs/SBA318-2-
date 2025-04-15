// // routes/trips.js
// const express = require('express');
// const router = express.Router();
// const { trips } = require('../data/db');

// // Render trips.ejs with data
// router.get('/', (req, res) => {
//   res.render('trips', { trips }); // ✅ Pass trips to EJS
// });

// // Keep other routes (like /:tripId) as JSON APIs if needed
// router.get('/:tripId', (req, res) => {
//   const trip = trips.find(t => t['Trip ID'] === req.params.tripId);
//   res.json(trip); // (Optional: API endpoint)
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// Load and parse trip data
const tripsFilePath = path.join(__dirname, "../data/Trips-3.json");

let tripsRaw = [];
try {
  const fileContent = fs.readFileSync(tripsFilePath, "utf8");
  tripsRaw = JSON.parse(fileContent);
} catch (error) {
  console.error("Error reading trips data:", error);
}

// Format date fields
const trips = tripsRaw.map((trip) => {
  const rawDate = trip["Stop 1 Planned Arrival Date"];
  const parsedDate = new Date(rawDate);
  const formattedDate = !isNaN(parsedDate.getTime())
    ? parsedDate.toLocaleDateString()
    : "Invalid Date";

  return {
    ...trip,
    formattedDate,
  };
});

// Route: GET /trips
router.get("/", (req, res) => {
  if (!trips || trips.length === 0) {
    return res.status(500).json({ error: "No trip data available" });
  }

  res.render("trips", { trips });
});

module.exports = router;
