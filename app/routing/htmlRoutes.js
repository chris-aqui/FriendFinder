const path = require("path");


module.exports = function (app) {
// remember routs order matters!!!

  app.get("/survey", function(req, res) {
    // console.log('going to survey page');
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.get('*.css', )

  app.get("/", function(req, res) {
    // console.log('going to home page');
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  // putting assets



  // if not on a defined url then bring to home page
  // If no matching route is found default to home
}