import React from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"

function Home() {
  const navigate=useNavigate()
  const goback=()=>{navigate("/login")}
  return (
  
     <div className='all'>
    
       
      <div className='home'>
     
      <div className='nav'>
     
    <div className='nav1' onClick={goback}> 
      
    Login

        </div>
        </div>

      <div className='home1'>

        Welcome To Plan International
        <br/>
          Ethiopia
<div className='sqr'></div>
      </div>
      <div className='homeee'>Asset And Inventory Managment system</div>
    
      
      </div>
     
      
      
      
     </div>
    
  )
}

export default Home