import React, { useState, useContext } from "react";
import BooksContext from "../Context/books";

const BookEdit = ({ book, onSubmit }) => {
  const { editBook } = useContext(BooksContext);
  const [newTitle, setNewTitle] = useState(book.title);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTitle !== "" && newTitle !== book.title) {
      book.title = newTitle;
      editBook(book);
      onSubmit();
    }
  };
  const handleInputChange = (event) => {
    setNewTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="form-label">Book title</label>
        <input
          onChange={handleInputChange}
          value={newTitle}
          type="text"
          className="form-control"
        />
        <div className="form-text">This will be the new title of new book.</div>
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default BookEdit;
