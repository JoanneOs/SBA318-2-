function checkUser(req, res, next) {
    // Example check - feel free to customize this
    console.log("Checking user...");
    next();
  }
  
  module.exports = checkUser;