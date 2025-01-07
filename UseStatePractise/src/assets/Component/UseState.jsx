
import { useState } from "react"
function UseStatePractise() {
    const [name, setName] = useState("Mehboob");
    const[toogle, setToogle] = useState(false);

    function changeName() {
        setToogle(!toogle)
    setName(toogle ? "Anuj" : "Mehboob")
    }
    return (
        <>
        <h1> Hello{name}</h1>
            <button onClick={changeName}>Click Me</button>
        </>
    )
}
export default UseStatePractise

