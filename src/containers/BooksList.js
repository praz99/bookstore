import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBookAction } from '../actions/index';
import Book from '../components/Book';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => removeBook(book);
  const booksList = books.map(book => (<Book key={`book-${book.id}`} book={book} deleteBook={() => handleRemoveBook(book)} />));

  return (
    <table className="books-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
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
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBookAction(book)) });

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
