'use strict';
class Book {
  constructor(title = 'Unknown', author = 'Unknown', pages = 0, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook() {
    for (const book of library.books) {
      this.books.push(book);
    }
  }

  editBook() {}

  removeBook() {}

  setRead() {}
}

const library = new Library();
