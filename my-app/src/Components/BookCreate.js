import React, { useState, useContext } from "react";
import BooksContext from "../Context/books";
import "bootstrap/dist/css/bootstrap.css";

const BookCreate = () => {
  const { createBook } = useContext(BooksContext);
  const [title, setTitle] = useState("");
  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== "") {
      createBook(title);
      setTitle("");
    }
  };

  return (
    <div
      className="sticky-top text-bg-info mb-3"
      style={{ padding: "5px 10px 10px 5px", margin: "5px 10px 10px 5px" }}
    >
      <h1>Create a book:</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Book title</label>
          <input
            onChange={handleInputChange}
            value={title}
            type="text"
            className="form-control"
          />
          <div className="form-text">This will be the title of new book.</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
