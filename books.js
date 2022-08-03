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

addBookToLibrary('got0','grrm0',144,true);
addBookToLibrary('got1','grrm1',244,false);
addBookToLibrary('got2','grrm2',344,true);
addBookToLibrary('got3','grrm3',444,false);
addBookToLibrary('got4','grrm4',544,true);


for (i=0; i<(myLibrary.length-1); i++) {

  inputTitle = myLibrary[i].title;
  inputAuthor = myLibrary[i].Author;
  inputPage = myLibrary[i].pages;
  inputRead = myLibrary[i].read;

  cards = document.createElement('div');
  cards.className = 'cards';
  document.getElementById('content-container').appendChild(cards);

  listOfCards = document.getElementsByClassName('cards');

  cardTitle = document.createElement('div');
  cardTitle.className = 'card-title';
  cardTitle.innerHTML = inputTitle;
  listOfCards[listOfCards.length - 1].appendChild(cardTitle);

  cardAuthor = document.createElement('div');
  cardAuthor.className = 'card-author';
  cardAuthor.innerHTML = inputAuthor;
  listOfCards[listOfCards.length - 1].appendChild(cardAuthor);

  cardPage = document.createElement('div');
  cardPage.className = 'card-page';
  cardPage.innerHTML = inputPage;
  listOfCards[listOfCards.length - 1].appendChild(cardPage);

  cardRead = document.createElement('div');
  cardRead.className = 'card-read';
  cardRead.innerHTML = inputRead;
  listOfCards[listOfCards.length - 1].appendChild(cardRead);

  cardButton = document.createElement('button');
  cardButton.className = 'card-button';
  cardButton.innerHTML = 'Remove';
  listOfCards[listOfCards.length - 1].appendChild(cardButton);
}

console.log('-------')