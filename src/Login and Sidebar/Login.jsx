import React,{useState,useEffect} from 'react'
import {useForm } from "react-hook-form"
import { useNavigate,Link } from 'react-router-dom'
import axios from "axios"
import "./style.css"

function Login() {
    
  const[username,setUsernames] =useState('')
  const [pass_word,setPass_word]=useState("")
 
  const [user,setUser]=useState('')
  axios.defaults.withCredentials = true;
  const navigate =useNavigate()
const login=(e)=>{
  
  axios.post("http://localhost:5000/login",{username:username, 
  pass_word:pass_word
  }).then((response)=>{
    if(response.data.message){
      setUser(response.data.message)
    }else{
      
      setUser(response.data[0].username)
      
    }
 
 
  })
}


useEffect(() => {
  axios.get("http://localhost:5000/login").then((response) => {
    if (response.data.loggedIn == true) {
      setUser(response.data.user[0].username);
      navigate('/mainpage')
    }
  });
}, []);



const goto =()=>{
  navigate('/register')
}
 
  return (
    <div>
       <div className='formm' >
      <form action="" className="formx">
      <h1>Login</h1>
      <p>{user}</p>
          <label className='login7' htmlFor="">username</label>
          <input className='login11' clastype="text"  placeholder='username...' onChange={(e)=>{setUsernames(e.target.value)}}/>
        
          <label className='login7' htmlFor="">pass_word</label>
          <input className='login11' type="password"   placeholder='pass_word...' onChange={(e)=>{setPass_word(e.target.value)}} />
          
          
          
          <div className="butt">
        <button  onClick={login}>login</button>
        </div>

         </form>
         <div className='h5'>if you don't have account  <button className='sinup' onClick={goto}>sin up</button> </div>
        
     </div>
    </div>
    
  )
}

export default Login