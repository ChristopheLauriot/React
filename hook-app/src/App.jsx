import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter  from './components/Counter/Counter'
import Concat from './components/Concat/Concat'

function App() {
  console.log("render App")

  return (
    <>
    <Counter/>
    <hr/>
    <Concat/>
    </>
  )
}

export default App
