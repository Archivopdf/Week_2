const { Person } = require("./Person");

class Contacts {
    constructor()
    contacs = [Person, Person, Person, Person];

    printPersons() {
        for (let i = 0; i < contacs; i++) {

            console.log(contacs[i])

        }

    }
}

module.exports = { Contacts }