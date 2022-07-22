const { Person } = require("./Person");

class Contacts {

    constructor() {

        this.contactos = [];
    }
    setContact() {

        this.contactos.push(Person);
    }
    setContacts() {
        for (let i = 0; i < this.contactos.length; i++) {
            this.contactos.push(Person[i]);
        }

    }
    printPersons() {
        console.log(JSON.stringify(this.people));
    }

}



module.exports = { Contacts } 