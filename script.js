let myLibrary = []


const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const pagesInput = document.querySelector("#pageN")
const checkread = document.querySelector("#readbox")
const addBook = document.querySelector("#allBooks");
const form = document.querySelector('form');
var container = document.createElement("div");
container.classList.add('content');

//creates a new book array
function Book( title, author, pagecount, checkread){
    if(checkread.checked === true){
        this.title = title
        this.author = "By: " + author
        this.pagecount = pagecount + " pages"
        this.checkread = "Read"
        this.info = title + " By " + author + ", " + pagecount + " pages" + ", " + checkread
        return this.info
    } else{
        this.title = title
        this.author = "By: " + author
        this.pagecount = pagecount + " pages"
        this.checkread = "not yet read"
        this.info = title + " By " + author + ", " + pagecount + " pages" + ", " + checkread
        return this.info
}
}

//takes form input and Book output. stores in myLibrary array. 
function newBook(){
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, checkread)
    myLibrary.push(newBook)
    displayBook()
}

//takes last book in library array and creates elements to display. resets form.
function displayBook(){
    let libraryLength = myLibrary.length
    let lastbook = myLibrary[libraryLength -1];
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
        form.reset()
}