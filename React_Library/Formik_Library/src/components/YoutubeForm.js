import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
const initialValues ={
  name: '',
  email: '',
  channel: ''
}
const onSubmit = (values_Object)=>{
          
}
const validate = ((values)=>{
    let error = {}
    if(!values.name) {
      error.name = 'Name is required'
    }
    if(!values.email) {
      error.email = 'Email not Provided'
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)){
      error.email = 'Invalid Email'
    }
    if(!values.channel) {
      error.channel = 'Channel name please'
    }
    return error;
  })

// * Validation Schema for yup for all the fields:
const validationSchema = yup.object({
  name: yup.string().required('Name is required!'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  channel: yup.string().required('Channel name is required')
})
  function YoutubeForm() {
    const useFormikObject = useFormik({
      initialValues,
      onSubmit,
      validationSchema
    })
    return ( 
    <div>
        <form onSubmit={useFormikObject.handleSubmit}>
          <div className="form-control">
            <label htmlFor='name'>Name</label>
            <input type='text' 
                   id='name' 
                   name='name' 
                   onChange={useFormikObject.handleChange} 
                   onBlur={useFormikObject.handleBlur}
                   value={useFormikObject.values.name}/>
                   {
                     useFormikObject.touched.name && useFormikObject.errors.name && <p className='error'>{useFormikObject.errors.name}</p>
                   }
            </div>
            <div className="form-control">
              <label htmlFor='email'>E-mail</label>
              <input type='email' id='email' name='email' onChange={useFormikObject.handleChange} onBlur={useFormikObject.handleBlur} value={useFormikObject.values.email} />
              {
                useFormikObject.touched.email && useFormikObject.errors.email? <p className='error'>{useFormikObject.errors.email}</p>:null
              }
            </div>
            <div className="form-control">
              <label htmlFor='channel'>Channel</label>
              <input type='text' id='channel' name='channel' onChange={useFormikObject.handleChange} onBlur={useFormikObject.handleBlur} value={useFormikObject.values.channel} />
              {
                 useFormikObject.touched.channel && useFormikObject.errors.channel && <p className='error'>{useFormikObject.errors.channel}</p>  // error message for channel field if it's not provided or empty.  else null  for no error message.
              }
            </div>

            <button type='submit'> Submit </button>
        </form>
      
    </div>
  )
}

export default YoutubeForm
