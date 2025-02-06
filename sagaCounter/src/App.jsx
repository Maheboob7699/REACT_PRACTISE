import { useState } from 'react'
import Display from './component/DisplayCounter'
import { Provider } from 'react-redux'
import { store } from './store/stores'
import './App.css'

function App() {
 

  return (
    <>
    <Provider store={store}>
  <Display/>
    </Provider>
    </>
  )
}

export default App
