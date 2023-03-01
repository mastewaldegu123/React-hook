import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link, useNavigate } from 'react-router-dom'

 
function  ViewDepartment() {
  const [cate,setCate]=useState({})
  const {departmentID}=useParams()
  const navigate =useNavigate()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatedepartment/${departmentID}`).then((resp)=>setCate({...resp.data[0]}))
  },[departmentID])
  const goback=()=>{
    navigate("../department")
  }
  return (
    <div className='d12'>
    
    
      <div className="d14">
      <div className="tit"> 
          user detail
        </div>
      
          <div className='d15'>
          <strong>departmentID:</strong>
          <span>{cate.departmentID}</span>
          
           <strong>department_name:</strong>
          <span>{cate.department_name}</span>
          
           <strong>department_role:</strong>
          <span>{cate.department_role}</span>
          
           <strong>number_ofemployee:</strong>
          <span>{cate.number_ofemployee}</span>
          
           </div>
           
        
      </div>
      
           <button className="d16" onClick={goback}>Go Back</button>

    </div>
    
  )
  
}

export default ViewDepartment