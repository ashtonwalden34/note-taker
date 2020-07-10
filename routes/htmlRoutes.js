var path = require("path");
var noteData = require("../data/noteData")

module.exports = function(app) {
    // route to html page displaying notes
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
        console.log(__dirname);
    });

    // route to html page to add note
    app.get("/add-note", function(req, res) {
        console.log(' u hit the add node route!!!')
        res.sendFile(path.join(__dirname, "../public/add-note.html"));
    });

    // displays all notes
    app.get("/view-notes", function(req, res) {
         res.json(noteData);
    });
};
