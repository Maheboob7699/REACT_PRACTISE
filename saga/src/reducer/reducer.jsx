let initialState={
    productStore:[],
    error:null,
}



const productReducer = (state = initialState, action)=>{
 switch(action.type){

    case"SUCCESS":
    return{
        ...state,
    //   
    productStore:action.payload
        };

    case"ERROR":
    return{
        ...state,
       error:action.payload
    };

    default:
        return state
 }   

}

export default productReducer