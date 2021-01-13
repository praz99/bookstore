import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => {
  const booksList = books.map(book => (<Book key={`book-${book.id}`} book={book} />));

  return (
    <table className="books-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {booksList}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => (
  {
    books: state.bookReducer.books,
  }
);

export default connect(mapStateToProps, null)(BooksList);
