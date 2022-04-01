import React, { useState } from "react";
import TodoList, { TodoItem } from "./TodoList";

export default function AddTodo() {
    const [todos, setTodos] = useState<Array<TodoItem>>([])
    const updateTodos = (todoItem: TodoItem) => {
        const newTodos = [...todos, todoItem] 
        setTodos(newTodos)
    }

    const [textInput, setTextInput] = useState<string>('')

    return (<>
        <div>
            <input id="todoInput" type="text" placeholder="Add new todo" onChange={e => setTextInput(e.target.value)}></input>
            <button onClick={(e) => 
                {
                    updateTodos({id: _uuid(), description: textInput, isComplete: false})
                    // bug : do not re-render
                    setTextInput('')
                    alert(textInput)
                }}>Add</button>
        </div>
        <TodoList todos={todos}></TodoList>
    </>)
}

function _uuid() {
    var d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
        // eslint-disable-next-line no-mixed-operators
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }