import { createSlice, createReducer, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { ActionType, TodoItem } from './type'

export interface TodoState {
    todos: Array<TodoItem>
}

const initialState: TodoState = {
    todos: []
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, { payload }) => {
            state.todos = [...state.todos, payload]
        },
        deleteTodo: (state, { payload }) => {
            state.todos = state.todos.filter(t => t.id !== payload.id)
        },
    }
})

export const { add, deleteTodo } = todoSlice.actions

export const getTodos = (state: RootState) => state.todo.todos

export default todoSlice.reducer