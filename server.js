// creates variable to require and store express
var express = require("express");
var app = express();

// Looks for an open port or defaults to 8000
var PORT = process.env.PORT || 8000;

// Sets express up to parse
app.use(express.urlencoded({ extended: true }));
// express recognizes objects as JSON
app.use(express.json());

// serves up static pages to keep the displays the same
app.use(express.static('public'));

// Links to apiRoutes
app.use(require("./apiRoutes"));
// Links to htmlRoutes
app.use(require("./htmlRoutes"));

// Starts the server
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});