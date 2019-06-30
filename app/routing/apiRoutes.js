var express = require('express');
var app = module.exports = express();
var friends = require("./../data/friends.js")


// Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

app.post("/api/friends", function(req, res){
    var newFriend = req.body;
    friends.push(newFriend);

})