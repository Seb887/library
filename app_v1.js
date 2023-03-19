'use strict';

const addBookButton = document.querySelector('#addBook');
const saveNewBookButton = document.querySelector('#saveNewBookButton');
const closeModalButton = document.querySelector('.closeModalButton');
const libSection = document.querySelector('.libSection');
const libContainer = document.querySelector('.libContainer');

const newBookModalSection = document.querySelector('.newBookModalSection');
const editButtons = document.querySelectorAll('.editButton');
const deleteButtons = document.querySelectorAll('.deleteButton');
const allBookContainer = document.querySelectorAll('.bookContainer');
const getReadStatus = document.querySelectorAll('.readStatus');

const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputPages = document.querySelector('#inputPages');
const inputRead = document.querySelector('#readStatus');

let myLibrary = [
  {
    title: 'Kein Gespür für Zahlen',
    author: 'Barbara Oakley',
    pages: 222,
    read: false,
  },
  {
    title: 'Die Macht Ihres Unterbewusstseins',
    author: 'Joseph Murphy',
    pages: 352,
    read: false,
  },
  {
    title: 'Der Millionär und der Mönch',
    author: 'Julian Hermsen',
    pages: 187,
    read: true,
  },
  {
    title: 'Der Millionär und der Mönch',
    author: 'Julian Hermsen',
    pages: 187,
    read: true,
  },
  {
    title: 'Der Millionär und der Mönch',
    author: 'Julian Hermsen',
    pages: 187,
    read: true,
  },
];

// Button Events
addBookButton.onclick = () => openModal();
saveNewBookButton.onclick = () => getInput();
closeModalButton.onclick = () => closeModal();
editButtons.onclick = () => editBook();
// deleteButtons.forEach((e) => console.log(e));

// deleteButton.oncklick = () => console.log('Delete gedrückt');

function createHTML(obj) {
  const bookContainer = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookTitleContainer = document.createElement('div');
  const bookAuthor = document.createElement('p');
  const bookPages = document.createElement('p');
  const readStatus = document.createElement('p');
  // const readInput = document.createElement('input');
  const buttons = document.createElement('div');
  const editEntry = document.createElement('button');
  const editIcon = document.createElement('i');
  const removeEntry = document.createElement('button');
  const removeIcon = document.createElement('i');

  bookContainer.classList.add(
    'bookContainer',
    'justify-center',
    'bg-slate-700',
    'text-center',
    'h-auto',
    'p-8',
    'border',
    // 'border-sky-500',
    'rounded-3xl'
  );
  bookTitleContainer.classList.add('h-16');
  bookTitle.classList.add('bookTitle', 'font-bold', 'text-xl');
  bookTitle.textContent = `"${obj.title}"`;
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
  // readInput.classList.add('readButtons', 'mt-5');
  // readStatus.setAttribute('for', 'read');
  if (obj.read === true) {
    readStatus.textContent = '#read';
    readStatus.classList.add('text-green-500', 'border-green-500');
    bookContainer.classList.add('border-green-500');
  } else {
    readStatus.textContent = '#unread';
    readStatus.classList.add('text-red-500');
    bookContainer.classList.add('border-red-500');
  }

  // readInput.setAttribute('type', 'checkbox');
  // readInput.setAttribute('id', 'readStatus');
  // readInput.setAttribute('name', 'read');
  // readInput.setAttribute('value', 'Read');
  editEntry.classList.add(
    'editButton',
    'bg-slate-500',
    'hover:bg-sky-500',
    'hover:text-slate-700',
    'w-10',
    'mt-5',
    'mr-2',
    'p-2',
    'border',
    'border-sky-500',
    'hover:border-slate-500',
    'rounded-xl'
  );
  editIcon.classList.add('fa-solid', 'fa-pen');
  removeEntry.classList.add(
    'deleteButton',
    'bg-slate-500',
    'hover:bg-sky-500',
    'hover:text-slate-700',
    'w-10',
    'mt-5',
    'ml-2',
    'p-2',
    'border',
    'border-sky-500',
    'hover:border-slate-500',
    'rounded-xl'
  );
  // removeEntry.textContent = 'X';
  removeIcon.classList.add('fa-solid', 'fa-trash');

  bookTitleContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookTitleContainer);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookPages);
  bookContainer.appendChild(readStatus);
  // bookContainer.appendChild(readInput);
  editEntry.appendChild(editIcon);
  removeEntry.appendChild(removeIcon);
  buttons.appendChild(editEntry);
  buttons.appendChild(removeEntry);
  bookContainer.appendChild(buttons);
  libContainer.appendChild(bookContainer);
}

// function changeReadStatus() {}

function refresh() {
  // Delete bookContainer
  while (libContainer.firstChild) {
    libContainer.removeChild(libContainer.firstChild);
  }
  // Create HTML
  myLibrary.forEach((e) => createHTML(e));
}

function openModal() {
  newBookModalSection.classList.remove('hidden');
}

function closeModal() {
  newBookModalSection.classList.add('hidden');
}

function clearInputModal() {
  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
  inputRead.checked;
}

// function changeReadStatus() {}

class Book {
  constructor(title = 'Unknown', author = 'Unknown', pages = 0, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  inputToArray() {
    let newBookObj = {
      title: this.title,
      author: this.author,
      pages: this.pages,
      read: this.read,
    };
    // console.log(newBookObj);
    myLibrary.push(newBookObj);
  }
}

function getInput() {
  const newBook = new Book(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputRead.checked
  );
  newBook.inputToArray();
  clearInputModal();
  refresh();
  closeModal();
}

function editBook() {
  openModal();
  for (let book of myLibrary) {
    inputbook.title = book.title;
    inputbook.title = book.author;
    inputbook.title = book.pages;
    inputbook.title = book.read;
  }
}

window.onload = () => refresh();
