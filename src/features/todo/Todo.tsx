import React from "react";
import styles from './Todo.module.css';
import { TodoItem } from "./TodoList";

export enum Action {
    Delete,
    Edit
}

const Todo = ({id, isComplete, description}: TodoItem) => {

    return (<>
        <div key={id} className={styles.todo}>
            <input type="checkbox" checked={isComplete} onChange={e => console.log(e)}></input>
            <p>{description}</p>
            <button>Delete</button>
        </div>
    </>)
}

export default Todo