const path = require("path");
let friends = require("../data/friends.js");

module.exports = function (app) {

  // rout to view all friends
  app.get('/api/friends', function (req, res) {
    res.json(friends);
    });
    //

    app.post('/api/friends', function (req, res) {

    // get use entered data
    const bestMatch = {
      name: '',
      photo: '',
      friendDiff: 1000
    };
    console.log('req body is: ', req.body);

    // takes the user entered results from the survey post and parses it
    let userData = req.body;
    let userScores = userData.scores;

    console.log('user scores is ', userScores);

    // calulated diff
    let totalDiff = 0;

    // looop though all the friends in the db
    for (let i = 0; i < friends.length; i++) {
      console.log(`friend at index ${i} is ${friends[i]}`);
      totalDiff = 0;

      // loop over all the scores
      for (var j = 0; j < friends[i].scores[j]; j++) {
        //  find the diff between the score and sum
        totalDiff += math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        // check if sum diff is less than diff of best match
        if (totalDiff <= bestMatch.friendDiff) {
          // reset the best match to be the new friend
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDiff = friends[i].totalDiff
        }
      }
    }
    // save user data to the database after the check
    friends.push(userData);

    // return the JSON with the user best match to be used by the html
    res.json(bestMatch);
  });
}

// #