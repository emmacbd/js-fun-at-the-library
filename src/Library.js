
function createLibrary(library) {
var buildingFacts = {
    name: library,
    shelves: {fantasy: [],  fiction: [], nonFiction: []}
};
return buildingFacts;
}

function addBook(library, book){
if(book.genre === 'fantasy')  {
  library.shelves.fantasy.push(book)
} else if (book.genre === 'nonFiction'){
  library.shelves.nonFiction.push(book)
}  else {
    library.shelves.fiction.push(book)
  }
}
///
//splice
function checkoutBook(library, title, genre) {
  for(var i = 0; i < library.shelves[genre].length; i++){
  if(title === library.shelves[genre][i].title){
    library.shelves[genre].splice(i, 1)
    return `You have now checked out ${title} from the ${library.name}`
  }
 }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}
///
module.exports = {
   createLibrary,
   addBook,
  checkoutBook
};
