

let initalState={
    todoStore:[],
}

const todoReducer = (state=initalState, action)=>{
     switch(action.type){

        case"ADD_TODO":
        return{
            ...state,
            todoStore:[...state.todoStore,{todoValue:action.payload}]
        }
        case"REMOVE_TODO":
        return{
            ...state,
            todoStore:state.todoStore.filter((item,index)=>{
                   return index !== action.payload
            })
        }


        default:
            return state
     }

}

export default todoReducer;