const util = require('util');
const fs = require('fs');

// uuid to generate unique id's
const uuid = require('uuid');

const readFileAsync = util.promisify(fs.readFile);

const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }
    write(notes) {

        return writeFileAsync('db/db.json', JSON.stringify(notes))
    }

    retrieveNotes(){
        return this.read().then((notes) => {
            let parNote; 
            // checks if note is an array or it can be changed into one, if not send new array
        try {
            parNote = [].concat(JSON.parse(notes));
        } catch (err){
            parNote = [];
        }
        return parNote;
        });
    }
    addNote(notes) {
        const { title, text } = notes;
        if(!title || !text) {
            throw new Error("Note 'title' and 'text' cannot empty");
        }
        // add a id to notes using uuid
        const newNote = {title, text, id:uuid()};
        // get all the notes
        // add new notes
        // write update notes
        return this.retrieveNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);

    }
    removeNote(deleteNote) {
        this.read().then((notes) => {
            let parNote; 
            // checks if note is an array or it can be changed into one, if not send new array
    
            parNote = [].concat(JSON.parse(notes));
            console.log(parNote);
            console.log(deleteNote);
        });
    }
};

module.exports = new Store();
