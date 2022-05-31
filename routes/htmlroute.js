//is going allow path to link to different files
const path = require('path');
const router = require('express').Router();

//get route for notes.html
router.get('/notes', (req, res) => {
    // path.join is adding arguments together
    res.sendFile(path.join(__dirname, '../public/notes.html'))
}
);
// * all other routes for index
router.get('*', (req, res) => {
    // transfers files at given path and sets the response to the appropriate content type
    res.sendFile(path.join(__dirname, '../public/index.html'))
}
);

module.exports = router;