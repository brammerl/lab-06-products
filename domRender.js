import bookStock from './books.js';

const productList = document.getElementById('productList');
const uList = document.createElement('ul');
productList.append(uList);

export function domRender() {
    for (let i = 0; i < bookStock.length; i++) {
        const currentBook = bookStock[i];
        
        const list = document.createElement('li');
        const image = document.createElement('img');
        const bookTitle = document.createElement('h3');
        const summaryText = document.createElement('p');
        const button = document.createElement('button');
        const priceText = document.createElement('p');

        uList.append(list);
        list.append(image, bookTitle, summaryText, button, priceText);

        image.src = currentBook.img;
        bookTitle.textContent = currentBook.title;
        summaryText.textContent = currentBook.summary;
        summaryText.id = 'summary';
        button.value = currentBook.id;
        button.textContent = 'Add to Cart';
        priceText.textContent = currentBook.price;



    }
}

domRender();