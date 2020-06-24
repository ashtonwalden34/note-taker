var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/apiRoutes")(app);

// Starts the server
// ---------------------------------------------------------
app.listen(PORT, function() {
    console.log("listening on port" + PORT)
});