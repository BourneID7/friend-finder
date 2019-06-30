var express = require('express');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = module.exports = express();

// Basic route that sends the user first to the home Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./../public/home.html"));
});

// Route that sends the user first to the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./../public/survey.html"));
});

