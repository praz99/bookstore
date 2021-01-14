import { createStore, combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';
import INITIAL_STATE from '../constants/initialState';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
