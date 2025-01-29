import { useState } from "react"
import { addButton } from "../slice/loginSlice";
import { useDispatch,useSelector } from "react-redux";

function DisplayShow(){
    let data = {
        name:'',
        email:"",
        password:"",
    }

    const [input, setInput]  = useState(data);
    console.log(input);
     function handleInput(e){
        const {name, value} = e.target
        setInput({
            ...input,
            [name]:value
        })
     }
     console.log(input);
     const loginData = useSelector((state)=>state.logins.loginStore);
     console.log(loginData);
     const dispatch = useDispatch();
     
      function addInputData(){
     dispatch(addButton(input))
      setInput(data)
      }
     
     
    return(
        <>
         <h1>redux login</h1>
         <label htmlFor="">
            name:
            <input type="text" name="name" id="" placeholder="enter name" value={input.name} onChange={handleInput} />
         </label>
         <label htmlFor="">
            email:
            <input type="text" name="email" id="" placeholder="enter email" value={input.email} onChange={handleInput}  />
         </label>
         <label htmlFor="">
            password:
            <input type="text"  name="password" placeholder="password" value={input.password} onChange={handleInput} />
         </label>
         <button onClick={addInputData}>login</button>
        </>
    )
}

export default DisplayShow