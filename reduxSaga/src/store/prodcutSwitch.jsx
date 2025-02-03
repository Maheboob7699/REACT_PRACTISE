
let initalState={
    store:[],
    error:'',
    
}
const  productReducer =(state=initalState,action)=>{
      switch(action.type){
        case"FETCH_SUCCESS":
        return{
            ...state,
            store:action.payload,
        }
        case"FETCH_ERROR":
        return{
            ...state,
            error:action.payload,
        }
         default:
            return state
      }

}

export default productReducer