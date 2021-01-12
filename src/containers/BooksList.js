import React from 'react';

const BooksList = () => (
  <table className="books-table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1234</td>
        <td>ABC of DEF</td>
        <td>Entertainment</td>
      </tr>
    </tbody>
  </table>
);

export default BooksList;
