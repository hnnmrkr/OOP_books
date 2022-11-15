// UI and LS objects
const ui = new UI()
const ls = new LS()

// Event elements
const form = document.querySelector('form');

form.addEventListener('submit', addBook)

//Add Book
function addBook(event){
    // Get input values
    const titleInput = document.querySelector('#book-title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    // Create book
    const book = new Book (title, author, isbn)
    // Add Book value to visual by UI
    ui.addBook(book)
    // add book to LS
    ls.addBook(book)

    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    event.preventDefault();
}