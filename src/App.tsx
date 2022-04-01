import React from 'react';
import './App.css';
import AddTodo from './features/todo/AddTodo';

function App() {
  return (
    <div>
      <header className='App'>
        <AddTodo/>
      </header>
    </div>
  );
}

export default App;
