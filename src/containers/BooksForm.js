import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import selectCategories from '../constants/categories';
import { createBookAction } from '../actions/index';
import '../styles/BookForm.css';

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({ title: '', category: '' });
  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const { title, category } = state;
  const handleSubmit = e => {
    e.preventDefault();
    createBook({
      id: uuidv4(),
      title,
      category,
    });
    setState({ title: '', category: '' });
  };

  return (
    <>
      <h2 className="bookform-heading">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.title || ''} onChange={handleChange} id="title" name="title" placeholder="Book title" required />
        <select className="bookform-select" onChange={handleChange} name="category" value={state.category}>
          <option value="default">Select a category</option>
          {selectCategories}
        </select>
        <button className="bookform-btn" type="submit">add book</button>
      </form>
    </>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBookAction(book)) });

export default connect(null, mapDispatchToProps)(BooksForm);
