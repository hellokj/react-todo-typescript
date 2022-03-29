import React from "react";
import { Todo } from "./Todo";

export default function Box(){
    const lists = []
    return (<>
        <div>
            <div>
                <input type="text"></input>
                <button>Add</button>
            </div>
            <br></br>
            <Todo title="kakaka"></Todo>
        </div>
    </>)
}