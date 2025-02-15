import React from 'react'
import "./Login.css";
import {useState,useEffect} from 'react';
function Login() {
  const initialvalues={username:"",email:"",password:""};
  const [formvalues,setFormvalues]=useState(initialvalues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
  const handleChange =(e) =>{
    const { name,value }=e.target;
    setFormvalues({...formvalues, [name]:value});
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    setFormErrors(validate(formvalues));
    setIsSubmit(true);
  };
  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length=== 0 && isSubmit){
      console.log(formvalues);
    }
  },[formErrors]);
  const validate = (values) =>{
    const errors={};
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username){
      errors.username="Username required!";
    }
    if(!values.email){
      errors.email="Email required!";
    }else if(!regex.test(values.email)){
      errors.email="This is not valid email!";
    }
    if(!values.username){
      errors.password="Password required!";
    }else if(values.password.length<4){
      errors.password="Password must be more than 4 characters!";
    }
    return errors;
  };
  return (
    <div className='container'>
      {Object.keys(formErrors).length=== 0 && isSubmit ?(<div className='success'>Signed in successfully</div>):(
      < pre >{JSON.stringify(formvalues,undefined,2)}</pre>)}
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username:</label>
            <input type='text' name='username' placeholder='Enter Username' value={formvalues.username} onChange={handleChange}/>
          </div>
          <p className='error'>{formErrors.username}</p>
          <div className='field'>
            <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type='email' name='email' placeholder='Email address' value={formvalues.email}onChange={handleChange}/>
          </div>
          <p>{formErrors.email}</p>
          <div className='field'>
            <label>Password:</label>
            <input type='password' name='password' placeholder='Password' value={formvalues.password}onChange={handleChange}/>
          </div>
          <p>{formErrors.password}</p>
          < button className='fluid'>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Login
