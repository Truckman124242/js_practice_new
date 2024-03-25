const Library = {
    books: [],
  
    
    addBook: function(bookName, bookAuthor, bookYear, bookId) {
      // Перевірка чи присутній елемент із певним ID
      const existingBook = this.books.find(book => book.id === bookId);
      if (existingBook) {
        console.log(`Book with ID ${bookId} already exists.`);
        return;
      }
      // Перевірка чи містять параметри адекватні значення 
      if (!bookName || !bookAuthor || !bookYear || !Number.isInteger(bookYear)) {
        console.log("Invalid book parameters. Please provide valid values.");
        return;
      }
      const newBook = {
        name: bookName,
        author: bookAuthor,
        year: bookYear,
        id: bookId,
        // Властивість, що інформує чи взята книга в прокат:
        rented: false
      };
      this.books.push(newBook);
      console.log(`Book with ID ${bookId} has been added to the library.`);
    },
  
    // Метод для видалення книги після перевірки наявності книги з певним ID
    deleteBook: function(bookId) {
      const index = this.books.findIndex(book => book.id === bookId);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${bookId} has been deleted from the library.`);
      } else {
        console.log(`Book with ID ${bookId} not found.`);
      }
    },
  
    // Метод для взяття книги в прокат
    rentBook: function(bookId) {
      const book = this.books.find(book => book.id === bookId);
      if (!book) {
        console.log(`Book with ID ${bookId} not found.`);
        return;
      }
      if (book.rented) {
        console.log(`Book with ID ${bookId} is already rented.`);
        return;
      }
      book.rented = true;
      console.log(`Book with ID ${bookId} has been rented.`);
    },
  
    printAllBooks: function() {
      if (this.books.length === 0) {
        console.log("No books available in the library.");
      } else {
        console.log("Books available in the library:");
        this.books.forEach(book => {
          console.log(`ID: ${book.id}`);
          console.log(`Book Name: ${book.name}`);
          console.log(`Author: ${book.author}`);
          console.log(`Year: ${book.year}`);
          console.log(`Rented: ${book.rented ? 'Yes' : 'No'}`);
          console.log("---------------------------");
        });
      }
    }
  };
  

  Library.addBook("It", "Stephen King", 1986, 1);
  Library.addBook("The Road", "Cormac McCarthy", 2006, 2);
  Library.addBook("Rocky Road to Berlin", "Andriy Kuzmenko", 2006, 3);
  Library.addBook("The Hobbit", "J. R. Tolkien", 1937, 4);
  Library.addBook("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 1997, 5);
  
  Library.printAllBooks();
  console.log("---------------------------");
  Library.rentBook(2);
  Library.rentBook(1);

  Library.rentBook(1);
  Library.printAllBooks();
  console.log("---------------------------");
  Library.deleteBook(2);
  Library.printAllBooks();