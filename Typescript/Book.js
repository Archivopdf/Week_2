"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (titulo) {
        this.title = titulo;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.setnPages = function (nPaginas) {
        this.nPages = nPaginas;
    };
    Book.prototype.getTisbn = function () {
        return this.isbn;
    };
    Book.prototype.setTisbn = function (neil) {
        this.isbn = neil;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (autor) {
        this.author = autor;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.toString = function () {
        console.log("Title -" + this.title +
            " Number of Pages -" + this.nPages +
            " ISBN -" + this.isbn +
            " Author -" + this.author +
            " Editorial -" + this.editorial);
    };
    return Book;
}());
exports.Book = Book;
