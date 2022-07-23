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
        console.log(JSON.stringify(this.books));

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
        for (let i = 0; i <= this.books.length; i++)
            console.log("Book" + [i] + ":" +
                "Title - " + this.books[i].title +
                "Number of pages - " + this.books[i].nPages +
                "IBN - " + this.books[i].isbn +
                "Author - " + this.books.author +
                "Editorial - " + this.books[i].editorial
            );

    }
    public getNumberOfBooks(): number {
        return this.books.length;

    }
    public findByAuthor(author: string): Book[] {
        for (let i = 0; i <= this.books.length; i++)
            if (author == this.books[i].author)
                console.log(this.books[i]);
    }
}