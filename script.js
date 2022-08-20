let myLibrary = [];
const bookshelf = document.querySelector('.bookshelf')

function Book(title, author, pages, read) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
   this.info = function () {
      return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`
   }
}


function addBookToLibrary() {
   bookshelf.insertAdjacentHTML("afterbegin", `<div class="book">
   <div class="book__title">Book titlasade</div>
   <div class="book__author">Book author</div>
   <div class="book__pages">Book pages</div>
   <div class="book__isread">
      <input type="checkbox">
      <label for="" class="read__yes">Yes</label>
      <label for="" class="read__no">No</label>
   </div>
   <button type="button" class="book__remove">Delete</button>
</div>`)
}