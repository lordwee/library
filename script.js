const myLibrary = [];
const body = document.querySelector("body")
const addBook = document.querySelector("button");

function Book(title, author, pages) { 
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.id = crypto.randomUUID();
  this.read = false;
}
Book.prototype.toggleRead = function() {
  if(this.read === false) {
   this.read = true; 
  } else {
    this.read = false;
  }
}

function addBookToLibrary(title, author, pages) { 
    	myLibrary.push(new Book(title, author, pages))
}

function putBookOnShelf() {
	const bookContainer = document.querySelector(".bookshelf");	
  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.firstChild)
  }
  myLibrary.forEach((item) => {
    const book = document.createElement("div");
    book.setAttribute("class", "book");
    book.setAttribute("data-id", item.id)
    const titleOfBook = document.createElement("div") 
    titleOfBook.textContent = `Title: ${item.title}`;
    const authorOfBook = document.createElement("div") 
    authorOfBook.textContent = `Author: ${item.author}`;
    const pagesOfBook = document.createElement("div") 
    pagesOfBook.textContent = `Pages: ${item.pages}`; 
    const deleteBook = document.createElement("button")
    deleteBook.setAttribute("class", "delete");
    deleteBook.textContent = "Delete Book";
    const readStatus = document.createElement("button");
    if (item.read === true) {
        readStatus.textContent = "Read"
        readStatus.style.backgroundColor = "green"
      } else {
        readStatus.textContent = "Not read";
        readStatus.style.backgroundColor = "red";
      }

    book.appendChild(titleOfBook);
    book.appendChild(authorOfBook);
    book.appendChild(pagesOfBook);
    book.appendChild(deleteBook);
    book.appendChild(readStatus);
    bookContainer.appendChild(book);

  deleteBook.addEventListener("click", function() {
    const bookToRemove = myLibrary.findIndex(item => book.getAttribute("data-id") === item.id) 
    myLibrary.splice(bookToRemove, 1);
    book.remove();
    });
  readStatus.addEventListener("click", function() {
    if (item.read === false) {
        item.toggleRead(); 
        readStatus.textContent = "Read"
        readStatus.style.backgroundColor = "green"
      } else {
        item.toggleRead(); 
        readStatus.textContent = "Not read";
        readStatus.style.backgroundColor = "red";
      }
    });
    
  });
}


addBook.addEventListener('click', function () { 
  addBook.disabled = true;
	const addBookContainer = document.createElement("div");
		addBookContainer.setAttribute("class", "addBookContainer");
		body.appendChild(addBookContainer)

	const form = document.createElement("form");
		form.setAttribute("class", "add-book");
		form.setAttribute("id", "add-book");
		addBookContainer.appendChild(form); 

  const bookTitleLabel = document.createElement("label")
		bookTitleLabel.textContent = "Book Title: ";
		bookTitleLabel.setAttribute("for", "bookTitle");

	const bookTitle = document.createElement("input");
		bookTitle.setAttribute("type", "text");
		bookTitle.setAttribute("id", "bookTitle");
		bookTitle.setAttribute("name", "bookTitle");
    bookTitle.required = true;

	const bookAuthorLabel = document.createElement("label");
		bookAuthorLabel.textContent = "Author: ";
		bookAuthorLabel.setAttribute("for", "bookAuthor");

	const bookAuthor = document.createElement("input");
		bookAuthor.setAttribute("type", "text");
		bookAuthor.setAttribute("id", "bookAuthor");
		bookAuthor.setAttribute("name", "bookAuthor");
    bookAuthor.required = true;

	const bookPagesLabel = document.createElement("label")
		bookPagesLabel.textContent = "Pages: ";
		bookPagesLabel.setAttribute("for", "bookPages");

	const bookPages = document.createElement("input");
		bookPages.setAttribute("type", "number");
		bookPages.setAttribute("id", "bookPages");
		bookPages.setAttribute("name", "bookPages");
    bookPages.required = true;
		
	const submit = document.createElement("button");
		submit.textContent = "Add Book";
		submit.setAttribute("type", "submit")
		submit.setAttribute("id", "submit")
	const cancel = document.createElement("button");
    cancel.textContent = "Cancel";
    

	form.appendChild(bookTitleLabel);
	form.appendChild(bookTitle);
	form.appendChild(bookAuthorLabel);
	form.appendChild(bookAuthor);
	form.appendChild(bookPagesLabel);
	form.appendChild(bookPages);
	form.appendChild(submit);
	form.appendChild(cancel);
  cancel.addEventListener("click", function(e) {
    e.preventDefault();
    addBook.disabled = false;
    addBookContainer.remove();
  })
	submit.addEventListener("click", function(event) {
		event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    } else {
		addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value);
    putBookOnShelf();
		addBookContainer.remove();
    addBook.disabled = false;
    } 
	});
});
