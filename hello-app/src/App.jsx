import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile/Profile'
import Hello from './components/Hello/Hello'
import People from './components/People/People'

function App() {
  

  return (
    <>
      <h1>Hello</h1>
      <Profile/>
      <hr/>
      <Hello name="GAURAT" firstName="Fred"/>
      <hr/>
      <People/>
    </>
  )
}

export default App
