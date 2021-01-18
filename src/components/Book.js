import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';

const Book = ({ book, deleteBook }) => (
  <div className="book-container">
    <div className="book-left">
      <div className="book-category">{book.category}</div>
      <div className="book-title">{book.title}</div>
      <div className="book-author">Author</div>
      <div className="book-left-buttons">
        <button type="button">Comments</button>
        <span />
        <button type="button" onClick={deleteBook}>Delete</button>
        <span />
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="book-center">
      <div className="progress-bar">
        <div className="progress-bar-inner" />
      </div>
      <div className="completed">
        <p>64%</p>
        <span> Completed</span>
      </div>
    </div>
    <div className="book-right">
      <div className="current-chapter">Current Chapter</div>
      <div className="chapter-number">Chapter 17</div>
      <button className="update-btn" type="button">update progress</button>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
