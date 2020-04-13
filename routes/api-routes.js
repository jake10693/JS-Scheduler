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

  // GET route for getting all employees

  app.get("/api/employee", function (req, res) {
    db.Employee.findAll({}).then(function (dbEmployee) {
      res.json(dbEmployee);
    })
  });

  //POST route for saving new employees

  app.post("/api/employee", function (req, res) {
    console.log(req.body)
    db.Employee.create({
      name: req.body.name
    })
      .then(function () {
        res.redirect(307, "/");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  //PUT route for updating employees

  app.put("/api/employee", function (req, res) {
    db.Employee.update({
      name: req.body.name
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbEmployee) {
      res.json(dbEmployee)
    })
  });

  //DELETE route for deleting an employee

  app.delete("/api/employee/:id", function (req, res) {
    db.Employee.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbEmployee) {
      res.json(dbEmployee)
    })
  });

  //GET route for getting all events

  app.get("/api/events", function (req, res) {
    db.Events.findAll({}).then(function (dbEvent) {
      res.json(dbEvent);
    })
  });

  //POST route for saving new events

  app.post("/api/events", function (req, res) {
    console.log(req.body)
    db.events.create({
      name: req.body.name,
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

  //PUT route for updating all events

  app.put("/api/events", function (req, res) {
    console.log(req.body)
    db.events.update({
      name: req.body.name
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbEvent) {
      res.json(dbEvent)
    })
  });

  //DELETE route for deleting events

  app.delete("/api/events/:id", function (req, res) {
    console.log(req.params)
    db.events.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbEvent) {
      res.json(dbEvent)
    })
  });
};
