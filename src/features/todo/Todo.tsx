import React from "react";
import styles from './Todo.module.css';
import { TodoItem } from "../../app/type"
import { useDispatch } from "react-redux";

import { deleteTodo } from "../../app/reducer";

const Todo = ({id, isComplete, description}: TodoItem) => {
    const dispatch = useDispatch()

    return (<>
        <div key={id} className={styles.todo}>
            <input type="checkbox" checked={isComplete} onChange={e => console.log(e)}></input>
            <p>{description}</p>
            <button onClick={(e) => {dispatch(deleteTodo({id: id}))}}>Delete</button>
        </div>
    </>)
}

export default Todo