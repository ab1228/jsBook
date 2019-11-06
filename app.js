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
        console.log(book);
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


}
// Store class: Handle stroage

//Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", function () {
    const titile = document.querySelector("#titile").value;
    const titile = document.querySelector("#author").value;
    const titile = document.querySelector("#isbn").value;
})
//Event: Remove a Book