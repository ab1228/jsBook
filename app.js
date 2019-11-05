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
                tiitle: 'Book One',
                author: 'John Doe',
                isbn: '3345004934'
            },
            {
                tiitle: 'Book Two',
                author: 'Mike Will',
                isbn: '3345004934'
            }
        ];
        var books = storedBooks;

        books.forEach(function (book) {
            UI.addBookToList(book);
        })
    };

    static addBookToList(book) {
        var list = document.getElementById('#book-list');
        var row = document.createElement('tr');

        row.innerHTML = '<td>'
    }

}
// Store class: Handle stroage

//Event: Display books

//Event: Add a Book

//Event: Remove a Book 