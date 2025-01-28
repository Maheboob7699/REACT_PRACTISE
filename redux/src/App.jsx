import { useState } from 'react'
import './App.css'
import TodoList from './Component/Todo'
import { Provider } from 'react-redux'
import store from './CreateStore/Store'


function App() {
 
  return (
    <>
    <Provider store={store}>
    <TodoList/>
    </Provider>
       
     
     
    </>
  )
}

export default App;
