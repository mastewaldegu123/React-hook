import React,{useState,useEffect} from 'react'
import {useForm } from "react-hook-form"
import { useNavigate,Link } from 'react-router-dom'
import axios from "axios"
import "./style.css"

function Register() {
  
  const[username,setUsernames] =useState('')
  const [email,setEmail]=useState("")
  const [pass_word,setPass_word]=useState("")
  
  
  const [user,setUser]=useState('')
 
  const navigate =useNavigate()
const register=(e)=>{
 
  axios.post("http://localhost:5000/register",{username:username,  email:email,
  pass_word:pass_word,
  }).then((response)=>{
  if(!response.data.message)
  {
    console.log( username, pass_word)
    
  }else{
    
    setUser(response.data.message)
    navigate('/mainpage')
   
  }
  })
}
const login=()=>{
  navigate('/login')
}

 
  return (
     <div>
       <div className='formm' >
      <form action="" className="formx">
      <h1>Register</h1>
          <label className='login7' htmlFor="">username</label>
          <input className='login11' clastype="text"  placeholder='username...' onChange={(e)=>{setUsernames(e.target.value)}}/>

          <label className='login7' htmlFor="">email</label>
          <input className='login11' type="text"   placeholder='email...' onChange={(e)=>{setEmail(e.target.value)}} />
        
          <label className='login7' htmlFor="">pass_word</label>
          <input className='login11' type="password"   placeholder='pass_word...' onChange={(e)=>{setPass_word(e.target.value)}} />
          
          
          <div className="butt">
        <button  onClick={register}>SinUp</button>
        </div>

         </form>
         
         <div className='h5'> Already have an  account  <button className='sinup' onClick={login}>Log in</button> </div>
     </div>
    </div>
    
  )
}

export default Register