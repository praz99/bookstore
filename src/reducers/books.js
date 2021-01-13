import { v4 as uuidv4 } from 'uuid';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  books: [
    { id: uuidv4(), title: 'The Cry from Far', category: 'Horror' },
    { id: uuidv4(), title: 'The Little Master', category: 'Adventure' },
    { id: uuidv4(), title: 'Tales from Andromeda', category: 'Sci-fi' },
    { id: uuidv4(), title: 'Laughing Colors', category: 'Kids' },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state,
        {
          id: action.book.id,
          title: action.book.title,
          category: action.book.category,
        },
      ];
    case REMOVE_BOOK:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];
    default:
      return state;
  }
};

export default bookReducer;
