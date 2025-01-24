// // import { useReducer } from "react"

import { useReducer } from "react"

// import { useReducer } from "react";

// // const todoFunction=(state,action)=>{
// //   switch (action.type){
      
// //      case "TODO":
// //         return{...state, data:action.payload};
       
// //      case "ADD_TODO":
// //        return{
// //         ...state,
// //          todoStore:[...state.todoStore,{data:state.data}]
// //        }

// //        case "DELETE_TODO":
// //         return{
// //             ...state,
// //              todoStore:state.todoStore.filter((item,i)=>{
// //                                return i !== action.payload
// //              })
           
// //         }
// //     default:
// //         return state
// //   }
// // }
// // function UseReducerExample1(){
    
// //     const initialState ={
// //           data:'',
// //           todoStore:[],
// //     }

// //     const [todo, dispatch] = useReducer(todoFunction, initialState);

// //     console.log(todo);


// //     function handleInputChange(e){
// //         const {value}= e.target;
           
// //         dispatch({
// //             type:"TODO",
// //             payload:value,
// //         })
// //     }

// //     function addTodo(){
// //         dispatch({
// //             type:"ADD_TODO"
// //         })
// //     }

// //     function deleteTodo(index){
// //         dispatch({
// //             type:"DELETE_TODO",
// //             payload:index,
// //         })
// //     }


// //     return(
// //         <>
// //           <h1>userreducer hooks</h1>
// //           <label htmlFor=""> todo:
// //             <input type="text" placeholder="enter todo" name="TODO" value={todo.data} onChange={handleInputChange} />

// //             <button onClick={addTodo} >Add Todo</button>
// //           </label>
// //           {todo.todoStore.map((item, index) => (
// //           <div key={index}>
// //             <li>{item.data}</li>
// //             <button onClick={() => deleteTodo(index)}>Delete</button>
// //           </div>
// //         ))}
// //         </>
// //     )
// // }

// // export default  UseReducerExample1

// const countReducer=(state,action)=>{
//        switch(action.type){
//          case "INCREMENT":
//             return  state + 1
          
//         case "DECREMENT":
//             return state - 1; 

//         default:
//             return state
//        }
// }


// function  UseReducerExample1(){

//     const initialCount = 0;
//     const [count, dispatch]= useReducer(countReducer,initialCount);
//     console.log(count);
    
//     function handleIncrement(){
//         dispatch({
//             type:"INCREMENT",
//             payload: count+1,
//         })
//     }

//     function handleDecrement(){

//         if(count > 0){
//             dispatch({
//                 type:"DECREMENT",
//                 payload: count-1,
//             })
//         }
        
//         else{
//             alert("count is not go in negative")
//         }
       
//     }



//     return (
//         <>
//          <h1>count :{count}</h1>
//          <button onClick={handleIncrement}>increment</button>
//          <button onClick={handleDecrement}>decrement</button>
//         </>
//     )
// }

// export default  UseReducerExample1

// const counterReducer=(state,action)=>{
//     switch(action.type){

//         case "INCREMENT":
//             return {...state, count:action.payload}

//         case"DECREMENT":
//         return{...state,count:action.payload}  
//         default:
//             return state
//     }
// }

// function  UseReducerExample1(){

//     let initialCount = {
//         count:0,
//     }


// const [counter , dispatch]= useReducer(counterReducer, initialCount)
//  function handleIncrement(){
//      dispatch({
//         type:"INCREMENT",
//         payload: counter.count + 1,
//      })
//  }

//  function handleDecrement(){
//       dispatch({
//         type:"DECREMENT",
//         payload:counter.count - 1,
//       })
//  }

//     return(
//         <>
//           <h1>User reducer hook</h1>
//            <h2>count :{counter.count}</h2>
//           <button onClick={handleIncrement}>Increment</button>
//           <button onClick={handleDecrement}>Decrement</button>
//         </>
//     )
// }

// export default  UseReducerExample1
const todoReducer=(state,action)=>{
    switch(action.type){
         case"TODO":
         return{
            ...state,
            value: action.payload
         }

        case"ADD_TODO":
        return{
            ...state,
            storeTodo:[...state.storeTodo,{value:action.payload}],
             value:'',
        }

        case"DELETE":
        return{
            ...state,
             storeTodo:[...state.storeTodo.filter((item,id)=>{
                                    return(
                                         id !== action.payload
                                    )
             })]
        }

       default:
        return state
    }
}

function UseReducerExample1(){
const initialState={
    value:'',
    storeTodo:[],
}
const [ todoInput, dispatch]= useReducer(todoReducer, initialState);
console.log(todoInput);



 function handleInput(e){
    const {value} = e.target;
      dispatch({
       type : "TODO",
        payload:value,
      })
 }

 function handleAddTodo(){
    dispatch({
        type:"ADD_TODO",
        payload : todoInput.value,
    })
 }

 function handleDelete(index){
    dispatch({
        type:"DELETE",
        payload:index,
    })
 }

    return(
        <>
         <h1>user reducre hooks</h1>
         <label htmlFor="">
            Enter todo:
             <input type="text" placeholder="enter todo" name="TODO" value={todoInput.value} onChange={handleInput}/>

         </label>
         <button onClick={handleAddTodo}>Add Todo</button>

          {
            todoInput.storeTodo.map((item,index)=>{
                      return(
                         <div key={index}>
                               <li>{item.value}</li>
                               <button onClick={()=>handleDelete(index)}>Delete</button>
                         </div>
                      )
            })
          }
        </>
    )
}
export default UseReducerExample1