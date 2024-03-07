import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todoSlice'
function Todo() {

  const todo=useSelector((state)=>{return state.todos})

  const [number,setNumber]=useState('')
  const dispatch=useDispatch()
  //console.log(todo)
  return (
    <div className='myredbox'>
        <h2>TodoList</h2>
        <input type='text' placeholder='Enter the Cart' onChange={(e)=>{ setNumber(e.target.value)}}></input>
        <button onClick={()=>{dispatch(addTodo(number))}}>ADD</button>
          <ul>
            {
              todo.todos.map((e)=>{
                return <li>{e}</li>
              })
            }
          </ul>

    </div>
  )
}

export default Todo