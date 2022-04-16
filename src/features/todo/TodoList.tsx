import React from "react";
import { Todos } from "../../app/type";
import Todo from "./Todo";
import styles from './TodoList.module.css';


export default function TodoList(todos: Todos) {
    return (<>
        <div className={styles.todoList}>
            {todos.todos.map((todo) => <Todo key={todo.id} {...todo} />)}
        </div>
    </>)
}