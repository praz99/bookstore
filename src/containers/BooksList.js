import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBookAction, changeFilterAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';
import userIcon from '../images/user.png';
import '../styles/BooksList.css';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = book => removeBook(book);
  const handleFilterChange = e => changeFilter(e.target.value);
  const bookFilter = filter === 'All' ? books : books.filter(book => book.category === filter);
  const booksList = bookFilter.map(book => (<Book key={`book-${book.id}`} book={book} deleteBook={() => handleRemoveBook(book)} />));

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-heading">Bookstore CMS</h1>
        <div className="navbar-cats">books</div>
        <div className="navbar-cats">categories</div>
        <div className="navbar-cats">
          <CategoryFilter handleFilterChange={handleFilterChange} />
        </div>
        <div className="user-icon">
          <img src={userIcon} alt="user" />
        </div>
      </nav>
      <div className="book-list">
        {booksList}
      </div>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    books: state.books,
    filter: state.filter,
  }
);
const mapDispatchToProps = dispatch => (
  {
    removeBook: book => dispatch(removeBookAction(book)),
    changeFilter: filter => dispatch(changeFilterAction(filter)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
