import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },1000)
    },[])
  return (

    <div> sorry the page is not found</div>
  )
}

export default NotFound