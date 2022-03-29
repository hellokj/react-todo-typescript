import React from "react";

export function Todo(props:any){
    const { title } = props 
    return (<>
        <div className="">
            <input type="checkbox"></input>
            <div>{title}</div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </>)
}