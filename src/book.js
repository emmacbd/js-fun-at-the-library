function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  };
}

function saveReview(reviewPhrase, arrayOfReviews){
  for(var i = 0; i < arrayOfReviews.length; i++){
   if(arrayOfReviews[i] === reviewPhrase){
     return arrayOfReviews
    }
  }
  arrayOfReviews.push(reviewPhrase)
    return arrayOfReviews
}


function calculatePageCount(title) {
  return (title.length * 20)
}

function writeBook(title, mainCharacter, genre){
 return {
      title: title,
      mainCharacter: mainCharacter,
      pageCount: calculatePageCount(title),
      genre: genre,
    }
  }


function editBook(book) {
  return (book.pageCount *= .75)
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
