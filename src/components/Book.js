import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';

const Book = ({ book, deleteBook }) => (
  <div className="book-container">
    <div className="book-left">
      <div className="book-category">{book.category}</div>
      <div className="book-title">{book.title}</div>
      <button type="button" onClick={deleteBook}>Delete</button>
    </div>
    <div className="book-center">
      <p>Hello</p>
    </div>
    <div className="book-right">
      <p>World</p>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
