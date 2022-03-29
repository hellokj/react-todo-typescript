import React from "react";
import { Todo } from "./Todo";

import styles from './TodoList.module.css';

export default function Box(){
    const lists = []
    return (<>
        <div className={styles.todoList}>
            <br></br>
            <Todo title="kakaka"></Todo>
            <Todo title="kakaka"></Todo>
            <Todo title="kakaka"></Todo>
        </div>
    </>)
}