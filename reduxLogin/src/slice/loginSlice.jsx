import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    loginStore:[],
};


const loginSlice = createSlice({

name:"login",
initialState,
reducers:{
      addButton:(state,action)=>{
         state.loginStore.push(action.payload)
      },
},

});


export const { addButton } = loginSlice.actions;
export default loginSlice.reducer;

