

const express = require("express"); // bring in express so we can use it
const app = express(); // this creates our express application

//telling  my browser where to view
const path = require("path");
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs"); //setting view engine

//changing home view:  
   app.get("/", (req, res) => {
  res.render("home"); // looks for views/home.ejs  //going to home.ejs 
});






app.get("/", (req, res) => {
    res.send("Welcome to my RESTful API");
  });
  
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
  