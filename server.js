// variables that requires express
var express = require("express");
// variables to hold route files
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

// variable to hold express
var app = express();
// looks for open port or uses 8080 as default
var PORT = process.env.PORT || 8080;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Starts the server
// ---------------------------------------------------------
app.listen(PORT, function() {
    console.log("listening on port" + PORT)
});
