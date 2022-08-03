let myLibrary = [];     // Array 'library' to hold book objects

// Constructor to hold books
function Books(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.progress = function() {
    //   progress = ''
    //   if ((pages-read) == 0) {progress = 'finished'}
    //   if ((pages-read) != 0) {progress = 'in progress'}
    //   if ((pages-read) == pages) {progress = 'not read yet'}
    // return progress
    // }
}

// Function to add books to constructor
function addBookToLibrary(title,author,pages,read) {
    const newBook = new Books(title,author,pages,read);
    myLibrary.push(newBook);
}

// Extract form data
submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => addToPage());

function addToPage() {
  // Grabs input values from form //
  inputTitle = document.getElementById('title-input').value
  inputAuthor = document.getElementById('author-input').value
  inputPage = document.getElementById('pages-input').value
  inputRead = document.getElementById('read-input').value

  addBookToLibrary(inputTitle,inputAuthor,inputPage,inputRead);   // Append book to library array

  // Add a new card class to the content-container parent
  cards = document.createElement('div');
  cards.className = 'cards';
  document.getElementById('content-container').appendChild(cards);

  listOfCards = document.getElementsByClassName('cards');         // Get the latest list of cards (to append children to later)

  // Create a new card-title element, within the card class
  cardTitle = document.createElement('div');
  cardTitle.className = 'card-title';
  cardTitle.innerHTML = inputTitle;
  listOfCards[listOfCards.length - 1].appendChild(cardTitle);

  // Create a new card-author element, within the card class
  cardAuthor = document.createElement('div');
  cardAuthor.className = 'card-author';
  cardAuthor.innerHTML = inputAuthor;
  listOfCards[listOfCards.length - 1].appendChild(cardAuthor);

  // Create a new card-page element, within the card class
  cardPage = document.createElement('div');
  cardPage.className = 'card-page';
  cardPage.innerHTML = inputPage;
  listOfCards[listOfCards.length - 1].appendChild(cardPage);

  // Create a new card-read element, within the card class
  cardRead = document.createElement('div');
  cardRead.className = 'card-read';
  cardRead.innerHTML = inputRead;
  listOfCards[listOfCards.length - 1].appendChild(cardRead);

  // Create a new card-button element, within the card class
  cardButton = document.createElement('button');
  cardButton.className = 'card-button';
  cardButton.innerHTML = 'Remove';
  listOfCards[listOfCards.length - 1].appendChild(cardButton);
}

console.log('-------')