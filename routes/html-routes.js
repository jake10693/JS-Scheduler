// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      console.log("gimme a route")
      res.redirect("index");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  app.post("/", function (req, res) {
    res.send("posted to route")
  })
  app.put("/", function(req, res){
    res.send("employee updated")
  })
  app.delete("/", function(req, res){
    res.send("employee deleted")
  })
  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render(path.join(__dirname, "/index"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  app.get("/profile", isAuthenticated, function (req, res) {
    res.render(path.join(__dirname, "../views/profile.handlebars"));
  });

  app.get("/all-employees", isAuthenticated, function (req, res) {
    res.render(path.join(__dirname, "../views/all-employees.handlebars"));
  });




};


