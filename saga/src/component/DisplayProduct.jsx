import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux"
import { fetchProductApi } from "../action/action";




function Display(){
    const {productStore=[],error}  = useSelector((state)=>state.productData);
    const dispatch = useDispatch();
    console.log(productStore);
    

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchProductApi());
        }, 2000); 
    }, [dispatch]);

    
    return(
        <>
         <h2>Display Prodiuct</h2>
         {productStore.length > 0 ? (
                productStore.map((item, index) => (
                    <div key={index}>
                        <h2>{item.title}</h2>
                    </div>
                ))
            ) : (
                <p>Loading products...</p>
            )}
        </>
    )
}

export default Display