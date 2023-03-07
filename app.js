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

myLibrary.forEach((e) => Book(e));

function Book(e) {
  const bookContainer = document.createElement('div');
  bookContainer.textContent = e.title;
  bookContainer.setAttribute('class');
  libContainer.appendChild(bookContainer);
}

function addBookToLibrary() {
  // do stuff here
}
