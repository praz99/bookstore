import React from 'react';
// import PropTypes from 'prop-types';
import selectCategories from '../constants/categories';

const CategoryFilter = () => {
  <select>
    <option value="All">All</option>
    {selectCategories}
  </select>
}

export default CategoryFilter;
