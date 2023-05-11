import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const responce = await axios.get("http://localhost:3001/books");
    setBooks(responce.data);
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

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    deleteBook,
    editBook,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
