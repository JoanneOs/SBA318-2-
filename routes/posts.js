const express = require('express');
const router = express.Router(); // Create a new router instance

// Define routes for /posts
router.get('/', (req, res) => {
  res.send("Post route"); // Respond with a simple message for now
});

// Add more post-related routes here if needed
router.post('/', (req, res) => {
  // Example: Handle post creation logic
  res.send("Creating a new post");
});

// Export the router to use in app.js
module.exports = router;