// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;
// =============================================================
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// =============================================================

// this parse various different custom JSON types as JSN
app.use(bodyParser.json({type:'application/**+json'}));

// parse some custom thing into a buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));

// parse an HTML body into the string
app.use(bodyParser.text({type: 'text/html'}));

// require this file and pass in app
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
