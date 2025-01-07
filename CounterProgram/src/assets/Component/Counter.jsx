
import './style.css';

function Counter({count, Increment ,Decrement}){
    return(
        <>
        <div className='counter-container'>
        <h1>Counter {count}</h1>
        <div className="count-container">
        <button className='increment' onClick={Increment}>increment</button>
        <button  className='decrement' onClick={Decrement}>decrement</button>
        </div>
        </div>
        </>
    )
}
export default Counter