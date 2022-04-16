
export enum ActionType {
    ADD,
    DELETE,
    EDIT
}

export type Todos = {
    todos: Array<TodoItem>
}

export type TodoItem = {
    id: string,
    isComplete: boolean,
    description: string
}