const body = document.querySelector(".body");
const form = document.getElementById("user-form");

myLibrary = [];

function Book(author, title, pages, read) {
    this.id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.read = function() {
    this.read = !this.read;
}

function addBookToLibrary(author, title, pages, read) {
    let book = new Book(author, title, pages, read);

    myLibrary.push(book);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(form);

    addBookToLibrary(formData.get("author"), formData.get("title"), formData.get("pages"), formData.get("read"));

    displayBooks();
})

function deleteBook(id) {
    myLibrary = myLibrary.filter(book => book.id !== id);
    displayBooks();
}

function displayBooks() {

    body.replaceChildren();

    myLibrary.forEach((book) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", book.id);

        let author = document.createElement("div");
        author.textContent = book.author;
        author.classList.add("author");

        let title = document.createElement("div");
        title.textContent = book.title;

        let pages = document.createElement("div");
        pages. textContent = book.pages;

        let read = document.createElement("div");
        read.textContent = book.read;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        deleteButton.addEventListener("click", () => {
            deleteBook(book.id);
        })

        let readButton = document.createElement("button");
        readButton.textContent = "read";
        readButton.addEventListener("click", () => {
            book.read = "yes";
            displayBooks();
        })


        card.appendChild(author);
        card.appendChild(title);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(deleteButton);
        card.appendChild(readButton);
        body.appendChild(card);
    })
}