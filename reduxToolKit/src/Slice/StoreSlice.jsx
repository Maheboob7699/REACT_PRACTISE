import { configureStore } from "@reduxjs/toolkit";
import counterReducer from  './CreateSlice';
import todoReducer from './TodoSlice';

const store = configureStore({
    reducer:{
        counter:counterReducer,
        todos:todoReducer,
    }
})

export default store

