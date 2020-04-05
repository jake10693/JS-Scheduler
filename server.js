const express = require("express");
const path = require("path");
const fs = require("fs");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// sets up handlebars
// =============================================================
const exphbs = require("express-handlebars")
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}))
app.set("view engine", "handlebars")

// Routes
// =============================================================

// API routes
app.get("/api/notes", function (req, res) {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    const json = JSON.parse(data);
    console.log("data", json);
    res.json(json);
  });
});

// add new note
app.post("/api/notes", function (req, res) {
  console.log(req.body);
  const newNote = req.body;
  // const parsedNote = JSON.stringify(newNote)
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    const parsedArray = JSON.parse(data);
    console.log(parsedArray);
    parsedArray.push(newNote);
    console.log("PUSHED");
    idArray = parsedArray.map((note, index) => {
      note.id = index;
    });
    const stringArray = JSON.stringify(parsedArray);

    fs.writeFile("./db/db.json", stringArray, "utf-8", err => {
      if (err) throw err;
      console.log("writing");
    });
    res.json(parsedArray);
  });
});

// DELETE NOTE
app.delete("/api/notes/:id", function (req, res) {
  // get id from note in db
  // if id matches delte
  const idToDelete = parseInt(req.params.id);
  let dbJSON = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  console.log(dbJSON);
  console.log(idToDelete);
  const filteredArray = dbJSON.filter(note => note.id !== idToDelete);

  //console.log("query id", query.id);

  console.log("REMOVED QUERIES", filteredArray);
  const stringedDB = JSON.stringify(filteredArray);
  fs.writeFile("./db/db.json", stringedDB, "utf8", (err, data) => {
    if (err) throw err;
    console.log("success");
  });
  res.json(filteredArray);
});

app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {});
});
// Basic route that sends the user first to the AJAX Page
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});