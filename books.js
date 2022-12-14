console.clear();

let myLibrary = [];     // Array 'library' to hold book objects

// An empty constructor object to hold each books contents.
// For the purpose of later storage into the myLibrary array.
class Books {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
}

// Extract form data
submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => addBookToLibrary());

function deleteButton(cardButton,currentIndex) {
  myLibrary.splice(currentIndex, 1);
  cardButton.parentElement.remove();
  console.log(myLibrary);
}

function toggleRead(cardRead,currentIndex,inputRead) {       // Change this.read value in myLibrary if tick changes for each card
  myLibrary[currentIndex].read = cardRead.checked;    // Change the tick from false -> true, or true -> false, in the array
  console.log(myLibrary);
}

function addBookToLibrary() {

  // Grabs input values from form //
  inputTitle = document.getElementById('title-input').value
  inputAuthor = document.getElementById('author-input').value
  inputPage = document.getElementById('pages-input').value
  inputRead = document.getElementById('read-input').checked

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
  cardRead.id = 'tickbox-'+currentIndex;
  cardRead.checked = inputRead;
  cardRead.addEventListener("click", toggleRead.bind(this,cardRead,currentIndex,inputRead));
  listOfCards[listOfCards.length - 1].appendChild(cardRead);

  // Create a new "remove button" element, within the card class
  cardButton = document.createElement('input');
  // cardButton.id = 'delete-id-'+currentIndex;
  cardButton.className = 'card-button';
  cardButton.type = 'button';
  cardButton.value = 'Delete Book';
  // cardButton.addEventListener('mouseenter', deleteButton.bind(this,cardButton));
  cardButton.addEventListener("click", deleteButton.bind(this,cardButton,currentIndex));     // Binds the function deleteButton to this specific element
  listOfCards[listOfCards.length - 1].appendChild(cardButton);

  console.log(myLibrary);
}
  
console.log('-------')