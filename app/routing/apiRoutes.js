var express = require('express');
var app = module.exports = express();
var friends = require("./../data/friends.js");


// Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

app.post("/api/friends", function(req, res){
    var newFriend = req.body;
    var userScores = newFriend.scores;
    console.log("User scores: " + userScores);

    var bestMatch = {
      name: "",
      photo: "",
      friendDiff: 1000
    };

    friends.forEach(function(currentValue) {
      // currentValue is current index of friends array
      console.log(currentValue);
      var scoresDiffArr = [];

      for (var i = 0; i < currentValue.scores.length; i++) {

        // empty variables use to push data to each time a friend is found with a closer match score
        var totalDiff = 0;
        eachDiff = 0;

        console.log("diff of " + currentValue.name + ": " + Math.abs(parseInt(userScores[i]) - parseInt(currentValue.scores[i]) ));
        eachDiff = Math.abs(parseInt(userScores[i]) - parseInt(currentValue.scores[i]) );
        scoresDiffArr.push(eachDiff);
        console.log(scoresDiffArr);
        console.log(" total difference: " + scoresDiffArr.reduce((a, b) => a + b, 0));

        totalDiff = scoresDiffArr.reduce((a, b) => a + b, 0);
        console.log("Total diff of " + currentValue.name + ": " + totalDiff);

        if (totalDiff <= bestMatch.friendDiff) {
          //update best match with currentValue
          bestMatch.name = currentValue.name;
          bestMatch.photo = currentValue.photo;
          bestMatch.friendDiff = totalDiff;
        };
      };
    });

    console.log("Best match: " + bestMatch.name);

  // push new user data to friends array
  friends.push(newFriend);
  res.json(bestMatch);
});