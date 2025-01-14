 import { useEffect, useState } from "react"
function UseEffectFunction(){
    const [data, setData] = useState([])

    useEffect(()=>{
        const Api= async ()=>{
             let data = await fetch('https://fakestoreapi.com/products');
             let response = await data.json();
             console.log(response);
             setData(response);
             
        }
        Api();
    },[])

    return(
        <>
           <div>
            {
                 data.map((item)=>{
                     console.log(item);
                     return(
                        <div>
                          {item.title}
                        </div>
                     )
                     
                 })
            }
           </div>
        
        </>
    )
}

export default UseEffectFunction