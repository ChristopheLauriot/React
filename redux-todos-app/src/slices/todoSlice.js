import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
    ],
}

export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {

    },
})

export const { } = todoSlice.actions

export default todoSlice.reducer