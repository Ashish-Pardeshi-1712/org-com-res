import React, { useState } from 'react'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [userDetailsObj,setUserDetailsObj] = useState({
        username:"",
        pwd:""
    })
    const navigate = useNavigate()

    const handleInputChange = (e,field) => {
        if(field == "username"){
            setUserDetailsObj({...userDetailsObj, [field] : e?.target?.value})
        }else if(field=="pwd"){
            setUserDetailsObj({...userDetailsObj,[field]:e?.target?.value})
        }
    }

    const handleLogin = () => {
       if((userDetailsObj?.username == "admin" && userDetailsObj?.pwd == "admin") || 
          (userDetailsObj?.username == "ashish" && userDetailsObj?.pwd == "ashish@123") || 
          (userDetailsObj?.username == "somesh" && userDetailsObj?.pwd == "somesh@123")
        ){
         sessionStorage.setItem('username',userDetailsObj?.username)
         sessionStorage.setItem('password',userDetailsObj?.pwd)
         navigate('/dashboard')
       }
       else{
        alert("Invalid Credentials")
       }
    }
        
  return (
    <div className='ocrOuterDiv'>
     <div>
        <div className='ocrTxtDiv'>
         <h1>ORGANIZATIONAL</h1>
         <h1>COMPONENT</h1>
         <h1>REPOSITORY</h1>
         </div>
    </div> 
     <div className='ocrFormDiv'>
        <div className='ocrFormInnerDiv'>
            <h1>Login here to continue</h1>
            <div className='ocrFieldDiv'>
                <label>Username:</label>
                <input type='text' value={userDetailsObj?.username} onChange={(e)=>handleInputChange(e,'username')}/>
            </div>
            <div className='ocrFieldDiv'>
                <label>Password:</label>
                <input type='password' value={userDetailsObj?.pwd} onChange={(e)=>handleInputChange(e,'pwd')}/>
            </div>
            <div className='lgnBtnDiv'>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Login