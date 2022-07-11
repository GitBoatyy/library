let myLibrary = []

let a = ('')
let b = ('')
let c = ('')
let d = ('')

const addBook = document.querySelector("#allBooks");
const form = document.querySelector('form');
var container = document.createElement("div");
container.classList.add('content');


function Book( title, author, pagecount, checkread){
    this.title = title
    this.author = "By: " + author
    this.pagecount = pagecount + " pages"
    this.checkread = checkread
    this.info = title + " By " + author + ", " + pagecount + " pages" + ", " + checkread
    return this.info
}
const theHobbit = new Book( "The Hobbit" ,  "J.R.R. Tolkien" , 295 , "not yet read" )

function newBook(){
    const titleInput = document.querySelector("#title").value;
    const authorInput = document.querySelector("#author").value;
    const pagesInput = document.querySelector("#pageN").value;

    let a = "yes"
    let newBook = new Book(titleInput, authorInput, pagesInput, a)
    myLibrary.push(newBook)
    let libraryLength = myLibrary.length
    let lastbook = myLibrary[libraryLength -1];
    console.log(lastbook.info)
        const cell = document.createElement("div");
        cell.classList.add('content' , 'book' + libraryLength);
        const booktitle = document.createElement("div");
        booktitle.classList.add('title')
        booktitle.textContent = lastbook.title
        const bookauthor = document.createElement("div");
        bookauthor.classList.add('author')
        bookauthor.textContent = ("By", lastbook.author)
        const bookpagecount = document.createElement("div");
        bookpagecount.classList.add('pagecount')
        bookpagecount.textContent = (lastbook.pagecount)
        const bookread = document.createElement("div");
        bookread.classList.add('title')
        bookread.textContent = lastbook.checkread

        const rembutt = document.createElement("button")
        rembutt.innerHTML = "remove book"
        rembutt.className = ("remove" [libraryLength])
        addBook.appendChild(cell)
        cell.appendChild(booktitle)
        cell.appendChild(bookauthor)
        cell.appendChild(bookpagecount)
        cell.appendChild(bookread)
        cell.appendChild(rembutt)
        form.reset();
}
