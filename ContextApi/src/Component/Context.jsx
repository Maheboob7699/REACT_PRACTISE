import { createContext, useReducer, useState } from "react";
export const  todoData = createContext();

const todoReducer=(state, action)=>{
    switch(action.type){
       case"TODO":
       return{
        ...state, 
        value:action.payload,
       }
       case"ADD_TODO":
       return{
        ...state,
        store:[...state.store,{todoValue:state.value}]
        ,value:'',
       }
       case "DELETE_TODO":
       return{
        ...state,
        store:[
            ...state.store.filter((item, index)=>{
                       return index !== action.payload
            })
        ]
       }
    }
}

function TodoShow({children}){
    let initalState ={
        value:'',
        store:[],
    }

    const [name, setName] = useState("Mehboob");
    const [input , dispatch] = useReducer(todoReducer, initalState);


    function handleInput(e){
        dispatch({
         type:"TODO",
        payload: e.target.value
        })
    }

    function handleAdd(){
        dispatch({
            type:"ADD_TODO",
        })
    }


    function handleDelete(id){
         dispatch({
            type:"DELETE_TODO",
             payload:id
         })
    }

    return(
        <todoData.Provider value={{name,input,handleInput,handleAdd,handleDelete}}>
            {children}
        </todoData.Provider>
    )
}

export default TodoShow