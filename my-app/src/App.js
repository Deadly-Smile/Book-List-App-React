import React, { useState, useEffect } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const responce = await axios.get("http://localhost:3001/books");
    setBooks(responce.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    setBooks([
      ...books,
      { id: Math.round(Math.random() * 999999), title: title },
    ]);
    console.log("A book of " + title + " is created.");
    console.log(books);
    const responce = await axios.post("http://localhost:3001/books", {
      title,
    });
    console.log(responce);
  };

  const deleteBook = async (id) => {
    const responce = await axios.delete(`http://localhost:3001/books/${id}`);
    console.log(responce);
    setBooks(
      books.filter((book) => {
        return id !== book.id;
      })
    );
  };

  const editBook = async (newBook) => {
    console.log(newBook);
    const responce = await axios.put(
      `http://localhost:3001/books/${newBook.id}`,
      { title: newBook.title }
    );
    console.log(responce);
    const updatedBook = books.map((book) => {
      if (book.id === newBook.id) {
        return { ...book, ...responce.data };
      }
      return book;
    });
    setBooks(updatedBook);
  };

  return (
    <>
      <BookCreate onSubmit={createBook} />
      <BookList bookList={books} deleteBook={deleteBook} editBook={editBook} />
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
        integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
        integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default App;
