import { useState } from "react"
let data={
    name:'',
    email:'',
    password:'',
}

function Login() {
    const [input, setInput] = useState(data);
    console.log(input);
    function handleInput(e){
        const {name,value} = e.target;
        setInput({
            ...input,[name]:value,
        })
        console.log(input);   
    }

    function handleSumbit(){
        if(input.name =="" && input.email=="" && input.password==""){
            alert("please fill details")
        }
    }

    
    return (
        <>
            <h2>Hello Mehboob</h2>
            <label htmlFor="">
                enter name
                <input type="text" placeholder="enter name"name="name" value={input.name} onChange={handleInput} />
            </label> <br />

            <label htmlFor="">
                enter email:
                <input type="text" placeholder="enter password" name="email" value={input.email} onChange={handleInput} />
            </label> <br />
            <label htmlFor="">
                enter password:
                <input type="password" placeholder="enter password" name="password" value={input.password} onChange={handleInput} />
            </label> <br />
            <button onClick={handleSumbit}>login</button>
        </>
    )
}

export default Login
