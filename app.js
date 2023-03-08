'use strict';

const libContainer = document.querySelector('.libContainer');

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
];

// function Book(title, author, pages, read) {
//   (this.title = title),
//     (this.author = author),
//     (this.pages = pages),
//     (this.read = read);
// }

/*<div
          class="bookContainer justify-center bg-slate-600 text-center h-auto p-8 border border-slate-400 rounded-3xl"
        >
          <h2 class="bookTitle font-bold text-xl">
            "(K)ein Gespür für Zahlen"
          </h2>
          <p class="bookAuthor mt-2">Barbara Oakley</p>
          <div class="pages flex justify-center space-x-1 mt-2">
            <p id="bookPages">250</p>
            <p>Seiten</p>
          </div>
          <label class="mt-10 pr-2" for="read">Read?</label>
          <input
            type="checkbox"
            class="readButtons mt-5"
            id="readStatus"
            name="read"
            value="Read"
          />
          <div>
            <button
              class="bg-slate-700 hover:bg-slate-300 hover:text-slate-900 w-10 mt-5 p-2 border border-slate-400 hover:border-slate-900 rounded-full"
              id="deleteButton"
            >
              X
            </button>
          </div>*/

myLibrary.forEach((e) => generateHTML(e));

function generateHTML(obj) {
  const bookContainer = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const bookPages = document.createElement('p');
  const readLabel = document.createElement('label');
  const readInput = document.createElement('input');
  const removeContainer = document.createElement('div');
  const removeEntry = document.createElement('button');

  bookContainer.classList.add(
    'bookContainer',
    'justify-center',
    'bg-slate-600',
    'text-center',
    'h-auto',
    'p-8',
    'border',
    'border-slate-400',
    'rounded-3xl'
  );
  bookTitle.classList.add('bookTitle', 'font-bold', 'text-xl');
  bookTitle.textContent = `"${obj.title}"`;
  bookAuthor.classList.add('bookAuthor', 'mt-2');
  bookAuthor.textContent = obj.author;
  bookPages.classList.add(
    'bookPages',
    'flex',
    'justify-center',
    'space-x-1',
    'mt-2'
  );
  bookPages.textContent = obj.pages;
  readLabel.classList.add('mt-10', 'pr-2');
  readInput.classList.add('readButtons', 'mt-5');
  readLabel.setAttribute('for', 'read');
  readLabel.textContent = 'Read?';
  readInput.setAttribute('type', 'checkbox');
  readInput.setAttribute('id', 'readStatus');
  readInput.setAttribute('name', 'read');
  readInput.setAttribute('value', 'Read');
  removeEntry.setAttribute(
    'bg-slate-700',
    'hover:bg-slate-300',
    'hover:text-slate-900',
    'w-10',
    'mt-5',
    'p-2',
    'border',
    'border-slate-400',
    'hover:border-slate-900',
    'rounded-full'
  );
  removeEntry.setAttribute('id', 'deleteButton');
  removeEntry.textContent = 'X';

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookPages);
  bookContainer.appendChild(readLabel);
  bookContainer.appendChild(readInput);
  removeContainer.appendChild(removeEntry);
  bookContainer.appendChild(removeContainer);
  libContainer.appendChild(bookContainer);
}

/* <button
              class="bg-slate-700 hover:bg-slate-300 hover:text-slate-900 w-10 mt-5 p-2 border border-slate-400 hover:border-slate-900 rounded-full"
              id="deleteButton"
            >
              X
            </button>*/

function addBookToLibrary() {
  // do stuff here
}
