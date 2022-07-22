import { Person } from "./Person"

let person1 = new Person("Juan", 31, "Calle del Anade")

console.log(person1);

person1.printName();

console.log(person1.yearOfBirth(2022));

console.log(person1.getAddress());
