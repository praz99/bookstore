import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <h2>Add New Book...</h2>
      <label htmlFor="form-book-title">
        Title of the Book
        <input type="text" id="form-book-title" name="form-book-title" />
      </label>
      <label htmlFor="categories">
        Choose a category
        <select id="categories">
          {
            categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
