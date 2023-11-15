import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from "../slices/todoSlice"
export const store = configureStore({
  reducer: {
    todoListState: todoListReducer,

  },
})