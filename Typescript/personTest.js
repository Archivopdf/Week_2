"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var person1 = new Person_1.Person("Juan", 31, "Calle del Anade");
console.log(person1);
person1.printName();
console.log(person1.yearOfBirth(2022));
console.log(person1.getAddress());
