let myLibrary = []

let a = ('')
let b = ('')
let c = ('')
let d = ('')

const addBook = document.querySelector("#allBooks");
var container = document.createElement("div");
container.classList.add('content');


function Book( title, author, pagecount, checkread){
    this.title = title
    this.author = author
    this.pagecount = pagecount
    this.checkread = checkread
    this.info = title + " by " + author + ", " + pagecount + " pages" + ", " + checkread
    return this.info
}
const theHobbit = new Book( "The Hobbit" ,  "J.R.R. Tolkien" , 295 , "not yet read" )

function newBook(){
    let a = prompt ("What is the title?", "")
    let b = prompt ("Who is the author?", "")
    let c = prompt ("How many pages?", "")
    let d = prompt ("Have you read it?", "yes/no")
    let newBook = new Book( a , b , c , d)
    myLibrary.push(newBook)
    let libraryLength = myLibrary.length
    let lastbook = myLibrary[libraryLength -1];
    console.log(lastbook.info)
        const cell = document.createElement("div");
        cell.classList.add('content' + libraryLength);
        cell.textContent = lastbook.info
        const rembutt = document.createElement("button")
        rembutt.innerHTML = "remove book"
        rembutt.className = ("remove" [libraryLength])
        addBook.appendChild(cell)
        cell.appendChild(rembutt);

}
