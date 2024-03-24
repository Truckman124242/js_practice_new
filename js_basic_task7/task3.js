const Library = {
  books: [],

  addBook: function (bookName, bookAuthor, bookYear, bookId) {
    const newBook = {
      name: bookName,
      author: bookAuthor,
      year: bookYear,
      id: bookId,
    };
    this.books.push(newBook);
  },

  printBookInfo: function (bookId) {
    const book = this.books.find((book) => book.id === bookId);
    if (book) {
      console.log(`Book Name: ${book.name}`);
      console.log(`Author: ${book.author}`);
      console.log(`Year: ${book.year}`);
    } else {
      console.log(`Book with ID ${bookId} not found.`);
    }
  },

  printAllBooks: function () {
    if (this.books.length === 0) {
      console.log("No books available in the library.");
    } else {
      console.log("Books available in the library:");
      this.books.forEach((book) => {
        console.log(`ID: ${book.id}`);
        console.log(`Book Name: ${book.name}`);
        console.log(`Author: ${book.author}`);
        console.log(`Year: ${book.year}`);
        console.log("---------------------------");
      });
    }
  },
};

Library.addBook("It", "Stephen King", 1986, 1);
Library.addBook("The Road", "Cormac McCarthy", 2006, 2);
Library.addBook("Rocky Road to Berlin", "Andriy Kuzmenko", 2006, 3);
Library.addBook("The Hobbit", "J. R. Tolkien", 1937, 4);
Library.addBook("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 1997, 5);

Library.printAllBooks();
console.log("---------------------------");
Library.printBookInfo(4);
