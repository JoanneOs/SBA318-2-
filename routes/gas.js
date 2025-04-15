const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// Load and parse gas data from JSON file
const gasFilePath = path.join(__dirname, "../data/gas.json");

let gasDataRaw = [];
try {
  const fileContent = fs.readFileSync(gasFilePath, "utf8");
  gasDataRaw = JSON.parse(fileContent);
} catch (error) {
  console.error("Error reading gas data file:", error);
}

// Format and prepare data
const gasData = gasDataRaw.map(entry => {
  const rawDate = entry["Transaction Date (GMT)"] || entry["Posted Date (GMT)"];
  const parsedDate = new Date(rawDate);
  const formattedDate = !isNaN(parsedDate.getTime())
    ? parsedDate.toLocaleDateString()
    : "Invalid Date";

  return {
    ...entry,
    formattedDate
  };
});

// Route: GET /gas
router.get("/", (req, res) => {
  if (!gasData || gasData.length === 0) {
    return res.status(500).json({ error: "No gas data available" });
  }

  res.render("gas", { gasData });
});

module.exports = router;
