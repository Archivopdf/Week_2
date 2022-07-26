import { Book } from "./Book";
import { Library } from "./Library";

let biblioteca = new Library();

biblioteca.setBook(new Book("El imperio Final", 672, "9780765311788", "Brandon Sanderson", "Tor Books"));
biblioteca.getBooks();

biblioteca.setAddress("Calle del Anade");
console.log(biblioteca.getAddress());

biblioteca.setManager("Juan Rodriguez");
console.log(biblioteca.getManager());

biblioteca.toString()

console.log(biblioteca.getNumberOfBooks());

biblioteca.findByAuthor("Brandon Sanderson");