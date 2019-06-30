var express = require('express');
var path = require('path');
var htmlroutes = require('./app/routing/htmlRoutes.js');
var apiroutes = require('./app/routing/apiRoutes.js');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up path for static files like css & images
app.use('/static', express.static('./app/public'));

// import routes
app.use(htmlroutes);
app.use(apiroutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });