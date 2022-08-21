let myLibrary = [];

const bookshelf = document.querySelector('.bookshelf')
let addBookForm = document.forms.addBook

function Book(title, author, pages, read) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
   this.info = function () {
      return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`
   }
}

addBookForm.addEventListener('submit', e => {
   e.preventDefault()
   let title = (document.querySelector('#title__book').value)
   let author = (document.querySelector('#author__book').value)
   let pages = (document.querySelector('#pages__book').value)
   let read = (document.querySelector('#book__read').checked)
   addBookToLibrary(title, author, pages, read)
   e.target.reset()
})

const showBooks = (newBook) => {
   bookshelf.insertAdjacentHTML("beforeend", `<div class="book" data-num="${myLibrary.indexOf(newBook)}">
         <div class="book__title">${newBook.title}</div>
         <div class="book__author">${newBook.author}</div>
         <div class="book__pages">${newBook.pages}pages</div>
         <div class="book__isread">
            <input type="checkbox" ${newBook.read ? "checked" : ""}>
            <label for="" class="read__yes">Yes</label>
            <label for="" class="read__no">No</label>
         </div>
         <button type="button" class="book__remove">Delete</button>
      </div>`)
}

function addBookToLibrary(title, author, pages, read) {
   let newBook = new Book(title, author, pages, read)
   myLibrary = [...myLibrary, newBook]
   showBooks(newBook)
}

bookshelf.addEventListener('click', e => {
   if (e.target.tagName === 'BUTTON') {
      let bookIndex = e.target.parentNode.dataset.num
      removeBookFromLibrary(bookIndex)
   } else if (e.target.tagName === 'INPUT') {
      let bookIndex = e.target.parentNode.parentNode.dataset.num
      toggleReadStatus(bookIndex)
   } else return


})

function removeBookFromLibrary(index) {
   myLibrary.splice(index, 1)
   bookshelf.innerHTML = ''
   renderAllBooks(myLibrary)
}

const renderAllBooks = (lib) => {
   lib.forEach((book) => {
      bookshelf.insertAdjacentHTML("beforeend", `<div class="book" data-num="${myLibrary.indexOf(book)}">
      <div class="book__title">${book.title}</div>
      <div class="book__author">${book.author}</div>
      <div class="book__pages">${book.pages} pages </div>
      <div class="book__isread">
         <input type="checkbox" ${book.read ? "checked" : ""}>
         <label for="" class="read__yes">Yes</label>
         <label for="" class="read__no">No</label>
      </div>
      <button type="button" class="book__remove">Delete</button>
   </div>`)
   })
}

const toggleReadStatus = (index) => {
   myLibrary[index].read = !myLibrary[index].read
}