class LS{
    // help functions to get and set data at LS
    getData(key){
        let data
        if(localStorage.getItem(key) === null){
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(key))
        }
        return data
    }

    setData(key, data){
        localStorage.setItem(key, JSON.stringify(data))
    }

    addBook(book) {
        const books = this.getData('books')
        books.push(book);
        this.setData('books', books)
    }

    delBook(book){
        let books = ls.getData('books')
        Array.from(books).forEach(function(bookFromLS, bookIndex){
            if(bookFromLS.title === book.title && bookFromLS.author === book.author && bookFromLS.isbn === book.isbn){
                books.splice(bookIndex, 1)
            }
        })
        localStorage.setItem('books', JSON.stringify(books))
    }
}