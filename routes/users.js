const express = require('express');
const router = express.Router(); // Create a new router instance

// Define routes for /users
router.get('/', (req, res) => {
  res.send("User route"); // Respond with something simple
});

// Add more user-related routes here if needed
router.post('/', (req, res) => {
  // Example: Handle user creation logic
  res.send("Creating a new user");
});

// Export the router to use in app.js
module.exports = router;
