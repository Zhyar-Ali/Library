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

Book.prototype.toggleStatus = function(){
    if (this.status === "Have Read"){
        this.status = "Have Not Read";
    } else{
        this.status = "Have Read";
    }
};

function addBookToLibrary(title, author, pages, status){
    let id =crypto.randomUUID();
    const book = new Book(id,title,author,pages,status);
    library.push(book);
}

const CONTAINER = document.querySelector(".container");

function displayBooks(){
    for (const book of library){
        if(!booksDisplayed.includes(book)){

            const div = document.createElement("div");
            div.classList.add("card");

            const removeButton = document.createElement("button");
            removeButton.classList.add("removeCard");
            removeButton.textContent="Remove Book";
            removeButton.setAttribute('data-id',book.id);

            const changeStatus = document.createElement("button");
            changeStatus.classList.add("changeStatus");
            changeStatus.textContent = "Change Status";

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

            div.append(paraOne,paraTwo,paraThree, removeButton, changeStatus);
            CONTAINER.appendChild(div);

            removeButton.addEventListener("click", ()=>{
                if (removeButton.dataset.id === book.id){
                    div.remove();
                }
            });

            changeStatus.addEventListener("click", ()=>{
                book.toggleStatus();
                lowest.textContent = "Status: " + book.status;
            });

            booksDisplayed.push(book);
        }
    }
}

const addButton = document.getElementById("add");
const dialog = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const statusinput = document.querySelector('input[name="status"]:checked');
const form = document.querySelector("form");

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

    form.reset();
    addBookToLibrary(titleValue, authorValue, pagesValue, statusValue);
    displayBooks();
}

const exitForm = document.getElementById("exitForm");

exitForm.addEventListener("click", ()=>{
    dialog.close();
})
