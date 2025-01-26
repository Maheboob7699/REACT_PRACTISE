import { useState } from 'react'
import './App.css'
import TodoShow from './Component/Context'
import DisplayData from './Component/Display'
import InputTodo from './Component/Input'

function App() {


  return (
    <>
     <TodoShow>
     <InputTodo/>
     <DisplayData/>
     </TodoShow>
      
    </>
  )
}

export default App
