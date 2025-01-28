// import { createStore } from "react-redux";
// import todoReducer from "../redux/TodoRedux";
//   const store = createStore(todoReducer);

//   export default store


import { createStore } from 'redux';
import todoReducer from "../redux/TodoRedux";
const store = createStore(todoReducer);

export default store;