// Book class: represetnts book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.auhtor = author;
        this.isbn = isbn;
    }
}
// UI class: Handle UI tasks
class UI {
    static displayBooks() {
        var storedBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '3345004934'
            },
            {
                title: 'Book Two',
                author: 'Mike Will',
                isbn: '3345004934'
            }
        ];
        const books = storedBooks;
        // console.log(books);
        // books.forEach(function (book) {
        //     UI.addBookToList(book);
        books.forEach((book) => UI.addBookToList(book));
        // })

    };


    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML =
            `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href= "#" class="btn btn-danger btn-sm delete ">X</a></td>`

        list.appendChild(row);

    }
    static deleteBook(el) {
        if (el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();
        }
    }
    static clearFields() {

        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }

}
// Store class: Handle stroage

//Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", function () {

    ////maybe prevent default value

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    //validation
    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields")
    } else {
        const book = new Book(title, author, isbn);

        /// add book to UI
        UI.addBookToList(book);

        //CLEAR FIELDS  

        UI.clearFields();
    }





});
//Event: Remove a Book

document.querySelector("#book-list").addEventListener("click", function (event) {
    UI.deleteBook(event.target)
});