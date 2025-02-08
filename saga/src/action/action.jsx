export const fetchProductApi=()=>{
    return{
        type:"FETCH_REQUEST"
    }
}

export const productSuccess=(data)=>{
    return{
        type:"SUCCESS",
        payload:data
    }
}

export const ProductError=(error)=>{
    return{
        type:"ERROR",
        payload:error
    }
}

