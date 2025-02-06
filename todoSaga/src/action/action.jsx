export const addTodo=(data)=>{
    return{
        type:"ADD_TODO",
        payload:data,
        
    }
}

export const removeTodo=(id)=>{
    return{
        type:"REMOVE_TODO",
        payload:id,
    }
}

export const addTodoRequest=(data)=>{
    return{
        type:"ADDTODO_REQUEST",
        payload:data
    }
}

export const removeTodoRequest=(id)=>{
    return{
        type:"REMOVETODO_REQUEST",
        payload:id
    }
}