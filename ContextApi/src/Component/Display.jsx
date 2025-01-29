
import { useContext } from "react"
import { todoData } from "./Context"
function DisplayData(){

    const {input,handleDelete} = useContext(todoData);
    
    return(
        <>
          {
            input.store.map((item,index)=>{
              return(
                <div key={index}>
                 <li>{item.todoValue} </li>
                 <button onClick={()=>handleDelete(index)}>delete</button>
                </div>
              )
            })
          }
        </>
    )
}
export default DisplayData