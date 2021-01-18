const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const selectCategories = CATEGORIES.map(category => (
  <option key={category} value={category}>{category}</option>
));

export default selectCategories;
