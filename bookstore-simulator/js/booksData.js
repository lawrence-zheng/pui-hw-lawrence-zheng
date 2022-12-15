class Book {
    constructor(title, description, size, color, money) {
        this.title = title;
        this.description = description;
        this.size = size;
        this.color = color;
        this.money = money;

        this.element = null;

    }
}

//import from json

import bookList from '../data/book-list.json' assert { type: "json" };


let booksActive = [];
let booksInactive = [];



for (var key in bookList) {
    if (bookList[key].default) {
        booksActive.push(new Book(bookList[key].title, bookList[key].description, bookList[key].size, bookList[key].color, bookList[key].money));
    } else {
        booksInactive.push(new Book(bookList[key].title, bookList[key].description, bookList[key].size, bookList[key].color, bookList[key].money));
    }
}



//show active books on bookshelf

function createShelfListing(book) {
    const template = document.querySelector('#book-listing-template');
    const clone = template.content.cloneNode(true);
    book.element = clone.querySelector(".book-listing");
    console.log(book.title);
    console.log(book.element.querySelector('.book-name').innerText);
    book.element.querySelector('.book-name').innerText = book.title;


    book.element.querySelector('.book-listing-text').innerText = book.title;


    book.element.querySelector('.book-name').innerText = book.title;
    book.element.querySelector('.book-desc').innerText = book.description;
    book.element.querySelector('.book-price').innerText = book.money;

    book.element.querySelector('.book-listing-text').addEventListener('click', () => {
        selectBook(book);
        hideBookshelf();
    });
    

    document.querySelector('#bookshelf-list').append(book.element);
}


for (const book of booksActive) {
    createShelfListing(book);
}

