
import { incrementRequest,decrementRequest } from "../Action/action";
import { useSelector,useDispatch } from "react-redux";
function  Display(){
    const count = useSelector((state)=>state.counts.value);
    const dispatch= useDispatch();

    return(
        <>
          <h2>Counter:{count}</h2>
          <button onClick={()=>dispatch(incrementRequest())}>inc</button>
          <button onClick={()=>dispatch(decrementRequest())}>dec</button>
        </>
    )
}
export default Display