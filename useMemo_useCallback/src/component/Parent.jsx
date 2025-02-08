import { useCallback, useMemo, useState } from "react"
import ChildDisplay from "./child"
function Display(){
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);
    function increment(){
        setCount(count+1)
    }

    let multiplyData = useMemo(function multiply(){
        console.log("multiply called");
        return count*10;
    },[count])


   const todoAdd= useCallback(()=>{
        setTodo([...todo,"new todo"])
       },[todo]);
    return(
        <>
         <h2>Counter:{count}</h2>
         <h2>multiply:{multiplyData}</h2>
         <button onClick={increment}>increment</button>
     
         <ChildDisplay todo={todo} todoAdd={todoAdd}/>
        </>
    ) 
}
export default Display