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

    // empty variables use to push data to each time a friend is found with a closer match score
    var totalDiff = 0;

    var bestMatch = {
      name: "",
      photo: "",
      friendDiff: 1000
    };

    for (i = 0; i < friends.length; i++) {
        
      //loop through both friends array & each friend's scores array
      for (var j = 0; j < friends[i].scores[j]; j++) {
        totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]) );

        if (totalDiff <= bestMatch.friendDiff) {

          //update best match with current index
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDiff = totalDiff;

        };
      };
    };
    console.log("Best match: " + bestMatch.name);

  // push new user data to friends array
  friends.push(newFriend);
  res.json(bestMatch);
  // module.exports = {bestMatch};
});