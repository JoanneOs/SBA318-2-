const express = require("express"); // Import express to use it
const app = express(); // Create an instance of the express app

// Import middleware
const logger = require("./middleware/logger");
const checkUser = require("./middleware/checkUser");

// Import route files
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");

// Path module to configure the view engine location
const path = require("path");
app.set("views", path.join(__dirname, "views")); // Set views directory for ejs

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files like CSS from the "public" directory
app.use(express.static("public"));

// Middleware for parsing incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// Use logger middleware for all routes
app.use(logger);

// Use checkUser middleware only for /users routes
app.use("/users", checkUser, userRoutes);

// Define routes for posts and comments
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

// Home route, renders home.ejs
app.get("/", (req, res) => {
  res.render("home"); // This will render the "home" view from views/home.ejs
});

// Error-handling middleware: Catch any errors in routes and send response
app.use((err, req, res, next) => {
  console.error("Error caught by error-handling middleware:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
