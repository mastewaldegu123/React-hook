import React from 'react'
import axios from "axios"
function AdminHome() {
    const clik=()=>{
        axios.get("http://localhost:5000/admin")
    }
  return (
    <div>
        welcome admin do you want to go to you home
        <button onClick={clik}> clik me</button>
    </div>
  )
}

export default AdminHome