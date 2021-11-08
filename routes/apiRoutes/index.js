const router = require('express').Router();
const notes = require ('../../db/db');
const { saveNote } = require('../../lib/notes')
const { deleteNote } = require('../../lib/notes')

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    const note = saveNote(req.body, notes)
    res.json(note);
});

router.delete("/notes/:id", function (req, res) {
    const id = req.params.id;
    const newNotes = deleteNote(notes,id);
    res.json(newNotes)
})

module.exports = router;