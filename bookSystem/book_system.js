let books =[];
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
       books.push(book);
       showbooks();
       clearInputs(); 
    } else {
        alert('Please fill in al fields correctly.');
    }
}
function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>Book Number: ${index+1}</h1>
        <p><strong>Book Name: </stromg>${book.name}</p>
        <p><strong>Author Name: </stromg>${book.authorName}</p>
        <p><strong>Book Description: </stromg>${book.bookDescription}</p>
        <p><strong>No. of Pages: </stromg>${book.pagesNumber} page(s)</p>
        <button onclick="deleteBook(${index})">Delete</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
function deleteBook(index) {
    books.splice(index, 1);
    showbooks();
}