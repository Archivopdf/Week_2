import { Person } from "./Person"

export class contacts {

    public people: Person[];

    constructor() {

        this.people = [];

    }

    public setContact(person: Person): void {

        this.people.push(person);
    }

    public setContacts(person: Person[]): void {
        for (let i = 0; i < person.length; i++) {
            this.people.push(person[i]);
        }
    }

    public printCalendar(): void {

        for (let i = 0; i < this.people.length; i++) {
            console.log(this.people[i]);


        }

    }

}

