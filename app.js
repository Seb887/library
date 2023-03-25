'use strict';
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [
      {
        title: 'Test',
        author: 'Test',
        pages: '111',
        read: false,
      },
      {
        title: 'Test2',
        author: 'Test2',
        pages: '222',
        read: false,
      },
      {
        title: 'Test3',
        author: 'Test3  ',
        pages: '333',
        read: false,
      },
      {
        title: 'Test4',
        author: 'Test4',
        pages: '444',
        read: false,
      },
      {
        title: 'Test5',
        author: 'Test5',
        pages: '555',
        read: false,
      },
      {
        title: 'Test6',
        author: 'Test6  ',
        pages: '666',
        read: false,
      },
    ];
  }

  addBook(newBook) {
    this.books.push(newBook);
    console.log('after addBook', this.books);
  }

  removeBook(title) {
    let startIndex;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === title) {
        startIndex = i;
        // console.log('startIndex: ', startIndex);
      }
    }

    this.books.splice(startIndex, 1);

    refreshBookGrid();
  }

  setRead(title) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === title) {
        if (this.books[i].read === false) {
          this.books[i].read = true;
        } else {
          this.books[i].read = false;
        }
        // console.log('startIndex: ', startIndex);
      }
    }
  }
}

const library = new Library();

// Get DOM Elements
const addNewBookButton = document.querySelector('#addBook');
const saveInputButton = document.querySelector('#saveNewBookButton');
const closeModalButton = document.querySelector('.closeModalButton');
const editBookButton = document.querySelectorAll('.editButton');
const removeBookButton = document.querySelector('.deleteButton');

const libContainer = document.querySelector('.libContainer');
const newBookModal = document.querySelector('.newBookModalSection');
const overlay = document.querySelector('.overlay');

const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputPages = document.querySelector('#inputPages');
const inputRead = document.querySelector('#readStatus');

// Events
addNewBookButton.onclick = () => openModal();
saveInputButton.onclick = () => addNewBook();
closeModalButton.onclick = () => cancelInput();
overlay.onclick = () => closeModal();

const openModal = () => {
  newBookModal.classList.remove('hidden');
};
const closeModal = () => {
  newBookModal.classList.add('hidden');
};

const clearInputs = () => {
  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
  inputRead.checked = false;
};

const addNewBook = () => {
  const newBook = new Book(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputRead.checked
  );
  library.addBook(newBook);
  closeModal();
  clearInputs();
  refreshBookGrid();
};

const refreshBookGrid = () => {
  clearBookCards();
  for (const book of library.books) {
    createBookCard(book);
  }
};

// for (let i = 0; i < removeBookButton.length; i++) {
//   console.log(removeBookButton[i]);
// }

const createBookCard = (obj) => {
  const bookCard = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookTitleContainer = document.createElement('div');
  const bookAuthor = document.createElement('p');
  const bookPages = document.createElement('p');
  const readStatus = document.createElement('p');
  const buttons = document.createElement('div');
  const editBook = document.createElement('button');
  const editIcon = document.createElement('i');
  const removeBook = document.createElement('button');
  const removeIcon = document.createElement('i');

  bookCard.classList.add(
    'bookCard',
    'justify-center',
    'bg-slate-700',
    'text-center',
    'h-auto',
    'p-8',
    'border',
    // 'border-sky-500',
    'rounded-3xl',
    'w-64'
  );
  bookTitleContainer.classList.add('h-16');
  bookTitle.classList.add('bookTitle', 'font-bold', 'text-xl');
  bookTitle.textContent = `${obj.title}`;
  bookAuthor.classList.add('bookAuthor', 'mt-2', 'italic', 'text-lg');
  bookAuthor.textContent = obj.author;
  bookPages.classList.add(
    'bookPages',
    'flex',
    'justify-center',
    'space-x-1',
    'mt-2',
    'text-slate-400'
  );
  bookPages.textContent = `- ${obj.pages} pages -`;
  readStatus.classList.add('readStatus', 'mt-10', 'pr-2');
  if (obj.read === true) {
    readStatus.textContent = '#read';
    readStatus.classList.add(
      'readStatus',
      'text-green-500',
      'border-green-500'
    );
    bookCard.classList.add('border-green-500');
    editBook.classList.add(
      'border-green-500',
      'hover:border-green-500',
      'hover:bg-green-500'
    );

    removeBook.classList.add(
      'border-green-500',
      'hover:border-green-500',
      'hover:bg-green-500'
    );
  } else {
    readStatus.textContent = '#unread';
    readStatus.classList.add('readStatus', 'text-red-500', 'border-red-500');
    bookCard.classList.add('border-red-500');
    editBook.classList.add(
      'border-red-500',
      'hover:border-red-500',
      'hover:bg-red-500'
    );
    removeBook.classList.add(
      'border-red-500',
      'hover:border-red-500',
      'hover:bg-red-500'
    );
  }
  editBook.classList.add(
    'editButton',
    'bg-slate-500',
    'hover:text-slate-700',
    'w-10',
    'mt-5',
    'mr-2',
    'p-2',
    'border',
    'rounded-xl'
  );
  editIcon.classList.add('fa-solid', 'fa-pen');
  removeBook.classList.add(
    'deleteButton',
    'bg-slate-500',
    'hover:text-slate-700',
    'w-10',
    'mt-5',
    'ml-2',
    'p-2',
    'border',
    'rounded-xl'
  );
  removeIcon.classList.add('fa-solid', 'fa-trash');

  bookTitleContainer.appendChild(bookTitle);
  bookCard.appendChild(bookTitleContainer);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(readStatus);
  // editBook.appendChild(editIcon);
  removeBook.appendChild(removeIcon);
  // buttons.appendChild(editBook);
  buttons.appendChild(removeBook);
  bookCard.appendChild(buttons);
  libContainer.appendChild(bookCard);

  removeBookCard(bookCard);
  changeReadStatus(bookCard);
};

const clearBookCards = () => {
  while (libContainer.firstChild) {
    libContainer.removeChild(libContainer.firstChild);
  }
};

const cancelInput = () => {
  clearInputs();
  closeModal();
};

const removeBookCard = (element) => {
  element.querySelector('.deleteButton').addEventListener('click', (e) => {
    let title =
      e.target.parentNode.parentNode.firstChild.firstChild.textContent;
    library.removeBook(title);
  });
};

const changeReadStatus = (element) => {
  element.querySelector('.readStatus').addEventListener('click', (e) => {
    let title =
      e.target.parentNode.parentNode.firstChild.firstChild.textContent;
    library.setRead(title);
  });
};

window.onload = () => refreshBookGrid();
