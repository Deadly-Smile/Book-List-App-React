import React, { useContext } from "react";
import BookShow from "./BookShow";
import "bootstrap/dist/css/bootstrap.css";
import BooksContext from "../Context/books";

const BookList = () => {
  const { books } = useContext(BooksContext);
  const renderBooks = books.map((book) => {
    return (
      <div className="col-4" key={book.id}>
        <BookShow book={book} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{renderBooks}</div>
    </div>
  );
};

export default BookList;
