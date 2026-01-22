const library = [];
const booksDisplayed = [];

function Book(id, title, author, pages, status){
    if(!new.target){
        throw Error("use new");
    }
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(title, author, pages, status){
    let id =crypto.randomUUID();
    const book = new Book(id,title,author,pages,status);
    library.push(book);
}


addBookToLibrary("hi", "zhiar", 222, "idk");
addBookToLibrary("bye", "zhiar", 222, "idk");
addBookToLibrary("bye", "zhiar", 222, "idk");
addBookToLibrary("bye", "zhiar", 222, "idk");
addBookToLibrary("bye", "zhiar", 222, "idk");
addBookToLibrary("bye", "zhiar", 222, "idk");
addBookToLibrary("bye", "zhiar", 222, "idk");
addBookToLibrary("bye", "zhiar", 222, "idk");

const CONTAINER = document.querySelector(".container");

function displayBooks(){
    for (const book of library){
        if(!booksDisplayed.includes(book)){
            const div = document.createElement("div");
            div.classList.add("card");

            const paraOne = document.createElement("p");
            const upper = document.createTextNode(book.title + " by " + book.author);
            paraOne.appendChild(upper);
            paraOne.classList.add("upper");

            const paraTwo = document.createElement("p");
            const lower = document.createTextNode(book.pages + " pages");
            paraTwo.appendChild(lower);
            paraTwo.classList.add("lower");

            const paraThree = document.createElement("p");
            const lowest = document.createTextNode("Status: " + book.status);
            paraThree.appendChild(lowest);
            paraThree.classList.add("lowest");

            div.append(paraOne,paraTwo,paraThree);
            CONTAINER.appendChild(div);

            booksDisplayed.push(book);
        }
    }
}
displayBooks();

const addButton = document.getElementById("add");
const dialog = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const statusinput = document.querySelector('input[name="status"]:checked');

addButton.addEventListener("click", () =>{
    dialog.showModal();
});

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", submitClick);

function submitClick(event){
    event.preventDefault();

    const titleValue = title.value;
    const authorValue = author.value;
    const pagesValue = pages.value;
    const statusValue = document.querySelector('input[name="status"]:checked').value;

    addBookToLibrary(titleValue, authorValue, pagesValue, statusValue);
    displayBooks();
}

