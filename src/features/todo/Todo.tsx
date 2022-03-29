import React from "react";
import styles from './Todo.module.css';

export function Todo(props:any){
    const { title } = props 
    return (<>
        <div className={styles.todo}>
            <input type="checkbox"></input>
            <div>{title}</div>
            <button>Delete</button>
        </div>
    </>)
}