import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosAsync,loading } from '../../slices/todoSlice'

function TodoList() {
    console.log("render TodoList")
    const todos = useSelector((state) => state.todoListState.todos)
    const isLoading = useSelector((state) => state.todoListState.isLoading)
    const dispatch = useDispatch()
    console.log(isLoading)
    useEffect(() => {
        dispatch(loading())
        // dispatch(getTodosAsync())    

    }, [])
    return (
        <>
            <h2>Todo List</h2>
            {isLoading &&
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }

            {!isLoading &&
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>User ID</th>
                            <th>Completed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo =>
                            // <TodoTableRow key={todo.id} todo={todo} doDelete={doDelete}/>
                            <TodoTableRow key={todo.id} todo={todo}/>


                        )}
                    </tbody>
                </table>
            }
        </>
    )
}



function TodoTableRow({ todo,doDelete }) {

    return (
        <tr >
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.userId}</td>
            <td>{todo.completed?"✔":""}</td>
            <td>
                <button className="btn btn-danger" onClick={e => doDelete(todo.id)}>Delete</button>
            </td>
        </tr>
    )

}
export default TodoList
