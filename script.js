const myLibrary = [];
const body = document.querySelector("body")
const addBook = document.querySelector("button");

function Book(title, author, pages) { 
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) { 
    	myLibrary.push(new Book(title, author, pages))
}
         
function putBookOnShelf() {
	const bookContainer = document.querySelector(".bookshelf");	
	const book = document.createElement("div");
	book.setAttribute("class", "book");
	bookContainer.appendChild(book);
}


addBook.addEventListener('click', function () { 
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

	const bookAuthorLabel = document.createElement("label");
		bookAuthorLabel.textContent = "Author: ";
		bookAuthorLabel.setAttribute("for", "bookAuthor");

	const bookAuthor = document.createElement("input");
		bookAuthor.setAttribute("type", "text");
		bookAuthor.setAttribute("id", "bookAuthor");
		bookAuthor.setAttribute("name", "bookAuthor");

	const bookPagesLabel = document.createElement("label")
		bookPagesLabel.textContent = "Pages: ";
		bookPagesLabel.setAttribute("for", "bookPages");

	const bookPages = document.createElement("input");
		bookPages.setAttribute("type", "number");
		bookPages.setAttribute("id", "bookPages");
		bookPages.setAttribute("name", "bookPages");
		
	const submit = document.createElement("button");
		submit.textContent = "Add Book";
		submit.setAttribute("type", "submit")
		submit.setAttribute("id", "submit")
	
	form.appendChild(bookTitleLabel);
	form.appendChild(bookTitle);
	form.appendChild(bookAuthorLabel);
	form.appendChild(bookAuthor);
	form.appendChild(bookPagesLabel);
	form.appendChild(bookPages);
	form.appendChild(submit);

	submit.addEventListener("click", function(event) {
		event.preventDefault();
		addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value);
		putBookOnShelf();
		addBookContainer.remove();
	});
});
