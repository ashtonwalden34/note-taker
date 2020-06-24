var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;
console.log("app listening on port" + PORT)


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var notes = [];

// Routes
// ---------------------------------------------------------
// route to html page displaying notes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

// route to html page to add note
app.get("/add-note", function(req, res) {
    res.sendFile(path.join(__dirname, "add-note.html"));
});

// displays all notes
app.get("/api/notes", function(req, res) {
    return res.json(notes);
});

// Displays a single note
app.get("/api/notes/:note", function(req, res) {
    var chosen = req.params.note;

    console.log(chosen);

    for (var i =0; i < notes.length; i++) {
        if (chosen === notes[i].routeName) {
            return res.json(characters[i]);
        }
    }
    return res.json(false);
});

// creat new notes as JSON input
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    // removes spaces from note title
    newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

    console.log(newNote);

    notes.push(newNote);

    res.json(newNote);
});




// Starts the server
// ---------------------------------------------------------
app.listen(PORT, function() {
    console.log("listening on port" + PORT)
});