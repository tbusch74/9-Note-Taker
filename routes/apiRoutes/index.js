const router = require('express').Router();
const notes = require ('../../db/db');
const { saveNote } = require('../../lib/notes')

router.get("/notes", (req, res) => {
    res.json(notes);
})

router.post("/notes", (req, res) => {
    const note = saveNote(req.body, notes)
    res.json(note);
})

module.exports = router;