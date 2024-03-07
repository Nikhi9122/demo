import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
}

var counterSlice=createSlice({
    name:'counterR',
    initialState,
    reducers :{
        increment:(state)=>{
                state.counter++;
        },
        decrement:(state)=>{
            state.counter--;
        }
    }
})
 export var {increment,decrement}=counterSlice.actions
export default counterSlice.reducer