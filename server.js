// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;
// =============================================================
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// =============================================================

app.get("/", function(req, res) {
  // res.sendFile(path.join(__dirname, "home.html"));
  res.sendFile('home.html', { root: path.join(__dirname, './app/public')});
  // res.send();
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
