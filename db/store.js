const util = require('util');
const fs = require('fs');

// uuid to generate unique id's
const uuidv1 = require('uuidv1');

const readFileAsync = util.promisify('fs.readFile');

const writeFileAsync = util.promisify('fs.writeFile');

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
};
