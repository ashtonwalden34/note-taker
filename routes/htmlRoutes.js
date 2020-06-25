var path = require("path");

mocdule.exports = function(app) {
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
};