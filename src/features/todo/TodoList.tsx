import React from "react";
import Todo from "./Todo";

import styles from './TodoList.module.css';

export type Todos = {
    todos: Array<TodoItem>
}

export type TodoItem = {
    id: string,
    isComplete: boolean,
    description: string
}

export default function TodoList(todos: Todos) {
    return (<>
        <div className={styles.todoList}>
            {todos.todos.map((todo) => <Todo key={todo.id} {...todo}/>)}
        </div>
    </>)
}