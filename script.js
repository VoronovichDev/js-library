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
   // console.log(title, author, pages, read)
   e.target.reset()

   // title = '';
   // author = '';
   // pages = '';
   // read = false;

})


function addBookToLibrary(title, author, pages, read) {
   bookshelf.insertAdjacentHTML("afterbegin", `<div class="book">
   <div class="book__title">${title}</div>
   <div class="book__author">${author}</div>
   <div class="book__pages">${pages}</div>
   <div class="book__isread">
      <input type="checkbox" ${read ? "checked" : ""}>
      <label for="" class="read__yes">Yes</label>
      <label for="" class="read__no">No</label>
   </div>
   <button type="button" class="book__remove">Delete</button>
</div>`)
}