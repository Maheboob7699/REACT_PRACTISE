import { useState } from 'react'
import Display from './component/DisplayTodo'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/stores'
function App() {

  return (
    <>

      <Provider store={store}>
        <Display />
      </Provider>
    </>
  )
}

export default App
