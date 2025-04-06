"use strict";
const myLibrary = [];

const contentSelector = document.querySelector(".content");

function Book(title, author, pages, desc) {
  // the constructor...
  this.title = title;
  this.author = this.author;
  this.pages = this.pages;
  this.desc = desc ? desc : "No description";
  this.id = crypto.randomUUID();
}

function addBookToLibrary(name) {
  // take params, create a book then store it in the array

  const book = new Book(name);
  myLibrary.push(book);
}

function displayBook() {
  for (const book of myLibrary) {
    contentSelector.insertAdjacentHTML(
      "beforeend",
      `<article>${book.name}</article>`
    );
  }
}
