$("#add-note-btn").on("click", function(event) {
    event.preventDefault();
    var newNote = {
        title: $("#title").val().trim(),
        noteBody: $("#noteBody").val().trim()
    }

    $.post("/api/notes", newNote)
        .then(function(data) {
            console.log("add-note.html", data);
            alert("adding note " + newNote.title);
        });
});

$("#note-search-btn").on("click", function(event) {
    var noteSearch = $("#noteSearch").val().trim();
    noteSearch = noteSearch.replace(/\s+/g, "").toLowerCase();

    $.get("/api/notes/" + noteSearch, function(data) {
        console.log(data);

        if (data) {
            $("#titleDisplay").text(data.title);
            $("#noteBodyDisplay").text(data.noteBody);
        } else {
            $("#titleDisplay").text("No note matching ("  + noteSearch + ") could be found.")
        }
    });
});