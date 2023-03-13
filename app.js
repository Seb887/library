'use strict';

const addBookButton = document.querySelector('#addBook');
const saveNewBookButton = document.querySelector('#saveNewBookButton');
const closeModalButton = document.querySelector('.closeModalButton');
const libSection = document.querySelector('.libSection');
const libContainer = document.querySelector('.libContainer');
const newBookModalSection = document.querySelector('.newBookModalSection');
const deleteButton = document.querySelector('#deleteButton');

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

// function Book(title, author, pages, read) {
//   (this.title = title),
//     (this.author = author),
//     (this.pages = pages),
//     (this.read = read);
// }

myLibrary.forEach((e) => generateHTML(e));

// Button Events
addBookButton.onclick = () => openModal();
saveNewBookButton.onclick = () => closeModal();
closeModalButton.onclick = () => closeModal();
deleteButton.oncklick = () => console.log('Delete gedrückt');

function generateHTML(obj) {
  const bookContainer = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookTitleContainer = document.createElement('div');
  const bookAuthor = document.createElement('p');
  const bookPages = document.createElement('p');
  const readStatus = document.createElement('p');
  // const readInput = document.createElement('input');
  const removeContainer = document.createElement('div');
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
    'border-sky-500',
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
  bookPages.textContent = `- ${obj.pages} Seiten -`;
  readStatus.classList.add('mt-10', 'pr-2');
  // readInput.classList.add('readButtons', 'mt-5');
  // readStatus.setAttribute('for', 'read');
  if (obj.read === true) {
    readStatus.textContent = '#gelesen';
    readStatus.classList.add('text-green-500');
  } else {
    readStatus.textContent = '#ungelesen';
    readStatus.classList.add('text-red-500');
  }

  // readInput.setAttribute('type', 'checkbox');
  // readInput.setAttribute('id', 'readStatus');
  // readInput.setAttribute('name', 'read');
  // readInput.setAttribute('value', 'Read');
  removeEntry.classList.add(
    'bg-slate-700',
    'hover:bg-sky-500',
    'hover:text-slate-700',
    'w-10',
    'mt-5',
    'p-2',
    // 'border',
    // 'border-slate-600',
    'hover:border-slate-900',
    'rounded-full'
  );
  removeEntry.setAttribute('id', 'deleteButton');
  // removeEntry.textContent = 'X';
  removeIcon.classList.add('fa-solid', 'fa-trash');

  bookTitleContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookTitleContainer);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookPages);
  bookContainer.appendChild(readStatus);
  // bookContainer.appendChild(readInput);
  removeEntry.appendChild(removeIcon);
  removeContainer.appendChild(removeEntry);
  bookContainer.appendChild(removeContainer);
  libContainer.appendChild(bookContainer);
}

function addBookToLibrary() {}

function changeReadStatus() {}

function deleteBook(e) {
  console.log(e.target);
}

function openModal() {
  // libSection.classList.add('hidden');
  newBookModalSection.classList.remove('hidden');
}

function closeModal() {
  libSection.classList.remove('hidden');
  newBookModalSection.classList.add('hidden');
}

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.newBook = this.setPerson = function () {
    myLibrary.push({ title });
  };
}
