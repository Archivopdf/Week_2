import { contacts } from "./contacts";
import { Person } from "./Person";

let agenda = new contacts()

agenda.setContact(new Person("Juan", 33, "Calle del Anade"));
let a: Person[] = [];
a.push(new Person("Juah", 43, "Calle del Anade"));
a.push(new Person("Pepe", 23, "Calle del Anade"));
agenda.setContacts(a);
agenda.printCalendar();