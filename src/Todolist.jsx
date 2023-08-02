import React from 'react'

function Todolist() {

const [todolist,setTodolist]=React.useState(['nikhil','sukala','mani'])

function todo(){
    var s=document.getElementById('d1').value;
setTodolist([...todolist,s]) 
}

  return (
    <div>
        
        <h1>Todolist</h1>
    <input type='text' id='d1'></input>
    <button onClick={todo}>ADD</button>

    {
        todolist.map((a)=>{
            return(
                <li>{a}</li>
            )
        })
    }
    </div>
  )
}

export default Todolist