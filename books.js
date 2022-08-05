console.clear();

let myLibrary = [];     // Array 'library' to hold book objects

// An empty constructor object to hold each books contents.
// For the purpose of later storage into the myLibrary array.
function Books(title, author, pages, read) {
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

// Extract form data
submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => addBookToLibrary());

function addBookToLibrary() {

  // Grabs input values from form //
  inputTitle = document.getElementById('title-input').value
  inputAuthor = document.getElementById('author-input').value
  inputPage = document.getElementById('pages-input').value
  inputRead = document.getElementById('read-input').checked
  // if (inputRead == true) {inputRead = 'Read'};
  // if (inputRead == false) {inputRead = 'Unread'};

  const newBook = new Books(inputTitle,inputAuthor,inputPage,inputRead);   // Function to create new book object
  myLibrary.push(newBook);                                                 // Append the book object to the empty array
  currentIndex = myLibrary.length - 1;

  // Add a new card class to the content-container parent
  cards = document.createElement('div');
  cards.className = 'cards';
  document.getElementById('content-container').appendChild(cards);

  listOfCards = document.getElementsByClassName('cards');                 // Get the latest list of cards (to append children to later)

  // Create a new "title" element, within the card class
  cardTitle = document.createElement('div');
  cardTitle.className = 'card-title';
  cardTitle.innerHTML = inputTitle;
  listOfCards[listOfCards.length - 1].appendChild(cardTitle);

  // Create a new "author" element, within the card class
  cardAuthor = document.createElement('div');
  cardAuthor.className = 'card-author';
  cardAuthor.innerHTML = inputAuthor;
  listOfCards[listOfCards.length - 1].appendChild(cardAuthor);

  // Create a new "page" element, within the card class
  cardPage = document.createElement('div');
  cardPage.className = 'card-page';
  cardPage.innerHTML = inputPage;
  listOfCards[listOfCards.length - 1].appendChild(cardPage);
  
  // Create a new "read" element, within the card class
  cardRead = document.createElement('input');
  cardRead.type = 'checkbox';
  cardRead.name = 'card-read';
  cardRead.id = 'card-read';
  cardRead.checked = inputRead;
  listOfCards[listOfCards.length - 1].appendChild(cardRead);

  // Create a new "remove button" element, within the card class
  cardButton = document.createElement('input');
  cardButton.id = 'delete-id-'+currentIndex;
  cardButton.className = 'card-button';
  cardButton.type = 'button';
  cardButton.value = 'Delete Book';
  listOfCards[listOfCards.length - 1].appendChild(cardButton);
  cardButton.addEventListener("click", () => deleteButton());
}

function deleteButton() {
  i = currentIndex;
  myLibrary[i].remove();
  cardButton.parentElement.remove();
}
  
console.log('-------')