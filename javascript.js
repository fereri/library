const myLibrary = [];

//DOM variables
const body = document.querySelector(".body");

const form = document.getElementById('user-form');

let userData;

form.addEventListener('submit', function (event) {
  // 1. Prevent the page from refreshing
  event.preventDefault();

  // 2. Capture all form fields using FormData
  const formData = new FormData(event.target);

  // 3. Convert to a standard JavaScript object
  // const data = Object.fromEntries(formData.entries());
  userData = Object.fromEntries(formData.entries());

  addBookToLibrary(userData);
  // console.log(data); // Output: { username: "alex", email: "alex@example.com" }
});

function Book(id, author, title, pages, read) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.read = function() {
    this.read = !this.read;
    console.log(this.read);
}

function addBookToLibrary(data) {
    let book = new Book(data["id"], data["author"], data["title"], data["num-pages"], data["read"]);
    myLibrary.push(book);
    displayBooks(myLibrary);
}

function displayBooks(library) {
    console.log(library);
    body.replaceChildren();
    for (let book in library) {
        console.log(myLibrary[book]);
        let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", crypto.randomUUID());

        let author = document.createElement("div");
        author.textContent = library[book]["author"];
        
        let title = document.createElement("div");
        title.textContent = library[book]["title"];
        
        let pages = document.createElement("div");
        pages.textContent = library[book]["pages"];

        let read = document.createElement("div");
        read.textContent = library[book]["read"];

        let button = document.createElement("button");
        button.textContent = "delete";
        button.addEventListener("click", function () {
            button.closest(".card").remove();
        });

        let readButton = document.createElement("button");
        readButton.textContent = "read";
        readButton.addEventListener("click", () => {
            read.textContent = "read";
        });


        card.appendChild(author);
        card.appendChild(title);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(button);
        card.appendChild(readButton);
        body.appendChild(card);
    }
}