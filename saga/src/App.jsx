import { useState } from 'react'
import './App.css'
import Display from './component/DisplayProduct'
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
