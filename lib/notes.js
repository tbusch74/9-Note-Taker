const { NONAME } = require("dns");
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

function deleteNote (notesArray,id) {
    let index = notesArray.findIndex(element => element.id === id);
    if (index != -1) {notesArray.splice(index,1);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray)
        )
    }
}

module.exports = {saveNote, deleteNote}