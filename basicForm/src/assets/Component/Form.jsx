import { useState } from "react"

function Form(){

    let data={
        name:"",
        email :"",
        password : "",
    }
 const [fullName, setFullName] = useState(data)

  function handleChange(e){
    const{name ,value} = e.target
    setFullName({...fullName,[name]:value});
        console.log(fullName);
    
  } 

  function handleSubmit(e) {
    e.preventDefault();
    if (fullName.name === "" && fullName.email === "" && fullName.password === "") {
      alert("Please fill all fields");
    }
  }
    return (
        <>
           <form onSubmit={handleSubmit}> 
           <label>
          Name:
          <input type="text" placeholder="Enter your name" name="name" value={fullName.name} onChange={handleChange} />
        </label>
        <br/>

             <label htmlFor="">email :
                <input type="text"  placeholder="enter your email"  name="email" value={fullName.email} onChange={handleChange} />
             </label> <br />

             <label htmlFor="">password :
                <input type="password" placeholder="enter your password" name="password" value={fullName.password} onChange={handleChange}  />
             </label> <br />

             <button type="submit">Sumbit</button>
             
           </form>
        </>
    )
}

export default Form