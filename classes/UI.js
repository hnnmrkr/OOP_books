class UI {
    addBook(book){
        //Create tr
        const tr = document.createElement('tr')
        // td for title, author and isbn
        for (let name in book){
            // Create td
            let td = document.createElement('td')
            // Create text
            let text = document.createTextNode(book[name])
            // Add text to td
            td.appendChild(text);
            // Add td to tr
            tr.appendChild(td);
            console.log(tr)
        }
        // X link
        // Create td
        let td = document.createElement('td');
        // Create a
        const link = document.createElement('a');
        // Set href to a
        link.setAttribute('href', '#');
        // Create x
        link.appendChild(document.createTextNode('x'));
        td.appendChild(link);
        tr.appendChild(td);
        const booksList = document.querySelector('#books-list');
        booksList.appendChild(tr);
    }
}