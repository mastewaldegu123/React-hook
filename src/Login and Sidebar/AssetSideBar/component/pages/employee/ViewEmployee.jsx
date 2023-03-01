import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link, useNavigate } from 'react-router-dom'

 
function  ViewEmployee() {
  const [cate,setCate]=useState({})
  const {employeeID}=useParams()
  const navigate =useNavigate();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateemployee/${employeeID}`).then((resp)=>setCate({...resp.data[0]}))
  },[employeeID])
  const goback=()=>{
    navigate("../employee")
  }
  return (
    <div >
    <div className='e14'  >
    <div className="tit"> 
          user detail
        </div>
      
      
      
          <div className='e15'>
          <strong>empfname:</strong>
          <span>{cate.empfname}</span>
          
           <strong>emplname:</strong>
          <span>{cate.emplname}</span>
           
           <strong>gender:</strong>
          <span>{cate.gender}</span>
          
           
           <strong>emp_Email:</strong>
          <span>{cate.emp_Email}</span>
           
           
           <strong>phone:</strong>
          <span>{cate.phone}</span>
           
           
           <strong>salary:</strong>
          <span>{cate.salary}</span>
          
        
           <strong>dateofhire:</strong>
          <span>{cate.dateofhire}</span>
          
           
            <strong>postion:</strong>
            <span>{cate.postion}</span>
             
             <strong>tittle:</strong>
             <span>{cate.tittle}</span>
             
              
              <strong>ManagerID:</strong>
              <span>{cate.ManagerID}</span>
               
               <strong>departmentID:</strong>
              <span>{cate.departmentID}</span>
              
              
           
        
      </div>
    
         
          
    </div>
    <button className="e16" onClick={goback}>Go Back</button>
    </div>
  )
  
}

export default ViewEmployee