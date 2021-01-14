import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
  books: [
    { id: uuidv4(), title: 'The Cry from Far', category: 'Horror' },
    { id: uuidv4(), title: 'The Little Master', category: 'History' },
    { id: uuidv4(), title: 'Tales from Andromeda', category: 'Sci-Fi' },
    { id: uuidv4(), title: 'Laughing Colors', category: 'Kids' },
  ],
  filter: 'All',
};

export default INITIAL_STATE;
