import React from 'react';
import './App.css';
import { store } from '../src/app/store';
import { Provider } from 'react-redux';

import AddTodo from './features/todo/AddTodo';

function App() {
  return (
    <div>
      <header className='App'>
        <Provider store={store}>
          <AddTodo />
        </Provider>
      </header>
    </div>
  );
}

export default App;
