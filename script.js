const myLibrary = [];

function Book(title, author, pages) { 
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) { 
    return myLibrary.push(new Book(title, author, pages))
}
addBookToLibrary("Harry Potter", "J.K. Rowling", 355);
console.log(myLibrary);
const body = document.querySelector("body")
const addBook = document.querySelector("button");
 
addBook.addEventListener('click', function () {
    let form = document.createElement("form");
    form.setAttribute("id", "add-book");
    body.appendChild(form); 

    const bookTitleLabel = document.createElement("label")
    bookTitleLabel.textContent = "Book Title: ";
    bookTitleLabel.setAttribute("for", "bookTitle");
    bookTitleLabel.setAttribute("id", "newBook");

    const bookTitle = document.createElement("input");
    bookTitle.setAttribute("type", "text");
    bookTitle.setAttribute("id", "bookTitle");
    bookTitle.setAttribute("name", "booktitle");

    form.appendChild(bookTitleLabel);
    form.appendChild(bookTitle);
}
