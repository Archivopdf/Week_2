"use strict";
exports.__esModule = true;
exports.contacts = void 0;
var contacts = /** @class */ (function () {
    function contacts() {
        this.people = [];
    }
    contacts.prototype.setContact = function (person) {
        this.people.push(person);
    };
    contacts.prototype.setContacts = function (person) {
        for (var i = 0; i < person.length; i++) {
            this.people.push(person[i]);
        }
    };
    contacts.prototype.printCalendar = function () {
        console.log(JSON.stringify(this.people));
    };
    return contacts;
}());
exports.contacts = contacts;
