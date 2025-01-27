import { useState } from 'react'
import Display from './Component/DisplayCounter'
import DisplayTodo from './Component/DIsplayTodo'
import { Provider } from 'react-redux'
import './App.css'
import store from './Slice/StoreSlice'

function App() {

  return (
    <>
    <Provider store={store}>
       <Display/>
       <DisplayTodo/>
    </Provider>
     
    </>
  )
}

export default App
