import { useState } from 'react'
import './App.css'
import PropsPractise from './assets/Component/Props'

function App() {
const[name, setName] = useState(false);
  function ClickMe(){
  setName(!name);
  }

  return (
    <>
     <PropsPractise name = {name} onClick ={ClickMe}/>
    </>
  )
}

export default App
