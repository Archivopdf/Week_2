const { Contacts } = require("./Contacts");
const { Person } = require("./Person");


let contactos = new Contacts();

contactos.setContact("Juama", 45, 155, 50);

let a = []
a.push(new Person("Pedro", 33, 180, 90));
a.push(new Person("Pepito", 22, 179, 56))
contactos.setContacts(a)


contactos.printPersons();
