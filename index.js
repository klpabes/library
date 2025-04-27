"use strict";

const library = (function () {
  const myLibrary = [];

  const contentSelector = document.querySelector(".content");
  const addNewBookBtn = document.querySelector("#newbook");

  const dialog = document.querySelector("#favDialog");
  const dialogForm = document.querySelector(".bookForm");

  const inputTitle = document.querySelector("#title");
  const inputAuthor = document.querySelector("#author");
  const inputPages = document.querySelector("#pages");
  const inputDesc = document.querySelector("#desc");
  const inputRead = document.querySelector("#read");

  const closeBtn = document.querySelector("#closeBtn");
  const confirmBtn = document.querySelector("#confirmBtn");

  class Book {
    constructor(title, author, pages, desc, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.desc = desc;
      this.read = read;
      this.id = crypto.randomUUID();
    }

    changeRead = function () {
      this.read = !this.read;
    };
  }

  function addBookToLibrary(title, author, pages, desc, read) {
    const book = new Book(title, author, pages, desc, read);

    myLibrary.push(book);
  }

  function displayBook() {
    contentSelector.innerHTML = "";
    myLibrary.forEach(function (book, index, arr) {
      contentSelector.insertAdjacentHTML(
        "beforeend",
        ` <article data-index=${index}>
              <h3 id="title">Title: ${book.title}</h3>
              <h3 id="author">Author: ${book.author}</h4>
              <h3 id="pages">Pages: ${book.pages}</h3>
              <h3>Description</h3>
              <p>${book.desc}</p>
              <div>
                <button onclick="library.readBook(${index})" class="btn-read ${
          book.read ? "read" : ""
        }">Read</button>
                <button onclick="library.removeBook(${index})" class="btn-remove">Remove</button>     
              </div>
          </article>
        `
      );
    });
  }

  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    dialog.close();
  });

  confirmBtn.addEventListener("click", function (e) {
    e.preventDefault();

    addBookToLibrary(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      inputDesc.value,
      inputRead.checked
    );

    dialogForm.reset();
    dialog.close();
    displayBook();
  });

  addNewBookBtn.addEventListener("click", function (e) {
    dialog.showModal();
  });

  function removeBook(book) {
    myLibrary.splice(book, 1);
    displayBook();
  }

  function readBook(book) {
    myLibrary[book].changeRead();
    displayBook();
  }

  return { removeBook, readBook };
})();
