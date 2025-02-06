import {  useState } from "react"
import { addTodoRequest,removeTodoRequest } from "../action/action";

import { useDispatch, useSelector } from "react-redux";

function Display() {
    const [input,setInput] = useState('');
    const todo =useSelector((state)=>state.todos.todoStore);
    console.log(todo);
    
    const dispatch =useDispatch();

    const handleInput=(e)=>{
        const {value} = e.target;
        setInput(value)
        console.log(value);
    }

    function handleAddTodo(){
        dispatch(addTodoRequest(input))
        setInput('');
    }

    function handleRemoveTodo(id){
        dispatch(removeTodoRequest(id))
    }

    return (
        <>
            <h2>Todo</h2>
            <label htmlFor="">
                todo:
                <input type="text" placeholder="entertodo" value={input} onChange={handleInput} />
            </label>
            <button onClick={handleAddTodo}>Add</button>
            {
                todo.map((item,index)=>{
                    return(
                        <div key={index}>
                            <p>{item}</p>
                            <button onClick={()=>handleRemoveTodo(index)}>delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Display