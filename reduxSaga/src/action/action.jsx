export const fetchData=()=>{
    return{
        type:"FETCH_DATA"
    }
}

export const fetchSuccess=(data)=>{
    return{
        type:"FETCH_SUCCESS",
        payload:data,
    }
}

export const fetchError=(error)=>{
    return{
        type:"FETCH_ERROR",
        payload:error
        
    }
}