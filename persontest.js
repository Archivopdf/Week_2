// Reto 6
const { Person } = require("./Person");

let persona = new Person(175, 85);

console.log(persona);
console.log(persona.calcIMC());
persona.printAll();
persona.hobbies = ["nadar", "correr", "dibujar"]
persona.printHobbies();