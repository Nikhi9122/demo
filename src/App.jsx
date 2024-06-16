import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const url=' http://localhost:3000/employees'
  const [data,setData]=useState({
    firstName :'',
    lastName:'',
    email:'',
  })
  const [records,setRecords]=useState([])
  function handle(e){
   setData({...data,[e.target.name]:e.target.value})
 
  }
  function handlesubmit(e){
        e.preventDefault();
       console.log(data)

        axios.post(url,{
          firstName:data.firstName,
          lastName:data.lastName,
          email:data.email
        })
        .then(res=>{
          console.log(res.data)
        
        })

      }
      useEffect(()=>{
        fetch('http://localhost:3000/employees')
       .then(response=>response.json())
       .then(data2=>setRecords(data2))
       
       .catch(err=>console.log(err))
       
       },[])
       
  
  return (
    <div>
        <div>
         <form onSubmit={handlesubmit}>
         firstName:<input type='text' placeholder='Enter Your FirstName' value={data.firstName} name='firstName'  onChange={(e)=>{handle(e)}}></input><br></br><br></br>
         lastName:<input type='text' placeholder=' Enter Your LastName' value={data.lastName} name='lastName' onChange={(e)=>{handle(e)}}></input><br></br><br></br>
         email:<input type='email' placeholder='Enter Your email' value={data.email} name='email' onChange={(e)=>{handle(e)}}></input>
      <button>Submit</button>

      

          <ul>
            {records.map((list,index)=>{
                  return ( 
                    <li key={index}>{list.firstName}</li>

                  )
            })}
          </ul>


      </form>
      </div>
     
      
    </div>

  )
}

export default App