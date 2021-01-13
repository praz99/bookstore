import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = {
  books: [
    { id: uuidv4(), title: 'The Cry from Far', category: 'Horror' },
    { id: uuidv4(), title: 'The Little Master', category: 'Adventure' },
    { id: uuidv4(), title: 'Tales from Andromeda', category: 'Sci-fi' },
    { id: uuidv4(), title: 'Laughing Colors', category: 'Kids' },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
