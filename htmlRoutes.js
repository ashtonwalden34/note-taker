// requires express and path
const express = require("express");
const path = require("path");
// requires router from express
const router = express.Router();


// router uses get request to display notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// 

// exports router
module.exports = router;