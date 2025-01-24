
// import { useReducer } from "react"

import { useReducer } from "react"

// const todoReducer=(state,action)=>{
//     switch(action.type){
//          case"TODO":
//          return{
//             ...state,
//             value: action.payload
//          }

//         case"ADD_TODO":
//         return{
//             ...state,
//             storeTodo:[...state.storeTodo,{value:action.payload}],
//              value:'',
//         }

//         case"DELETE":
//         return{
//             ...state,
//              storeTodo:[...state.storeTodo.filter((item,id)=>{
//                                     return(
//                                          id !== action.payload
//                                     )
//              })]
//         }

//        default:
//         return state
//     }
// }

// function UseReducerExample1(){
// const initialState={
//     value:'',
//     storeTodo:[],
// }
// const [ todoInput, dispatch]= useReducer(todoReducer, initialState);
// console.log(todoInput);



//  function handleInput(e){
//     const {value} = e.target;
//       dispatch({
//        type : "TODO",
//         payload:value,
//       })
//  }

//  function handleAddTodo(){
//     dispatch({
//         type:"ADD_TODO",
//         payload : todoInput.value,
//     })
//  }

//  function handleDelete(index){
//     dispatch({
//         type:"DELETE",
//         payload:index,
//     })
//  }

//     return(
//         <>
//          <h1>user reducre hooks</h1>
//          <label htmlFor="">
//             Enter todo:
//              <input type="text" placeholder="enter todo" name="TODO" value={todoInput.value} onChange={handleInput}/>

//          </label>
//          <button onClick={handleAddTodo}>Add Todo</button>

//           {
//             todoInput.storeTodo.map((item,index)=>{
//                       return(
//                          <div key={index}>
//                                <li>{item.value}</li>
//                                <button onClick={()=>handleDelete(index)}>Delete</button>
//                          </div>
//                       )
//             })
//           }
//         </>
//     )
// }
// export default UseReducerExample1

const productReducer=(state,action)=>{
  switch(action.type){

    case "NAME":
        return{
            ...state,
            name:action.payload
        }

        case "AMOUNT":
            return{
                ...state,
                amount:action.payload
            }

            case "DETAILS":
                return{
                    ...state,
                    details:action.payload
                }

            case"ADD_TODO":
            return{
                ...state,
                store:[...state.store, {name:state.name, amount:state.amount, details:state.details}],
                name:'',
                amount:'',
                details:'',
                
            }

    default:
        return state
  }
}


function UseReducerExample1(){
    let initialState = {
        name:'',
        amount:'',
        details:'',
        store:[],
    }
    const [product, dispatch] = useReducer(productReducer, initialState);

    function handleInput(e){
        const {name, value} = e.target;
        dispatch({
            type:name,
            payload:value
        })
    }

    console.log(product);

    function handleAdd(){
        dispatch({
            type:"ADD_TODO",
        })
    }
    


    return(
        <>
         <h1>user reducer hooks</h1>
        <label htmlFor="">
            product name:
        <input type="text"  placeholder="eneter product name" name="NAME" value={product.name} onChange={handleInput}/>
        </label>

        <label htmlFor="">
            amount:
        <input type="number"  placeholder="" name="AMOUNT" value={product.amount} onChange={handleInput} />
        </label>
        <label htmlFor="">
            description:
        <input type="text"  placeholder="" name="DETAILS" value={product.details} onChange={handleInput} />
        </label>
        <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default UseReducerExample1