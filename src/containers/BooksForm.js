import React from 'react';

const BooksForm = () => {
  const category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <h2>Add New Book...</h2>
      <label htmlFor="form-book-title">Title of the Book</label>
      <input type="text" id="form-book-title" name="form-book-title" />
      <label htmlFor="categories">Choose a category:</label>
      <select id="categories">
        <option value="action">Action</option>
        <option value="biography">Biography</option>
        <option value="history">History</option>
        <option value="horror">Horror</option>
        <option value="kids">Kids</option>
        <option value="learning">Learning</option>
        <option value="sci-fi">Sci-Fi</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
