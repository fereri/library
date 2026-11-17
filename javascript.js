const myLibrary = ["car", "chef", "ride", "along"];
const body = document.querySelector(".body");

function Book(id) {
    this.id = id;
}

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

function displayBook(array) {
    for(const book in array) {
        // code
        let card = document.createElement("div");
        card.classList.add("card");
        card.textContent = book;
        body.appendChild(card);
    }
}

displayBook(myLibrary);