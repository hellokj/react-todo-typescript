import React from 'react';
import './App.css';
import AddTodo from './features/todo/AddTodo';
import TodoList from './features/todo/TodoList';

function App() {
  return (
    <div>
      <header className='App'>
        <AddTodo/>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
