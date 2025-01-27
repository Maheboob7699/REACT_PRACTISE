import { useState } from "react"
import { addTodo, removeTodo } from '../Slice/TodoSlice'
import { useSelector, useDispatch } from "react-redux";

function DisplayTodo() {
    const [input, setInput] = useState('');
    const todoData = useSelector((state) => state.todos.todoStore); // Get todo data from Redux store
    const dispatch = useDispatch(); // For dispatching actions

    function handleInput(e) {
        setInput(e.target.value);
        console.log(input);

    }

    function handleAddTodo() {
        if (input.trim()) {
            dispatch(addTodo(input)); 
            setInput(''); 
        }
    }
    function handleRemove(id){
        dispatch(removeTodo(id))
    }

    return (
        <>
            <h2>todo</h2>
            <label htmlFor="">
                enter todo:
                <input type="text" placeholder="enter todo" name="todo" value={input} onChange={handleInput} />
                <button onClick={handleAddTodo}>Add Todo</button>
               <div>
               { todoData.map((item,index)=>{
                    return(
                        <div key={index}>
                         <h3>{item.text}</h3>
                        <button onClick={()=>handleRemove(index)}>delete</button>
                    </div>
                    )
                })
            }
               </div>
            </label>
        </>
    )
}

export default DisplayTodo

// import { useState } from "react";
// import { addTodo, removeTodo } from '../Slice/TodoSlice';
// import { useSelector, useDispatch } from "react-redux";

// function DisplayTodo() {
//   const [input, setInput] = useState(''); // State for input field
//   const todoData = useSelector((state) => state.todos.todoStore); // Get todo data from Redux store
//   const dispatch = useDispatch(); // For dispatching actions

//   function handleInput(e) {
//     setInput(e.target.value); // Update input state as user types
//   }

//   function handleAddTodo() {
//     if (input.trim()) {
//       dispatch(addTodo(input)); // Dispatch action to add todo
//       setInput(''); // Reset input field after adding
//     }
//   }

//   function handleRemoveTodo(index) {
//     dispatch(removeTodo(index)); // Dispatch action to remove todo by index
//   }

//   return (
//     <>
//       <h2>Todo</h2>
//       <label htmlFor="">
//         Enter Todo:
//         <input
//           type="text"
//           placeholder="Enter todo"
//           name="todo"
//           value={input}
//           onChange={handleInput}
//         />
//         <button onClick={handleAddTodo}>Add Todo</button>
//       </label>

//       <ul>
//         {todoData.map((item, index) => (
//           <li key={index}>
//             {item.text}
//             <button onClick={() => handleRemoveTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default DisplayTodo;
