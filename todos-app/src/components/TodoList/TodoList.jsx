import React, { useEffect, useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState([])
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)

        fetch(import.meta.env.VITE_URL_TODOS)
            .then(resp => resp.json())
            .then(todos => {
                setLoading(false)
                setTodos(todos)
            })
            .catch(err => console.error(err))

    }, [])

    const doDelete = (id) => {
        const url = `${import.meta.env.VITE_URL_TODOS}/${id}`
        fetch(url, { method: "DELETE" })
        const newTodos = todos.filter(todo => todo.id != id)
        setTodos(newTodos)
    }


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
                            <TodoTableRow key={todo.id} todo={todo} doDelete={doDelete}/>

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
            <td>{todo.completed}</td>
            <td>
                <button className="btn btn-danger" onClick={e => doDelete(todo.id)}>Delete</button>
            </td>
        </tr>
    )

}
export default TodoList
