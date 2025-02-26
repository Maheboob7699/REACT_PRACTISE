import axios from "axios"
import { useEffect, useState } from "react"

function DbJasonServer() {
    let initialInputData = {
        fullName:'',
        email:'',
        password:'',
    }
    const [userData, setUserData] = useState([]);
    const [userInput, setUserInput] = useState(initialInputData);
    useEffect(() => {
        const fetch = async () => {
            try {
                let response = await axios.get('https://quiz-app-json-server.onrender.com/users');
                setUserData(response.data)
            }
            catch (err) {
                console.log("error is", err)
            }
        }
        fetch();
    }, [])

    useEffect(()=>{},[userData])
    console.log(userData)
    console.log(userInput);

    const handleInput=(e)=>{
        const {name, value} = e.target;
        setUserInput((prev)=>({
            ...prev,
            [name]:value,
        }))
    }
    const handleAddUser= async ()=>{
         try{
            let response = await axios.post('https://quiz-app-json-server.onrender.com/users',userInput,{
                headers:{
                    "content-type":"application/json"
                }
            });
         }
         catch(err){
            console.log("error in api",err);
            
         }
         setUserInput(initialInputData)
         setUserData([...userData,userInput]);
    }
         
    const handleDelete = async(userId)=>{
              try{
                await axios.delete(`https://quiz-app-json-server.onrender.com/users/${userId}`);
               let deleteUser = userData.filter((user)=>{
                 return user.id !== userId
               })
               setUserData(deleteUser)
              }
              catch(err){
                console.log("user error",err);
                
              }
    }
    return (
        <>
        <label htmlFor="">
            name:
        <input type="text" name="fullName" value={userInput.fullName} onChange={handleInput} />
        </label><br /><br />
        <label htmlFor="">
            email:
          <input type="email"  name="email" value={userInput.email} onChange={handleInput}/>
        </label><br /><br />
          <label htmlFor="">
            password:
            <input type="password" name="password" value={userInput.password} onChange={handleInput} />
          </label><br /><br />
          <button onClick={ handleAddUser}>Add user</button>
          {
            userData.map((user,index)=>{
                return(
                    <div key={index}>
                        <p>{user.fullName}</p>
                        <p>{user.id}</p>
                         <button onClick={()=>handleDelete(user.id)}>delete</button>
                    </div>
                )
            })
          }
        </>
    )
}
export default DbJasonServer