// Reto1
class Person {

    constructor(altura, peso) {

        this.name = "Paco";
        this.age = 33;
        this.height = altura;
        this.weight = peso;


    }

    // Reto2

    calcIMC() {

        return this.weight / (this.height) ^ 2;
    }
    printAll() {

        console.log("name - " + this.name + ", age -" + this.age + ", height -" + this.height + ", weight -" + this.weight);

    }

    printHobbies() {

        console.log(this.hobbies);

    }
}

let persona = new Person(179, 89);

persona.printAll();

//Reto3

persona.yearOfBith = 2022 - persona.age;

//Reto5

persona.hobbies = ["nadar", "patinar", "comer", "saltar"];


module.exports = { Person }