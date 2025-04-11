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


//by :id
// by :id
router.get('/:id', (req, res) => {
    res.send(`Get fruit with the ID of ${req.params.id}`);
});


// Export the router to use in app.js
module.exports = router;
