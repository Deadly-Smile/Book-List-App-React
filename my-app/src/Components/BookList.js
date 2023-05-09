import React from "react";
import BookShow from "./BookShow";
import "bootstrap/dist/css/bootstrap.css";

const BookList = ({ bookList, deleteBook, editBook }) => {
  const renderBooks = bookList.map((book) => {
    return (
      <div className="col-4" key={book.id}>
        <BookShow book={book} editBook={editBook} deleteBook={deleteBook} />
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
