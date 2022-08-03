let myLibrary = [];
function Books(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.progress = function() {
      progress = ''
      if ((pages-read) == 0) {progress = 'finished'}
      if ((pages-read) != 0) {progress = 'in progress'}
      if ((pages-read) == pages) {progress = 'not read yet'}
    return progress
    }
}
function addBookToLibrary(title,author,pages,read) {
    const newBook = new Books(title,author,pages,read);
    myLibrary.push(newBook);
}
addBookToLibrary('got','grrm',244,10);
console.log(myLibrary)
addBookToLibrary('got2','grrm',355,10);
console.log(myLibrary)
addBookToLibrary('got2','grrm',444,10);
console.log(myLibrary)
console.log('-------')

