import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from '../Slice/CreateSlice'
function Display(){

    const count = useSelector((state)=>state.counter.count);
    const  dispatch = useDispatch();
    return(
        <>
          <h1>Counter:{count}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}
export default Display