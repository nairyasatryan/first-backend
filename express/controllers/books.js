import { v4 as uuidv4 } from "uuid";

let books = [];
export const getBooks = (req, res) => {
    res.send(books);
  }
 
 export const addBook = (req, res) => {
    const book = req.body;
  
    books.push({ ...book, id: uuidv4() });
  
    res.send(
      `The book ${book.title}  with all inforamtion added to the database!`
    );
  }

  export const getBook = (req, res) => {
    const { id } = req.params;
  
    const foundBook = books.find((book) => book.id === id);
    res.send(foundBook);
  }

  export const deleteBook = (req, res) => {
    const { id } = req.params;
  
    books = books.filter((book) => book.id !== id);
    res.send(`Book with the id ${id} deleted from the database`);
  }

  export const updateBook = (req, res) => {
    const { id } = req.params;
    const { author, title, language, status } = req.body;
  
    const book = books.find((book) => book.id === id);
  
    if (author) {
      book.author = author;
    }
  
    if (title) {
      book.title = title;
    }
  
    if (language) {
      book.language = language;
    }
  
    if (status) {
      book.status = status;
    }
  
    res.send(`Book with the id ${id} has been updated`);
  }
