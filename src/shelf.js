
function shelfBook(title, sciFiShelf) {
  if(title.genre === "sciFi" && sciFiShelf.length < 3){
  sciFiShelf.unshift(title)
  }
}


function unshelfBook(book, shelf) {
  for(var i = 0; i < shelf.length; i++) {
    if(shelf[i].title == book){
    shelf.splice(i, 1)
  }
}
  return shelf
 }

 function listTitles(books) {
   var bookTitles = []
   for(var i = 0; i < books.length; i++) {
     bookTitles.push(books[i].title);
}  return bookTitles.join(', ');

};

function searchShelf(shelf, bookTitle) {
  for(var i = 0; i < shelf.length; i++) {
if(bookTitle === shelf[i].title){
    return true
  }
 }
   return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf

}
