const express = require('express');
const router = express.Router(); // Create a new router instance

// Define routes for /comments
router.get('/', (req, res) => {
  res.send("Comment route"); // Simple response for now
});

// Add more comment-related routes here if needed
router.post('/', (req, res) => {
  // Example: Handle comment creation logic
  res.send("Creating a new comment");
});

//adding here route by Id:

// router.get('/:id', (req, res) => {
//     res.send(`Get Comments with the ID of ${req.params.id}`)
//   })

router.get('/:id', (req, res) => {
    const commentId = req.params.id;
    res.render('commentDetails', { commentId });
});

// Export the router to use in app.js
module.exports = router;