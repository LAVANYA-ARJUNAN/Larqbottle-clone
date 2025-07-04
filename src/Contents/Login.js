import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Form = () => {
    const[formdata, setFormData]=useState({
        email:"",
        password:""
    })

    const[error, setError] = useState({})

    const validate = () =>{
        const newError = {}


        if(!formdata.email)newError.email="Email is required"

        else if(!/\S+@\S+\.\S+/.test(formdata.email)) newError.email="Invalid email format"

        if(!formdata.password) newError.password="password is required"

        else if(formdata.password.length<7)newError.password="password should contain atleast 7 char"

        else if(!/[A-Z]/.test(formdata.password))newError.password="password should contain atleast one Uppercase"

        else if(!/[a-z]/.test(formdata.password))newError.password="password should contain atleast one Lowercase"
        else if(!/[0-9]/.test(formdata.password))newError.password="password should contain numbers"


        return newError
    }

    const handleChange = (e) => {
        const{name, value} = e.target;

        setFormData({
           ...formdata,

           [name]:value
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        const validateError = validate()

        if(Object.keys(validateError).length === 0){
            console.log(formdata)
        

        setFormData({
            email:'',
            password:''
        });
        setError({});
    }
        else{
            setError(validateError)
        }
    };

  return (
    <div>
      <form onSubmit={handleSubmit} className='container' style={{margin:"40px" ,color:"black"}}>
        <fieldset>
            <h1>Sign In</h1>
            <div className='row'>
                <div className='col-7'>
            <label >Email Address</label>         
            <input type='text' value={formdata.email} name='email' onChange={handleChange} className='form-control' style={{width:"340px",position:"relative",left:"220px",marginTop:"10px"}}></input><br></br><br></br>
            {error.email && <p style={{color:"red"}}>{error.email}</p>}
            <label>Password</label>
            <input type='password' value={formdata.password} name='password' onChange={handleChange} className='form-control'  style={{width:"340px",position:"relative",left:"220px",marginTop:"10px"}}></input><br></br><br></br>
            {error.password && <p style={{color:"red"}}>{error.password}</p>}

            <button style={{padding:"5px", width:"25%", border:"none", backgroundColor:"darkblue",color:"white",position:"relative",left:"60px"}}>Sign in</button>
            <Link style={{position:"relative",left:"100px",color:"black"}}>Forgot Your Password?</Link>
        </div>
        <div className='container col-5 bg-body-tertiary' style={{lineHeight:"33px"}}>
            <h5>New Customer?</h5>
            <p>Create an account with us and you'll be able to:
            <ul style={{textAlign:"justify",marginLeft:"70px"}}>
                <li>Check out faster</li>
                <li>Save multiple shipping addresses</li>
                <li>Access your order history</li>
                <li>Track new orders</li>
            </ul></p>
            <button style={{backgroundColor:'darkblue',color:'white',width:"50%",padding:"3px",textAlign:'center',marginLeft:"30px"}}>Create Account</button>
        </div>
        </div>
        </fieldset>
        
          
      </form>
    </div>
  )
}

export default Form
