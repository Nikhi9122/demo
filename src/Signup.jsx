import React, { useState } from 'react'

function Signup() {

    const [data,setData]=useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:'',
      })
      const{username,email,password,confirmpassword}=data;
      function changehandler(e){
            setData({...data,[e.target.name]:[e.target.value]})
    
      }
      function submit(e){
          e.preventDefault();
          if(password===confirmpassword){
            console.log(data)
          }
          else
          {
            console.log("Password Not Matching")
          }
          
          
      }

  return (
    <div className='myredbox'>
    <form onSubmit={submit}>
  UserName:<input type='text' placeholder='Enter the UserName' name='username' value={username} onChange={changehandler}></input><br />
 Email :<input type='email' placeholder='Enter the Email' name='email' value={email} onChange={changehandler}></input><br />
  Password :<input type='password' placeholder='Enter the Password' name='password' value={password} onChange={changehandler}></input><br />
  ConfirmPassword:<input type='password'placeholder='Enter the ConfirmPassword' name='confirmpassword' value={confirmpassword} onChange={changehandler}></input><br /><br />
  <button>SUBMIT</button>
  </form>
</div>
  )
}

export default Signup

