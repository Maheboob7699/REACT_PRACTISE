
import { useState } from "react"
function UseStatePractise() {
    const[toogle, setToogle] = useState(false);

    function changeName() {
        setToogle(!toogle)
    }
    return (
        <> <h1>{toogle ? "anuj" : "Mehboob"}</h1><br />
            <button onClick={changeName}>Click Me</button>
        </>
    )
}
export default UseStatePractise

