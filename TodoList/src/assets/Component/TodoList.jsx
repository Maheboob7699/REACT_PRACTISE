import './style.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function TodoList(){
    const [input, setInput] = useState('');
      const[todo,setTodo] = useState([]);

      function inputChange(e){
                setInput(e.target.value)
                console.log(e.target.value); 
            }
        
            function AddTodo(){
          setTodo([...todo, input]);
          setInput('')
            }

            function indexShow(index){
                console.log(index);
                let updatedTodo = todo.filter((item,i)=>{
                                 return i!== index 
                })
                setTodo(updatedTodo);    
            }
                
    return(
        <>
        <div className='todo-container'>            
        <h1>Todo List</h1>
            <input type="text"  placeholder = "type here"  name='' value={input} onChange={inputChange} />        
                <button onClick={AddTodo}>Add</button>
         <div className='todo-container'>
              { todo.length=== 0 ? <p> todo is empty</p> :
                todo.map((item,index)=>{
                   return(
                    <div key={index} className="todo-item" >
                      <span className="todo-task">{item}</span>
                      <FontAwesomeIcon icon={faTrash}   onClick={()=>indexShow(index)} />
                     </div>
                   )
                })
            }
         </div>
        </div>
         
        </>
    )
}
export default TodoList