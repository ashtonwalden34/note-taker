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