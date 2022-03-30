import React from "react";
import Todo from "./Todo";

import styles from './TodoList.module.css';

let todos: Array<TodoItem> = [
    {
        id: "xxx1",
        isComplete: false,
        description: "ooo1"
    },{
        id: "xxx",
        isComplete: false,
        description: "ooo2"
    },{
        id: "xxx",
        isComplete: false,
        description: "ooo3"
    },
]

export type TodoItem = {
    id: string,
    isComplete: boolean,
    description: string
}

// 

export default function Box() {
    return (<>
        <div className={styles.todoList}>
            {todos.map(todo => (<Todo {...todo}></Todo>))}
        </div>
    </>)
}