const fs = require("fs");
const path = require("path");
const randomID = require('uuid')

function saveNote (body, notesArray) {
    const note = body;
    note.id = randomID.v1()
    notesArray.push(note);
    fs.writeFile(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray),
        function (err) {
            if (err) throw err;
        }
    );
    return note;
};

function generateID () {
    return randomID.v1()
}


module.exports = {saveNote, generateID}