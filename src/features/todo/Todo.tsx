import React from "react";
import styles from './Todo.module.css';
import { TodoItem } from "./TodoList";

export enum Action {
    Delete,
    Edit
}

const Todo : React.FC<TodoItem> = ({id, isComplete, description}: TodoItem) => { 
    return (<>
        <div className={styles.todo}>
            <input type="checkbox" checked={isComplete}></input>
            <div>{description}</div>
            <button>Delete</button>
        </div>
    </>)
}

export default Todo