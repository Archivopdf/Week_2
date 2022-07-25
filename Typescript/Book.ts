export class Book {

    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string) {

        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    public getTitle(): string {
        return this.title
    }
    public setTitle(titulo: string): void {
        this.title = titulo
    }
    public getnPages(): number {
        return this.nPages
    }
    public setnPages(nPaginas: number): void {
        this.nPages = nPaginas
    }
    public getTisbn(): string {
        return this.isbn
    }
    public setTisbn(neil: string): void {
        this.isbn = neil
    }
    public getAuthor(): string {
        return this.author
    }
    public setAuthor(autor: string): void {
        this.author = autor
    }
    public getEditorial(): string {
        return this.editorial
    }
    public setEditorial(editorial: string): void {
        this.editorial = editorial
    }
    public toString(): void {
        console.log(
            "Title -" + this.title +
            " Number of Pages -" + this.nPages +
            " ISBN -" + this.isbn +
            " Author -" + this.author +
            " Editorial -" + this.editorial
        );

    }
}