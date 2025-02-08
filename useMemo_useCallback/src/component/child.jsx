import { memo } from "react";

function ChildDisplay({todo,todoAdd}){
    console.log(todo);
    return(
        <>
         <h2>child Display:{todo}</h2>
         <button onClick={todoAdd}>todo</button>
        </>
    )
}
export default memo (ChildDisplay)