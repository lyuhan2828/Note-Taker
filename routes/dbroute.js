const router = require('express').Router();
const store = require('../db/store');

// get route to respond with all the notes from database "/api/notes"
router.get('/notes', (req, res) => {
store
.retrieveNotes()
.then((notes) => {
    return res.json(notes);
})
router.post('/notes', (req, res) => {
    store
    .addNote(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
})
router.delete('/notes/:id', (req,res) => {
    store
    .removeNote(req.params.id)
    .then(() => res.status(500).json(err));
})
});

module.exports = router;