const router = require('express').Router();
const store = require('../db/store');

// get route to respond with all the notes from database "/api/notes"
router.get('/notes', (req, res) => {
store
.retrieveNotes()


});