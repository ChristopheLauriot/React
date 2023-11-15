import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    isLoading:false
}


 const getTodosAsync = createAsyncThunk("todoList/getTodosAsync",async ()=>{
    const response = await fetch(import.meta.env.VITE_URL_TODOS)
    const data = await response.json()
    return data

})

 const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = !state.isLoading
          },
    },
    extraReducers:(builder)=>{
        builder.addCase(getTodosAsync.fulfilled,(state,action)=>{
            state.todos = action.payload
            state.isLoading = false
        })
    }
})

export const {loading } = todoSlice.actions

export default todoSlice.reducer
export {todoSlice,getTodosAsync}