import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos:["Nikhil","Vishnu","Bro","Kuttu","Tharun","Pedhavaru"]
}

 var todoSlice=createSlice ({
    name:'todosR',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        }
    }
})

export var {addTodo}=todoSlice.actions;
export default todoSlice.reducer;