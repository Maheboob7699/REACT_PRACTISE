import { useState } from "react"
import { addTodo, removeTodo } from "../Action/Action";
import { useDispatch, useSelector } from "react-redux";

function TodoList(){

const [input, setInput] = useState('');
const todo = useSelector((state)=>state.todoStore);
const dispatch = useDispatch();

 function handleInputTodo(e){
    setInput(e.target.value);
    console.log(input);
 }

 const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput(''); 
    }
  };

 function handleDelete(id){
      dispatch(removeTodo(id))
 }
    return (
        <>
            <h2>Todo list uisng redux</h2>
            <label htmlFor="">
                todo:
                <input type="text" placeholder="enter todo"  value={input} 
                onChange={handleInputTodo}/>
            </label>
            <button onClick={handleAdd}>Add</button>
            {
                todo.map((item,index)=>{
                    return(
                        <div>
                            <li>{item.todoValue}</li>
                             <button onClick={()=>handleDelete(index)}>delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TodoList