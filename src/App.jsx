
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
function App() {
 var myform=useFormik({
  initialValues:{
    firstname:'',
    lastname:'',
    email:''
  },
 validationSchema:Yup.object({
  firstname:Yup.string().required("check"),
  lastname:Yup.string().required('check'),
  email:Yup.string().required("check")

 }),

 
  onSubmit:(x)=>{
    console.log(x)
  }
 })
 console.log(myform)
 return (

  <div style={{border:'2px solid green',padding:'10px',margin:'10px'}}>
    <h1>FORMIK</h1>
    <div style={{border:'2px solid skyblue',padding:'10px',margin:'10px'}}>
      <form onSubmit={myform.handleSubmit}>
     <input type='text' name='firstname' onChange={myform.handleChange} onBlur={myform.handleBlur}/><br />
     <i>{myform.touched.firstname && myform.errors.firstname}</i><br />
     <input type='text' name='lastname' onChange={myform.handleChange} onBlur={myform.handleBlur}/><br />
     <i>{myform.touched.lastname && myform.errors.lastname}</i><br />
     <input type='email' name='email' onChange={myform.handleChange} onBlur={myform.handleBlur}/><br />
     <i>{myform.touched.email && myform.errors.email}</i><br />
     {JSON.stringify(myform.touched)}
     <button >SAVE</button>
     </form>
    </div>
    
    

  </div>
  );
}

export default App