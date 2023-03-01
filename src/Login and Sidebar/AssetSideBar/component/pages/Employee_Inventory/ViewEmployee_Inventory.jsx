import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewEmployee_Inventory() {
  const [cate,setCate]=useState({})
  const {emp_invID}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/viewemployee_inventory/${emp_invID}`).then((resp)=>setCate({...resp.data[0]}))
  },[emp_invID])
  return (
    <div className='II12'>
    <div className='II14'>
    <div className="tit"> 
          <p>user detail</p>
        </div>
      
     
      
          <div className='II15'>
          <strong>emp_invID:</strong>
          <span>{cate.emp_invID}</span>
           
          <strong>project_name:</strong>
          <span>{cate.project_name}</span>
          
           <strong>inventory_type:</strong>
          <span>{cate.inventory_type}</span>
          
           <strong>date_recieved:</strong>
          <span>{cate.date_recieved}</span>
          
           <strong> inventoryID:</strong>
          <span>{cate.inventoryID}</span>
           
           <strong> requestNo:</strong>
          <span>{cate.requestNo}</span>
          
           <strong> departmentID:</strong>
          <span>{cate.departmentID}</span>
           </div>
           
        
      </div>
      <Link to="/mainpage/employee_inventory">
           <button className="II16">Go Back</button>
           </Link>
    </div>
    
  )
  
}

export default ViewEmployee_Inventory