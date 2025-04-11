function checkUser(req, res, next) {
    console.log("User is being checked");
    next(); // Ensure this is present to pass control to the next middleware/route
  }
  
  module.exports = checkUser; 