class UI {
    // help function to add DOM element
    addUIElement(name, classname = '', textcontent = '', attributes = {}){
        // create element
        const element = document.createElement(name);
        // add css style class to element
        if (classname !== ''){
            element.className = classname
        }
        // add text content to element
        element.appendChild(document.createTextNode(textcontent))
        // add attributes to element
        if (Object.keys(attributes).length > 0){
            for (let key in attributes){
                element.setAttribute(key, attributes[key])
            }
        }
        return element
    }
    addBook(book){
        //Create tr
        const tr = this.addUIElement('tr');
        // td for title, author and isbn
        for (let name in book){
            // Create td
            let td = this.addUIElement('td','', book[name])
            // Add td to tr
            tr.appendChild(td);
        }
        // X link
        // Create td
        let td = this.addUIElement('td');
        // Create a
        const link = this.addUIElement('a', '', 'X', {'href':'#'});
        // add link to td
        td.appendChild(link);
        //add td to tr
        tr.appendChild(td);
        // add tr to tbody
        const booksList = document.querySelector('#books-list');
        booksList.appendChild(tr);
    }
}
