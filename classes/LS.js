class LS {
    // help functions to get and set data at LS
    getData(name){
        let data
        if(localStorage.getItem(name) === null) {
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem(name))
        }
        return data
    }

    setData(name, data){
        localStorage.setItem(name, JSON.stringify(data))
    }
    addBook(book) {
        let books = this.getData('books')
        books.push(book);
        this.setData('books', books)
    }
    delBook(book){
        let books = this.getData('books')
        books.forEach(function(bookFromLS, bookIndex){
            if(bookFromLS.title === book.title && bookFromLS.author === book.author && bookFromLS.isbn === book.isbn){
                books.splice(bookIndex, 1)
            }
        })
        this.setData('books', books)
    }
}