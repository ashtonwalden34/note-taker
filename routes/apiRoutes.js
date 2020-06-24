// requires notes array from noteData.js
var noteData = require("../data/noteData")


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
    });

     // create new notes as JSON input
     app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        // removes spaces from note title
        newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

        console.log(newNote);

        notes.push(newNote);

        res.json(newNote);
    });


    /*
    // Displays a single note
    app.get("/api/notes/:note", function(req, res) {
        var chosen = req.params.note;

        console.log(chosen);

        for (var i =0; i < notes.length; i++) {
            if (chosen === notes[i].routeName) {
                return res.json(notes[i]);
            }
        }
        return res.json(false);
    });
    */
};
