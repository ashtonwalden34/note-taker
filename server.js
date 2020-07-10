// variables that requires express
var express = require("express");
// variables to hold route files
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

// variable to hold express
var app = express();
// looks for open port or uses 8000 as default
var PORT = process.env.PORT || 8000;

app.disable('etag');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//app.use(express.static("public"));

//app.use("/api", apiRoutes);
//app.use(htmlRoutes);
require('./routes/htmlRoutes')(app)
require('./routes/apiRoutes')(app)

// Starts the server
// ---------------------------------------------------------
app.listen(PORT, function() {
    console.log("listening on port" + PORT)
});
