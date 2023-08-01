
import React from 'react';
import {Formik, Field, useFormik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
function App() {

 return (
    <div style={{border:'2px solid green',padding:'10px',margin:'10px'}}>
    <h1>FORMIK</h1>
    <div style={{border:'2px solid skyblue',padding:'10px',margin:'10px'}}>
       <Formik 
                initialValues={{
                firstname:'',
                lastname:'',
                email:''
              }}
                  validationSchema={Yup.object({
                  firstname:Yup.string().required("check fname"),
                  lastname:Yup.string().required('check lname '),
                  email:Yup.string().required("check email")
            
            })}
            
            
                onSubmit={(x)=>{
                console.log(x)
              }}
       >
        {
        (myform)=>{
          console.log(myform)
                      return(
                        <form onSubmit={myform.handleSubmit}>
                          <Field name='firstname'></Field>
                          <ErrorMessage name='firstname' component='i'></ErrorMessage>
                          <br />
                          <Field name='lastname'></Field>
                          <ErrorMessage name='lastname' component='i'></ErrorMessage>
                          <br />
                          <Field type='email' name='email'></Field>
                          <ErrorMessage name='email' component='i'></ErrorMessage><br />

                          <button type='submit'>SAVE</button>
                        </form>
                      )

        }
      }
       </Formik>
     
     

    </div>
    
    

  </div>
  );
}

export default App