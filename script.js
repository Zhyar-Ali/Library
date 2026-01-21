const library = [];

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

        div.append(paraOne,paraTwo);
        CONTAINER.appendChild(div);
    }
}
displayBooks();

const addButton = document.getElementById("add");
const dialog = document.getElementById("form");

addButton.addEventListener("click", () =>{
    dialog.showModal();
});
