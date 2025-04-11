

const express = require("express"); // bring in express so we can use it
const app = express(); // this creates our express application


app.get("/", (req, res) => {
    res.send("Welcome to my RESTful API");
  });
  
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
  