import { useState } from 'react'
import './App.css'
import TempInput from './assets/Component/TemperatureInput'
import TempDisplay from './assets/Component/TemperatureDisplay'
function App() {
  const [temperature, setTemperature] = useState(20);
      function HandleTemperature(event){
        setTemperature(event.target.value);
      }
  return (
    <>
    <h1>Temperature Converter</h1>
      <TempInput temperature={temperature} changeTemperature={HandleTemperature}/>
      <TempDisplay temperature={temperature} />
    </>
  )
}

export default App
