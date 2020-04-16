// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("index");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  
  app.post("/", function (req, res) {
    res.send("posted to route")
  })

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.render(path.join(__dirname, "/index"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
 

  app.get("/profile", isAuthenticated, function (req, res) {
    res.render(path.join(__dirname, "../views/profile.handlebars"));
  });

  app.get("/all-employees", isAuthenticated, function (req, res) {
    res.render(path.join(__dirname, "../views/all-employees.handlebars"));
  });
  app.get("/main", isAuthenticated, function (req, res) {
    res.render(path.join(__dirname, "../views/layouts/main.handlebars"));
  });
  
  app.get("/index", isAuthenticated, function (req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  app.get("/edit-employees", isAuthenticated, function (req, res) {
    res.render(path.join(__dirname, "../views/edit-employees.handlebars"));
  });

  app.get("/new-employee", isAuthenticated, function (req, res) {
    res.render(path.join(__dirname, "../views/new-schedule.handlebars"));
  });

  app.get("/new-schedule", isAuthenticated, function (req, res) {
    res.render(path.join(__dirname, "../views/new-schedule.handlebars"));
  });

};


