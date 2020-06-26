var path = require("path");

module.exports = function(app) {
    // route to html page displaying notes
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
        console.log(__dirname);
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
