
import './App.css'
import DisplayShow from './Component/Display'
import { store } from './store/loginStore';
import { Provider } from 'react-redux';
function App() {
  return (
    <>
    
        <Provider store={store}>
        <DisplayShow />
        </Provider>
      
     

    </>
  )
}

export default App
