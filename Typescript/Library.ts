import { Book } from "./Book";

export class Library {

    private books: Book[];
    private address: string;
    private manager: string;

    constructor() {
        this.books = [];
    }
    public setBook(book: Book): void {

        this.books.push(book);
    }
    public getBooks(): void {
        for (let i = 0; i < this.books.length; i++) {
            console.log(this.books[i]);

        }
        // console.log(JSON.stringify(this.books));

    }
    public setAddress(address: string): void {
        this.address = address;
    }
    public getAddress(): string {
        return this.address;
    }
    public setManager(manager: string): void {
        this.manager = manager;
    }
    public getManager(): string {
        return this.manager;
    }

    public toString(): void {
        for (let i = 0; i < this.books.length; i++) {

            this.books[i]
            console.log("Book" + i + ":" +
                "Title - " + this.books[i].getTitle() +
                "Number of pages - " + this.books[i].getnPages() +
                "ISBN - " + this.books[i].getTisbn() +
                "Author - " + this.books[i].getAuthor() +
                "Editorial - " + this.books[i].getEditorial()
            );
        }
    }

    public getNumberOfBooks(): number {
        return this.books.length;

    }

    public findByAuthor(author: string): Book[] {
        let biblioteca = new Array()
        for (let i = 0; i <= this.books.length; i++)
            if (author == this.books[i].getAuthor())
                biblioteca.push(this.books[i])

        return biblioteca
    }
}