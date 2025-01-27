import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todoStore:[],
}
 const todoSlice = createSlice({
  name:"todo show",
  initialState, 
  reducers:{
    addTodo(state,action){
        state.todoStore.push({
            text:action.payload,
        })
    },
     removeTodo(state,action){
        state.todoStore = state.todoStore.filter((item,index)=>{
                 return index !== action.payload
        })
     },
  }
 })

 export const {addTodo, removeTodo}  = todoSlice.actions;
 export default  todoSlice.reducer;