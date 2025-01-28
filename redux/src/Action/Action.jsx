

export const addTodo=(input)=>{
    return{
        type:"ADD_TODO",
        payload:input,
    }
};

export const removeTodo=(id)=>{
    return{
    type:"REMOVE_TODO",
    payload:id,
  }
};