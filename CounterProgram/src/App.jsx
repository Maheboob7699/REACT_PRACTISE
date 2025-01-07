import { useState } from 'react'
import Counter from './assets/Component/Counter'

function App() {
  const [count, setCount] = useState(0)
  function Increment(){
     setCount(count + 1);
  }

  function Decrement(){
    if(count>0){
      setCount(count-1)
    }
    else if(count<=0){
       alert("count is not go in negative")
    }
  }
  return (
    <>
      <Counter count = {count} Increment ={Increment} Decrement ={Decrement} />
    </>
  )
}

export default App
