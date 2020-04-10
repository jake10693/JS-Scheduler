// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/api/employee", function (req, res) {
    db.employee.create({
      name: req.body.name
    })
      .then(function () {
        res.redirect(307, "/");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.put("/api/employee", function(req, res){
    db.employee.update({
      name: req.body.name
    }, {
      where:{
        id: req.body.id
      }
    }).then(function(dbEmployee){
      res.json(dbEmployee)
    })
  });

  app.delete("/api/employee/:id", function(req, res){
    db.employee.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEmployee){
      res.json(dbEmployee)
    })
  });

  app.post("/api/event", function (req, res) {
    db.event.create({
      employee_id: req.body.employee_id,
      startTime: req.body.startTime,
      endTime: req.body.endTime
    })
      .then(function () {
        res.redirect(307, "/")
      })
      .catch(function (err) {
        res.status(401).json(err)
      });
  });

  app.put("/api/event", function(req, res){
    db.event.update({
      name: req.body.name
    }, {
      where:{
        id: req.body.id
      }
    }).then(function(dbEvent){
      res.json(dbEvent)
    })
  });

  app.delete("/api/employee/:id", function(req, res){
    db.event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvent){
      res.json(dbEvent)
    })
  });

};
