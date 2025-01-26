import { useContext, useState } from "react"


import { todoData } from "./Context";
function InputTodo(){

   const {input,handleInput,handleAdd} = useContext(todoData);
    


    return(
        <>
           <label htmlFor="">
            Enter todo :
            <input type="text" name="TODO" id="" value={input.value} onChange={handleInput} />
            <button onClick={handleAdd}>Add</button>
           </label>
        </>
    )
}
export default  InputTodo