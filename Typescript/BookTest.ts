import { Book } from "./Book";

let libro = new Book("El imperio Final", 672, "9780765311788", "Brandon Sanderson", "Tor Books");

console.log(libro.getAuthor());
// libro.setAuthor("Cervantes");
console.log(libro.getEditorial());
console.log(libro.getTisbn());
console.log(libro.getTitle());
console.log(libro.getnPages());
libro.toString()


