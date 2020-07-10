// requires notes array from noteData.js
var noteData = require("../data/noteData")


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
    });

     // create new notes as JSON input
     app.post("/add-note", function(req, res) {
        var newNote =  {};

        console.log('this is new notes', newNote)
        // removes spaces from note title
        newNote.title = req.body.title.replace(/\s+/g, "").toLowerCase();
        newNote.note = req.body.body

        // console.log(newNote);

        noteData.push(newNote);

        res.json(noteData);
    });

    // Displays one note at a time
    app.get("/api/notes/:note", function(req, res) {
        var chosen = req.params.note;

        console.log(chosen);
  

        for (var i =0; i < noteData.length; i++) {
            if (chosen === noteData[i].title) {
                res.json(noteData[i]);
            }
        }
        return res.json(false);
    });
};
