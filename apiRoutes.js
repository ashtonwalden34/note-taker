// requires express, fs, & path
const express = require("express");
const fs = require("fs");
const path = require("path");

// requires router from express
const router = express.Router();

// get request for all notes
router.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db.json"));
});

// post request to add note to db.json
router.post("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, '/db.json'), 'utf8', (err, data) => {
        // if there is an error it will display it
        if (err) throw err;
        // variable to store parsed data (notes)
        const notes = JSON.parse(data);
        // pushes notes to the request body as JSON data
        notes.push(req.body);
        // adds an Id to each note by taking it's index in the array and adding 1
        notes.forEach((item, index) => {
            item.id = index + 1;
        });
        // stringifies the JSON data (note) and writes it into the db file (where the notes are stored)
        fs.writeFile(path.join(__dirname, '/db.json'), JSON.stringify(notes), (err) => {
            // if the app encounters an error it will display it
            if (err) throw err;
        });
    });
    // sends succesful status if no errors are reached
    res.sendStatus(200);
});

// function to delete note using the id
router.delete('/api/notes/:id', (req, res) => {
    // reads through db.json file
    fs.readFile(path.join(__dirname, '/db.json'), 'utf8', (err, data) => {
        // if there is an error the app will display it
        if (err) throw err;
        // variable to hold the id from the request
        const id = req.params.id;
        // variable to hold the parsed data (notes)
        const notes = JSON.parse(data);
        // variable to hold array of notes after they have been filtered and function to search through notes array
        let filteredNotes = notes.filter((obj) => {
            // bang operator to return the IDs that don't match
            return obj.id != id;
        });

        // writes the new array of filtered notes to the db.json file
        fs.writeFile(path.join(__dirname, '/db.json'), JSON.stringify(filteredNotes), (err) => {
            // if the app encounters an error it will display it
            if (err) throw err;
        });
    });
    // sends succesful status if everything works
    res.sendStatus(200);
});

// exports router
module.exports = router;