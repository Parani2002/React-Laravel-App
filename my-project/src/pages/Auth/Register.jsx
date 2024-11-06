// eslint-disable-next-line no-unused-vars
import {React, useState} from 'react'

const Register = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        password_confirmation:""
    })

    const [errors, setErrors] = useState({});
    async function handleSubmit (e){
         e.preventDefault();
         const res = await fetch('/api/egister',{
            method:'post',
            body:JSON.stringify(formData),
         })
         const data = await res.json();
         if (data.errors) {
            setErrors(data.errors);
          } else {
            console.log(data);
          }

     
    }
  return (
    <>
    <h1 className='title'>Register to your account</h1>
    <form action="post" className='w-1/2 mx-auto space-y-6' onSubmit={handleSubmit} >
        <div>
            <input type="text" placeholder='Name' value={formData.name} onChange={(e) => setFormData({...formData, name:e.target.value})}/>
            {errors.name && <p className='error'>{errors.name[0]}</p>}
        </div>
        <div>
            <input type="email" placeholder='Email' value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})}/>
            {errors.email && <p className='error'>{errors.email[0]}</p>}
        </div>
        <div>
            <input type="password" placeholder='Password' value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})}/>
            {errors.password && <p className='error'>{errors.password[0]}</p>}
        </div>
        <div>
            <input type="password" placeholder='Confirm Password' value={formData.password_confirmation} onChange={(e) => setFormData({...formData, password_confirmation:e.target.value})}/>
            {errors.password_confirmation && <p className='error'>{errors.password_confirmation[0]}</p>}
        </div>
        <button className='primary-btn'>Register</button>
    </form>
    </>
  )
}

export default Register