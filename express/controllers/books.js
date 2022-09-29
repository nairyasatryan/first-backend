import sqlite from "sqlite3";
const SQlite3 = sqlite.verbose();
let books = [];
const db = new SQlite3.Database("bookData.db");

db.run(
  "CREATE TABLE IF NOT EXISTS books (author TEXT NOT NULL, title TEXT NOT NULL, language TEXT NOT NULL, status TEXT NOT NULL, id INTEGER PRIMARY KEY AUTOINCREMENT )"
);
export const getBooks = (req, res) => {
  res.send(books);
};

export const addBook = (req, res) => {
  let author = req.body["author"];
  let title = req.body["title"];
  let language = req.body["language"];
  let status = req.body["status"];
  db.run(
    "INSERT INTO books (author, title, language, status, id) VALUES(?,?,?,?,?)",
    author,
    title,
    language,
    status
  );

  res.send(`The book ${title}  with all inforamtion added to the database!`);
};

export const getBook = (req, res) => {
  const id = req.params;

  const foundBook = books.find((book) => book.id === id);
  res.send(foundBook);
};

export const updateBook = (req, res) => {
  const { id } = req.params;
  let author = req.body["author"];
  let title = req.body["title"];
  let language = req.body["language"];
  let status = req.body["status"];

  let sql = `UPDATE books SET author = ?, title = ? , language = ?, status =? WHERE id = ${id}`;
  db.run(sql, author, title, language, status);

  res.send(`Book with the id ${id} has been updated`);
};

export const deleteBook = (req, res) => {
  const { id } = req.params;
  let sql = "DELETE FROM books WHERE id = ? ";
  db.run(sql, id);
  res.send(`Book with the id ${id} deleted from the database`);
};
