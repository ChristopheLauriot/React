import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'

function App() {

  return (
    <>
    <TodoForm/>
    <TodoList/>
    </>
  )
}

export default App
