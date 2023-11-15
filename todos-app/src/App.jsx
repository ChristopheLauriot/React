import { useState,useEffect,useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'

function App() {
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

  
  const doSubmit = (event) => {
    event.preventDefault()
    const todo = {
        title: event.target.todoTitle.value,
        completed: event.target.todoCompleted.checked
    }
    console.log(todo)
    const url = `${import.meta.env.VITE_URL_TODOS}`
    fetch(url,
        {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(todo)
        },

    )
    .then(resp => resp.json())
    .then(data => {
      const newTodos = [...todos,data]
      setTodos(newTodos)
      setTodos( [...todos,data])
    })
}

  const cbDoSubmit = useCallback(
    () => {
      doSubmit(e)
    },
    [e],
  )

  return (
    <>
    <TodoForm doSubmit={doSubmit}/>
    <TodoList 
      todos={todos} 
      isLoading = {isLoading} 
      doDelete={doDelete} />

    </>
  )
}

export default App
