import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {

  const count =useSelector((state)=>{return state.counter})
  //console.log(count)
  const dispatch=useDispatch()
  
  return (
    <div className='myredbox'>

        <h2>Counter:{count.counter}</h2>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </div>
  )
}

export default Counter