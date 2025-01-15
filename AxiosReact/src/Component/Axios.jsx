import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react"



function Axios() {

    const [product, setProduct] = useState([])
    useEffect(() => {
        const apiRequest = async () => {
            try {
                let data = await axios.get('https://fakestoreapi.com/products');
                console.log(data.data);
                setProduct(data.data);
            }
            catch (err) {
                console.log("Error is", err);
            }
        }
        apiRequest();
    }, [])

    return (
        <>
            <h1>Axios</h1>

            {
                product.map((item, index) => {
                    return (
                        <div key={index.id}>
                            <h3>{item.title}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Axios