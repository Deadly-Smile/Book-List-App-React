import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BookEdit from "./BookEdit";
import BooksContext from "../Context/books";

export const BookShow = ({ book }) => {
  const { deleteBook } = useContext(BooksContext);
  const [isEdit, setIsEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteBook(book.id);
  };
  const handleEditClick = () => {
    setIsEdit(!isEdit);
  };

  const handleEditSubmit = () => {
    setIsEdit(false);
  };

  let content = isEdit ? (
    <BookEdit book={book} onSubmit={handleEditSubmit} />
  ) : (
    <>
      <div className="card-body text-bg-info mb-3">
        <h5 className="card-title">{book.title}</h5>
      </div>
      <div className="card-body">
        <button
          onClick={handleEditClick}
          className="btn btn-primary"
          style={{ marginRight: "4px" }}
        >
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </>
  );

  return (
    <div className="card col-4" style={{ width: "18rem", margin: "5px" }}>
      <img
        src={`https://picsum.photos/300/200?random=${book.id}`}
        className="card-img-top"
        alt="No pic found"
      />
      {content}
    </div>
  );
};
export default BookShow;
