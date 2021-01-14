import { createStore, combineReducers } from 'redux';
import bookReducer from './books';
import INITIAL_STATE from '../constants/initialState';

const rootReducer = combineReducers({
  books: bookReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
